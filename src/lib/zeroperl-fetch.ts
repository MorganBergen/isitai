import { readFile } from "node:fs/promises";
import path from "node:path";

const WASM_FILE_NAME = "zeroperl-1.0.0.wasm";
const LOCAL_WASM_PATH = path.join(process.cwd(), "public", WASM_FILE_NAME);
const REMOTE_WASM_URL = "https://perl.objex.ai/zeroperl-1.0.0.wasm";

let cachedWasm: ArrayBuffer | null = null;

async function readLocalWasmBuffer(): Promise<ArrayBuffer> {
  const fileBuffer = await readFile(LOCAL_WASM_PATH);
  return fileBuffer.buffer.slice(
    fileBuffer.byteOffset,
    fileBuffer.byteOffset + fileBuffer.byteLength,
  ) as ArrayBuffer;
}

async function downloadRemoteWasmBuffer(): Promise<ArrayBuffer> {
  const fetchImpl = globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new Error("Global fetch is not available for downloading Zeroperl.");
  }

  const response = await fetchImpl(REMOTE_WASM_URL);
  if (!response.ok) {
    throw new Error(
      `Failed to download Zeroperl wasm (${response.status} ${response.statusText}).`,
    );
  }

  return await response.arrayBuffer();
}

async function getWasmBuffer(): Promise<ArrayBuffer> {
  if (cachedWasm) {
    return cachedWasm;
  }

  try {
    cachedWasm = await readLocalWasmBuffer();
  } catch {
    cachedWasm = await downloadRemoteWasmBuffer();
  }

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
