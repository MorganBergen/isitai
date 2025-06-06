'use client';

import { useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AppContext } from '../AppContext';
import { parseMetadata } from '@uswriting/exiftool';

// --- SVG Icons (No changes needed) ---
const FileInfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="currentColor"><mask id="mask0_113_147_page_v4" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect x="0.600098" y="0.599976" width="34.8" height="34.8" fill="#D9D9D9" /></mask><g mask="url(#mask0_113_147_page_v4)"><path d="M13.6499 26.7H22.3499C22.7607 26.7 23.1051 26.561 23.383 26.2831C23.6609 26.0052 23.7999 25.6608 23.7999 25.25C23.7999 24.8392 23.6609 24.4948 23.383 24.2169C23.1051 23.939 22.7607 23.8 22.3499 23.8H13.6499C13.2391 23.8 12.8947 23.939 12.6168 24.2169C12.3389 24.4948 12.1999 24.8392 12.1999 25.25C12.1999 25.6608 12.3389 26.0052 12.6168 26.2831C12.8947 26.561 13.2391 26.7 13.6499 26.7ZM13.6499 20.9H22.3499C22.7607 20.9 23.1051 20.761 23.383 20.4831C23.6609 20.2052 23.7999 19.8608 23.7999 19.45C23.7999 19.0392 23.6609 18.6948 23.383 18.4169C23.1051 18.139 22.7607 18 22.3499 18H13.6499C13.2391 18 12.8947 18.139 12.6168 18.4169C12.3389 18.6948 12.1999 19.0392 12.1999 19.45C12.1999 19.8608 12.3389 20.2052 12.6168 20.4831C12.8947 20.761 13.2391 20.9 13.6499 20.9ZM9.2999 32.5C8.5024 32.5 7.81969 32.216 7.25178 31.6481C6.68386 31.0802 6.3999 30.3975 6.3999 29.6V6.4C6.3999 5.6025 6.68386 4.91979 7.25178 4.35188C7.81969 3.78396 8.5024 3.5 9.2999 3.5H19.7037C20.0903 3.5 20.4589 3.5725 20.8093 3.7175C21.1597 3.8625 21.4678 4.06792 21.7337 4.33375L28.7662 11.3663C29.032 11.6321 29.2374 11.9402 29.3824 12.2906C29.5274 12.641 29.5999 13.0096 29.5999 13.3962V29.6C29.5999 30.3975 29.3159 31.0802 28.748 31.6481C28.1801 32.216 27.4974 32.5 26.6999 32.5H9.2999ZM19.4499 12.2C19.4499 12.6108 19.5889 12.9552 19.8668 13.2331C20.1447 13.511 20.4891 13.65 20.8999 13.65H26.6999L19.4499 6.4V12.2Z" className="file-info-svg-icon" /></g></svg>
);
const FileTypeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor"><mask id="mask0_115_59_page_v4" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="35"><rect width="34.8" height="34.8" fill="#D9D9D9" /></mask><g mask="url(#mask0_115_59_page_v4)"><path d="M7.2501 30.45C6.4526 30.45 5.76989 30.166 5.20197 29.5981C4.63406 29.0302 4.3501 28.3475 4.3501 27.55V7.24998C4.3501 6.45248 4.63406 5.76977 5.20197 5.20185C5.76989 4.63393 6.4526 4.34998 7.2501 4.34998H27.5501C28.3476 4.34998 29.0303 4.63393 29.5982 5.20185C30.1661 5.76977 30.4501 6.45248 30.4501 7.24998V27.55C30.4501 28.3475 30.1661 29.0302 29.5982 29.5981C29.0303 30.166 28.3476 30.45 27.5501 30.45H7.2501ZM10.1501 24.65H24.6501C24.9401 24.65 25.1576 24.5171 25.3026 24.2512C25.4476 23.9854 25.4234 23.7316 25.2301 23.49L21.2426 18.1612C21.0976 17.9679 20.9043 17.8712 20.6626 17.8712C20.4209 17.8712 20.2276 17.9679 20.0826 18.1612L16.3126 23.2L13.6301 19.6112C13.4851 19.4179 13.2918 19.3212 13.0501 19.3212C12.8084 19.3212 12.6151 19.4179 12.4701 19.6112L9.5701 23.49C9.37676 23.7316 9.3526 23.9854 9.4976 24.2512C9.6426 24.5171 9.8601 24.65 10.1501 24.65ZM12.3251 14.5C12.9293 14.5 13.4428 14.2885 13.8657 13.8656C14.2886 13.4427 14.5001 12.9291 14.5001 12.325C14.5001 11.7208 14.2886 11.2073 13.8657 10.7844C13.4428 10.3614 12.9293 10.15 12.3251 10.15C11.7209 10.15 11.2074 10.3614 10.7845 10.7844C10.3616 11.2073 10.1501 11.7208 10.1501 12.325C10.1501 12.9291 10.3616 13.4427 10.7845 13.8656C11.2074 14.2885 11.7209 14.5 12.3251 14.5Z" className="file-info-svg-icon" /></g></svg>
);
const getFormattedFileType = (fileName: string, mimeType: string): string => {
    const extensionMap: Record<string, { display: string; fullName: string }> = {
        png: { display: "PNG", fullName: "Portable Network Graphic" }, jpeg: { display: "JPEG", fullName: "Joint Photographic Experts Group" }, jpg: { display: "JPG", fullName: "Joint Photographic Experts Group" }, heic: { display: "HEIC", fullName: "High Efficiency Image Coding" }, jp2: { display: "JP2", fullName: "Joint Photographic Experts Group Second Generation" }, tiff: { display: "TIFF", fullName: "Tagged Image File Format" }, tif: { display: "TIF", fullName: "Tagged Image File Format" },
    };
    const nameParts = fileName.toLowerCase().split('.');
    const ext = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
    if (ext && extensionMap[ext]) return `${extensionMap[ext].display} - ${extensionMap[ext].fullName}`;
    if (mimeType) {
        const mimeShort = mimeType.split('/')[1];
        if (mimeShort && extensionMap[mimeShort]) return `${extensionMap[mimeShort].display} - ${extensionMap[mimeShort].fullName}`;
        return mimeType;
    }
    return 'Unknown';
};

