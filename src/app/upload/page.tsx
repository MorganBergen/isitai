'use client';

import { useRef, ChangeEvent, DragEvent, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Upload Icon for the dropzone (remains the same)
const DropzoneUploadIcon = ({ className, color }: { className?: string; color?: string }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
);

// Icons for the preview card - Using SVGs from your Figma specs
const FileInfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <mask id="mask0_113_147_page_v4" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
        <rect x="0.600098" y="0.599976" width="34.8" height="34.8" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_113_147_page_v4)">
        <path d="M13.6499 26.7H22.3499C22.7607 26.7 23.1051 26.561 23.383 26.2831C23.6609 26.0052 23.7999 25.6608 23.7999 25.25C23.7999 24.8392 23.6609 24.4948 23.383 24.2169C23.1051 23.939 22.7607 23.8 22.3499 23.8H13.6499C13.2391 23.8 12.8947 23.939 12.6168 24.2169C12.3389 24.4948 12.1999 24.8392 12.1999 25.25C12.1999 25.6608 12.3389 26.0052 12.6168 26.2831C12.8947 26.561 13.2391 26.7 13.6499 26.7ZM13.6499 20.9H22.3499C22.7607 20.9 23.1051 20.761 23.383 20.4831C23.6609 20.2052 23.7999 19.8608 23.7999 19.45C23.7999 19.0392 23.6609 18.6948 23.383 18.4169C23.1051 18.139 22.7607 18 22.3499 18H13.6499C13.2391 18 12.8947 18.139 12.6168 18.4169C12.3389 18.6948 12.1999 19.0392 12.1999 19.45C12.1999 19.8608 12.3389 20.2052 12.6168 20.4831C12.8947 20.761 13.2391 20.9 13.6499 20.9ZM9.2999 32.5C8.5024 32.5 7.81969 32.216 7.25178 31.6481C6.68386 31.0802 6.3999 30.3975 6.3999 29.6V6.4C6.3999 5.6025 6.68386 4.91979 7.25178 4.35188C7.81969 3.78396 8.5024 3.5 9.2999 3.5H19.7037C20.0903 3.5 20.4589 3.5725 20.8093 3.7175C21.1597 3.8625 21.4678 4.06792 21.7337 4.33375L28.7662 11.3663C29.032 11.6321 29.2374 11.9402 29.3824 12.2906C29.5274 12.641 29.5999 13.0096 29.5999 13.3962V29.6C29.5999 30.3975 29.3159 31.0802 28.748 31.6481C28.1801 32.216 27.4974 32.5 26.6999 32.5H9.2999ZM19.4499 12.2C19.4499 12.6108 19.5889 12.9552 19.8668 13.2331C20.1447 13.511 20.4891 13.65 20.8999 13.65H26.6999L19.4499 6.4V12.2Z"
          className="file-info-svg-icon"
        />
      </g>
    </svg>
);

const FileTypeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
      <mask id="mask0_115_59_page_v4" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="35">
        <rect width="34.8" height="34.8" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_115_59_page_v4)">
        <path d="M7.2501 30.45C6.4526 30.45 5.76989 30.166 5.20197 29.5981C4.63406 29.0302 4.3501 28.3475 4.3501 27.55V7.24998C4.3501 6.45248 4.63406 5.76977 5.20197 5.20185C5.76989 4.63393 6.4526 4.34998 7.2501 4.34998H27.5501C28.3476 4.34998 29.0303 4.63393 29.5982 5.20185C30.1661 5.76977 30.4501 6.45248 30.4501 7.24998V27.55C30.4501 28.3475 30.1661 29.0302 29.5982 29.5981C29.0303 30.166 28.3476 30.45 27.5501 30.45H7.2501ZM10.1501 24.65H24.6501C24.9401 24.65 25.1576 24.5171 25.3026 24.2512C25.4476 23.9854 25.4234 23.7316 25.2301 23.49L21.2426 18.1612C21.0976 17.9679 20.9043 17.8712 20.6626 17.8712C20.4209 17.8712 20.2276 17.9679 20.0826 18.1612L16.3126 23.2L13.6301 19.6112C13.4851 19.4179 13.2918 19.3212 13.0501 19.3212C12.8084 19.3212 12.6151 19.4179 12.4701 19.6112L9.5701 23.49C9.37676 23.7316 9.3526 23.9854 9.4976 24.2512C9.6426 24.5171 9.8601 24.65 10.1501 24.65ZM12.3251 14.5C12.9293 14.5 13.4428 14.2885 13.8657 13.8656C14.2886 13.4427 14.5001 12.9291 14.5001 12.325C14.5001 11.7208 14.2886 11.2073 13.8657 10.7844C13.4428 10.3614 12.9293 10.15 12.3251 10.15C11.7209 10.15 11.2074 10.3614 10.7845 10.7844C10.3616 11.2073 10.1501 11.7208 10.1501 12.325C10.1501 12.9291 10.3616 13.4427 10.7845 13.8656C11.2074 14.2885 11.7209 14.5 12.3251 14.5Z"
          className="file-info-svg-icon"
        />
      </g>
    </svg>
);

const DecodeButtonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <mask id="mask0_121_119_page_v4" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
        <rect width="18" height="18" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_121_119_page_v4)">
        <path d="M7.125 12C5.7625 12 4.60938 11.5281 3.66563 10.5844C2.72188 9.64062 2.25 8.4875 2.25 7.125C2.25 5.7625 2.72188 4.60938 3.66563 3.66563C4.60938 2.72188 5.7625 2.25 7.125 2.25C8.4875 2.25 9.64062 2.72188 10.5844 3.66563C11.5281 4.60938 12 5.7625 12 7.125C12 7.675 11.9125 8.19375 11.7375 8.68125C11.5625 9.16875 11.325 9.6 11.025 9.975L15.225 14.175C15.3625 14.3125 15.4313 14.4875 15.4313 14.7C15.4313 14.9125 15.3625 15.0875 15.225 15.225C15.0875 15.3625 14.9125 15.4313 14.7 15.4313C14.4875 15.4313 14.3125 15.3625 14.175 15.225L9.975 11.025C9.6 11.325 9.16875 11.5625 8.68125 11.7375C8.19375 11.9125 7.675 12 7.125 12ZM7.125 10.5C8.0625 10.5 8.85938 10.1719 9.51562 9.51562C10.1719 8.85938 10.5 8.0625 10.5 7.125C10.5 6.1875 10.1719 5.39062 9.51562 4.73438C8.85938 4.07812 8.0625 3.75 7.125 3.75C6.1875 3.75 5.39062 4.07812 4.73438 4.73438C4.07812 5.39062 3.75 6.1875 3.75 7.125C3.75 8.0625 4.07812 8.85938 4.73438 9.51562C5.39062 10.1719 6.1875 10.5 7.125 10.5Z"
          className="decode-button-svg-icon"
        />
      </g>
    </svg>
);

// This will store the formatted type string
interface UploadedFileInfo {
    src: string;
    name: string;
    type: string; 
}

// Helper function to format the file type
const getFormattedFileType = (fileName: string, mimeType: string): string => {
    const extensionMap: Record<string, { display: string; fullName: string }> = {
        png: { display: "PNG", fullName: "Portable Network Graphic" },
        jpeg: { display: "JPEG", fullName: "Joint Photographic Experts Group" },
        jpg: { display: "JPG", fullName: "Joint Photographic Experts Group" },
        heic: { display: "HEIC", fullName: "High Efficiency Image Coding" },
        jp2: { display: "JP2", fullName: "Joint Photographic Experts Group Second Generation" },
        tiff: { display: "TIFF", fullName: "Tagged Image File Format" },
        tif: { display: "TIF", fullName: "Tagged Image File Format" },
    };

    const nameParts = fileName.toLowerCase().split('.');
    const ext = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

    if (ext && extensionMap[ext]) {
        return `${extensionMap[ext].display} - ${extensionMap[ext].fullName}`;
    }

    if (mimeType) {
        const mimeShort = mimeType.split('/')[1];
        if (mimeShort && extensionMap[mimeShort]) {
             return `${extensionMap[mimeShort].display} - ${extensionMap[mimeShort].fullName}`;
        }
        return mimeType;
    }

    return 'Unknown';
};


