'use client';

import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Using `unknown` is safer than `any` because it forces you to perform type-checking.
export type FullExifData = Record<string, unknown>;

interface AppContextType {
  uploadedFile: File | null;
  setUploadedFile: Dispatch<SetStateAction<File | null>>;
  exifData: FullExifData | null;
  setExifData: Dispatch<SetStateAction<FullExifData | null>>;
  imagePreviewUrl: string | null;
  setImagePreviewUrl: Dispatch<SetStateAction<string | null>>;
  decodeCount: number;
  setDecodeCount: Dispatch<SetStateAction<number>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [exifData, setExifData] = useState<FullExifData | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [decodeCount, setDecodeCount] = useState(0);

  const value = {
    uploadedFile,
    setUploadedFile,
    exifData,
    setExifData,
    imagePreviewUrl,
    setImagePreviewUrl,
    decodeCount,
    setDecodeCount
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
