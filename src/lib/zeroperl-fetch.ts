import { readFile } from "node:fs/promises";
import path from "node:path";

/** WASM shipped with @6over3/zeroperl-ts - avoids CORS/403 from remote */
const NODE_MODULES_WASM_PATH = path.join(
  process.cwd(),
  "node_modules",
  "@6over3",
  "zeroperl-ts",
  "dist",
  "esm",
  "zeroperl.wasm",
);

const WASM_FILE_NAME = "zeroperl-1.0.0.wasm";
const PUBLIC_WASM_PATH = path.join(process.cwd(), "public", WASM_FILE_NAME);
const REMOTE_WASM_URL = "https://perl.objex.ai/zeroperl-1.0.0.wasm";

let cachedWasm: ArrayBuffer | null = null;

function bufferToArrayBuffer(fileBuffer: Buffer): ArrayBuffer {
  return fileBuffer.buffer.slice(
    fileBuffer.byteOffset,
    fileBuffer.byteOffset + fileBuffer.byteLength,
  ) as ArrayBuffer;
}

async function readWasmFromPath(filePath: string): Promise<ArrayBuffer> {
  const fileBuffer = await readFile(filePath);
  return bufferToArrayBuffer(fileBuffer);
}

/** Prefer same-origin URL in production to avoid CORS/403 from perl.objex.ai */
function getSameOriginWasmUrl(): string | null {
  const base =
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;
  return base ? `${base}/api/zeroperl.wasm` : null;
}

async function fetchWasmFromUrl(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`WASM fetch failed: ${res.status} ${res.statusText}`);
  }
  return res.arrayBuffer();
}

async function getWasmBuffer(): Promise<ArrayBuffer> {
  if (cachedWasm) {
    return cachedWasm;
  }

  // 1) Use WASM from node_modules (no network, no CORS)
  try {
    cachedWasm = await readWasmFromPath(NODE_MODULES_WASM_PATH);
    return cachedWasm;
  } catch {
    // continue
  }

  // 2) Use WASM from public/ if present
  try {
    cachedWasm = await readWasmFromPath(PUBLIC_WASM_PATH);
    return cachedWasm;
  } catch {
    // continue
  }

  // 3) Same-origin API (avoids CORS when deployed)
  const sameOriginUrl = getSameOriginWasmUrl();
  if (sameOriginUrl) {
    try {
      cachedWasm = await fetchWasmFromUrl(sameOriginUrl);
      return cachedWasm;
    } catch {
      // continue
    }
  }

  // 4) Remote fallback (may 403 in browser or from some hosts)
  cachedWasm = await fetchWasmFromUrl(REMOTE_WASM_URL);
  return cachedWasm;
}

export async function fetchZeroperlWasm(): Promise<Response> {
  const wasmBuffer = await getWasmBuffer();
  const ResponseCtor = globalThis.Response;
  if (typeof ResponseCtor !== "function") {
    throw new Error("Global Response constructor is not available in this environment.");
  }

  return new ResponseCtor(wasmBuffer.slice(0), {
    headers: { "Content-Type": "application/wasm" },
  });
}