export default function DecodePage() {
    const appContext = useContext(AppContext);

    useEffect(() => {
        if (appContext && appContext.uploadedFile && !appContext.exifData) {
            const fileToParse = appContext.uploadedFile;
            const extractExif = async () => {
                try {
                    const result = await parseMetadata(fileToParse, { args: ['-json', '-n'], transform: (data) => JSON.parse(data), });
                    if (result.success && Array.isArray(result.data) && result.data.length > 0) {
                        appContext.setExifData(result.data[0]);
                    } else { throw new Error(result.error || 'Failed to parse metadata.'); }
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
                    appContext.setExifData({ Error: errorMessage });
                }
            };
            extractExif();
        }
    }, [appContext]);

    if (!appContext || !appContext.uploadedFile) {
        return (
            <div className="app-container">
                <header className="app-header"><Link href="/upload" className="back-to-home-link">&larr; Back to Upload</Link></header>
                <main className="app-main" style={{ justifyContent: 'center', alignItems: 'center' }}><p>No image uploaded. Please go back and upload an image first.</p></main>
            </div>
        );
    }

    const { uploadedFile, imagePreviewUrl, exifData } = appContext;
    const fileInfo = { name: uploadedFile.name, type: getFormattedFileType(uploadedFile.name, uploadedFile.type) };

    const renderExifData = () => {
        if (!exifData) { return <pre><code>Extracting metadata...</code></pre>; }
        const error = exifData.Error as string | undefined;
        if (error) { return <pre><code>Error: {error}</code></pre>; }

        const formattedEntries = Object.entries(exifData).map(([key, value]) => {
            // This is the corrected regex. It adds a space before a capital letter
            // only if it's preceded by a lowercase letter or another capital letter
            // that is followed by a lowercase letter. This handles acronyms correctly.
            const formattedKey = key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
            return { key: formattedKey, value };
        });

        const maxKeyLength = Math.max(...formattedEntries.map(item => item.key.length));

        return (
            <pre>
                {formattedEntries.map(({ key, value }) => {
                    const valueStr = typeof value === 'object' ? JSON.stringify(value) : String(value);
                    const padding = ' '.repeat(maxKeyLength - key.length);
                    return `${key}${padding} : ${valueStr}\n`;
                })}
            </pre>
        );
    };

    return (
        <div className="app-container">
            <header className="app-header"><Link href="/upload" className="back-to-home-link">&larr; Back to Upload</Link></header>
            <main className="app-main">
                <div className="decode-page-container">
                    <div className="image-preview-card">
                        <div className="image-preview-outer-container">
                            <div className="image-preview-container">
                                {imagePreviewUrl && (
                                    <Image className="uploaded-image-style" src={imagePreviewUrl} alt="Uploaded image preview" layout="fill" objectFit="contain" />
                                )}
                            </div>
                        </div>
                        <div className="file-info-section">
                            <div className="file-info-row"><div className="icon-square-container"><FileInfoIcon /></div><div className="file-info-text-content"><span className="file-info-main-text">{fileInfo.name}</span><span className="file-info-label-text">File Name</span></div></div>
                            <div className="file-info-row"><div className="icon-square-container"><FileTypeIcon /></div><div className="file-info-text-content"><span className="file-info-main-text">{fileInfo.type}</span><span className="file-info-label-text">Image File Type</span></div></div>
                        </div>
                    </div>
                    <div className="metadata-card">
                        <h1><code>metadata</code></h1>
                        <div className="metadata-content-wrapper">
                            {renderExifData()}
                        </div>
                    </div>
                </div>
            </main>
            <footer className="app-footer">
                <p>&copy; {new Date().getFullYear()}{' '}<a href="https://www.linkedin.com/in/morganbergen" style={{ textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">Morgan Bergen</a>. All rights reserved.</p>
            </footer>
        </div>
    );
}