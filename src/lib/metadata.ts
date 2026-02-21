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
    const message =
      response.status === 413
        ? "Image too large (max 4 MB). Use a smaller or compressed image."
        : payload?.error ?? "Failed to extract metadata.";
    return {
      success: false,
      metadata: payload?.metadata ?? null,
      error: message,
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
