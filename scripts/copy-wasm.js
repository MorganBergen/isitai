"use strict";
/**
 * Copies zeroperl WASM from node_modules to public/ so Vercel (and other hosts)
 * have it in the deployment. Serverless bundles often don't include node_modules
 * files that are only read at runtime.
 */
const fs = require("fs");
const path = require("path");

const source = path.join(
  process.cwd(),
  "node_modules",
  "@6over3",
  "zeroperl-ts",
  "dist",
  "esm",
  "zeroperl.wasm"
);
const destDir = path.join(process.cwd(), "public");
const dest = path.join(destDir, "zeroperl-1.0.0.wasm");

if (!fs.existsSync(source)) {
  console.warn("copy-wasm: source not found, skip (run npm install first):", source);
  process.exit(0);
}

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(source, dest);
console.log("copy-wasm: copied zeroperl.wasm to public/zeroperl-1.0.0.wasm");
