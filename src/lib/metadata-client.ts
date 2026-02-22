"use client";

import type { MetadataResult } from "@/types/metadata";

/**
 * Extract EXIF/metadata in the browser. File never leaves the client — no upload, no size limit.
 * Uses exifr; supports JPEG, PNG, HEIC, TIFF, etc.
 */
export async function extractMetadataClient(file: File): Promise<MetadataResult> {
  try {
    const exifr = (await import("exifr")).default;
    const tags = await exifr.parse(file);
    if (tags && typeof tags === "object" && Object.keys(tags).length > 0) {
      return {
        success: true,
        metadata: tags as Record<string, unknown>,
      };
    }
    return {
      success: false,
      metadata: null,
      error: "No metadata found in this image.",
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to read metadata.";
    return {
      success: false,
      metadata: null,
      error: message,
    };
  }
}
