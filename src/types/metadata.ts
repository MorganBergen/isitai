export interface MetadataResult {
  success: boolean;
  metadata: Record<string, unknown> | null;
  error?: string;
}
