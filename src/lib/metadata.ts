import { parseMetadata } from "@uswriting/exiftool";

export interface MetadataResult {
  success: boolean;
  metadata: Record<string, unknown> | null;
  error?: string;
}

export async function extractMetadata(file: File): Promise<MetadataResult> {
  try {
    const result = await parseMetadata(file, {
      args: ["-json", "-n"],
      transform: (data) => JSON.parse(data),
    });

    if (
      result.success &&
      Array.isArray(result.data) &&
      result.data.length > 0
    ) {
      return { success: true, metadata: result.data[0] };
    }

    return {
      success: false,
      metadata: null,
      error: result.error || "Failed to parse metadata.",
    };
  } catch (err) {
    return {
      success: false,
      metadata: null,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
