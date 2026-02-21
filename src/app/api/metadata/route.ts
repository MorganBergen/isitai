/**
 * @file metadata.ts
 * @brief   metadata extraction API endpoint
 * @class   MetadataRoute
 */

import { NextResponse } from "next/server";
import { parseMetadata } from "@uswriting/exiftool";
import { fetchZeroperlWasm } from "@/lib/zeroperl-fetch";

/**
 * @description   metadata extraction arguments
 * 
 */
const METADATA_ARGS: string[] = ["-json", "-n"];

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!file || !(file instanceof File)) {
    return NextResponse.json(
      {
        success: false,
        metadata: null,
        error: "No file was provided for metadata extraction.",
      },
      { status: 400 },
    );
  }

  try {
    const result = await parseMetadata(file, {
      args: METADATA_ARGS,
      transform: (data) => JSON.parse(data),
      fetch: fetchZeroperlWasm,
    });

    if (result.success && Array.isArray(result.data) && result.data.length > 0) {
      return NextResponse.json({
        success: true,
        metadata: result.data[0] as Record<string, unknown>,
      });
    }

    const errorMessage =
      result.success === false && "error" in result
        ? result.error
        : "Failed to parse metadata.";
    return NextResponse.json({
      success: false,
      metadata: null,
      error: errorMessage,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "An unexpected error occurred while decoding metadata.";
    return NextResponse.json(
      {
        success: false,
        metadata: null,
        error: message,
      },
      { status: 500 },
    );
  }
}