export default function UploadPage() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const [uploadedFile, setUploadedFile] = useState<UploadedFileInfo | null>(null);

    const handleUploadAreaClick = () => {
        if (!uploadedFile) {
            fileInputRef.current?.click();
        }
    };

    const processFiles = (files: FileList | null) => {
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedFile({
                    src: e.target?.result as string,
                    name: file.name,
                    type: getFormattedFileType(file.name, file.type),
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        processFiles(event.target.files);
        if (event.target) {
            event.target.value = "";
        }
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (!uploadedFile) setIsDraggingOver(true);
    };

    const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (!uploadedFile) setIsDraggingOver(true);
    };

    const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.currentTarget.contains(event.relatedTarget as Node)) {
            return;
        }
        setIsDraggingOver(false);
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDraggingOver(false);
        if (!uploadedFile) {
            processFiles(event.dataTransfer.files);
        }
    };

    const dropzoneIconColor = "var(--backgroundColor-gray-dark-6)";

    return (
        <div className="app-container">
            <header className="app-header">
                <Link href="/" className="back-to-home-link">
                    &larr; Back to Home
                </Link>
            </header>

            <main className="app-main upload-page-main">
                {!uploadedFile ? (
                    <div
                        className={`upload-dropzone ${isDraggingOver ? 'drag-over' : ''}`}
                        onClick={handleUploadAreaClick}
                        onDragOver={handleDragOver}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        role="button"
                        tabIndex={0}
                        aria-label="Upload image dropzone"
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept=".png,.jpeg,.jpg,.heic,.jp2,.tiff,.tif"
                            style={{ display: 'none' }}
                        />
                        <div className="icon-background-square">
                            <DropzoneUploadIcon className="upload-area-icon" color={dropzoneIconColor} />
                        </div>
                        <p className="upload-main-text">Choose photos to upload</p>
                        <p className="upload-sub-text">or drag and drop</p>
                    </div>
                ) : (
                    <div className="image-preview-card">
                        <div className="image-preview-outer-container">
                            <div className="image-preview-container">
                                <Image
                                    className="uploaded-image-style"
                                    src={uploadedFile.src}
                                    alt="Uploaded image preview"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className="file-info-section">
                            <div className="file-info-row">
                                <div className="icon-square-container">
                                    <FileInfoIcon />
                                </div>
                                <div className="file-info-text-content">
                                    <span className="file-info-main-text">{uploadedFile.name}</span>
                                    <span className="file-info-label-text">File Name</span>
                                </div>
                            </div>
                            <div className="file-info-row">
                                <div className="icon-square-container">
                                    <FileTypeIcon />
                                </div>
                                <div className="file-info-text-content">
                                    <span className="file-info-main-text">{uploadedFile.type}</span>
                                    <span className="file-info-label-text">Image File Type</span>
                                </div>
                            </div>
                        </div>
                        <Link href="/decode" className="decode-button">decode page</Link>
                    </div>
                )}
            </main>

            <footer className="app-footer">
            <p>
                    &copy; {new Date().getFullYear()}{' '}
                    <a
                        href="https://www.linkedin.com/in/morganbergen"
                        style={{ textDecoration: 'underline' }}
                        target="_blank" // Opens the link in a new tab
                        rel="noopener noreferrer" // Security measure for target="_blank"
                    >
                        Morgan Bergen
                    </a>
                    . All rights reserved.
                </p>
            </footer>
        </div>
    );
}
