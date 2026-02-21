import type { MetadataResult } from "@/types/metadata";

const METADATA_ENDPOINT = "/api/metadata";

export async function extractMetadata(file: File): Promise<MetadataResult> {
  const body = new FormData();
  body.append("file", file);

  const response = await fetch(METADATA_ENDPOINT, {
    method: "POST",
    body,
  });

  let payload: MetadataResult | undefined;
  try {
    payload = (await response.json()) as MetadataResult;
  } catch {
    // ignore, we will handle missing payload below
  }

  if (!response.ok) {
    return {
      success: false,
      metadata: payload?.metadata ?? null,
      error: payload?.error ?? "Failed to extract metadata.",
    };
  }

  if (!payload) {
    return {
      success: false,
      metadata: null,
      error: "Received invalid response from the metadata service.",
    };
  }

  return {
    success: payload.success,
    metadata: payload.metadata,
    error: payload.error,
  };
}
