import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

/** Serves zeroperl WASM same-origin so server-side fetch avoids CORS/403 from perl.objex.ai */
const NODE_MODULES_WASM = path.join(
  process.cwd(),
  "node_modules",
  "@6over3",
  "zeroperl-ts",
  "dist",
  "esm",
  "zeroperl.wasm",
);
const PUBLIC_WASM = path.join(process.cwd(), "public", "zeroperl-1.0.0.wasm");

export async function GET() {
  try {
    const buffer = await readFile(NODE_MODULES_WASM);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/wasm",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    try {
      const buffer = await readFile(PUBLIC_WASM);
      return new NextResponse(buffer, {
        headers: {
          "Content-Type": "application/wasm",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    } catch {
      return new NextResponse("WASM not found", { status: 404 });
    }
  }
}
