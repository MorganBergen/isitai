'use client';

// import { useContext, useRef, ChangeEvent, DragEvent, useState } from 'react';
// import { ThemeContext } from '../ThemeContext';
import { useRef, ChangeEvent, DragEvent, useState } from 'react';
import Link from 'next/link';

// Updated UploadIcon SVG component to accept a color prop
const UploadIcon = ({ className, color }: { className?: string; color?: string }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color || "currentColor"} // Use passed color or default to CSS currentColor
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
);

export default function UploadPage() {
    // const { theme: _theme } = useContext(ThemeContext);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDraggingOver, setIsDraggingOver] = useState(false);

    const handleUploadAreaClick = () => {
        fileInputRef.current?.click();
    };

    const processFiles = (files: FileList | null) => {
        if (files && files.length > 0) {
            const file = files[0];
            console.log('Selected file:', file.name, file.type, file.size);
            alert(`File ready for processing: ${file.name}`);
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
        setIsDraggingOver(true);
    };

    const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDraggingOver(true);
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
        processFiles(event.dataTransfer.files);
    };

    const iconColor = "var(--backgroundColor-gray-dark-6)"; // #7A7A7A for both themes

    return (
        <div className="app-container">
            <header className="app-header" style={{ borderBottom: 'none', minHeight: '60px' }}>
                <Link href="/" className="back-to-home-link">
                    &larr; Back to Home
                </Link>
            </header>

            <main className="app-main upload-page-main">
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
                        accept=".png,.jpeg,.jpg,.heic"
                        style={{ display: 'none' }}
                    />
                    {/* New square container for the icon */}
                    <div className="icon-background-square">
                        <UploadIcon className="upload-area-icon" color={iconColor} />
                    </div>
                    <p className="upload-main-text">Choose photos to upload</p>
                    <p className="upload-sub-text">or drag and drop</p>
                </div>
            </main>

            <footer className="app-footer" style={{ minHeight: '60px' }}>
                <p>&copy; {new Date().getFullYear()} Morgan Bergen. All rights reserved.</p>
            </footer>
        </div>
    );
}