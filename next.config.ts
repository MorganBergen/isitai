/**
 *    @file   ./next.config.ts
 *    @description next.js configuration file.
 *    this file is used to configure various aspects of the next.js application 
 *    such as webpack, environment variables, and other build settings.  
 *
 */

import type { NextConfig } from "next";

// Node 25 exposes an empty `localStorage` object without the usual API.
// Next's dev overlay still tries to call `localStorage.getItem`, which throws
// until we give it a minimal polyfill.
const isBrokenLocalStorage =
  typeof globalThis.localStorage !== "undefined" &&
  typeof (globalThis.localStorage as Storage).getItem !== "function";

if (isBrokenLocalStorage) {

  const store = new Map<string, string>();

  globalThis.localStorage = {
    getItem(key) {
      return store.has(key) ? store.get(key)! : null;
    },
    setItem(key, value) {
      store.set(key, String(value));
    },
    removeItem(key) {
      store.delete(key);
    },
    clear() {
      store.clear();
    },
    key(index) {
      const keys = Array.from(store.keys());
      return keys[index] ?? null;
    },
    get length() {
      return store.size;
    },
  } satisfies Storage;
}

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
