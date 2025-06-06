'use client';

import { useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AppContext } from '../AppContext'; // <-- Corrected import
import { parseMetadata } from '@uswriting/exiftool';
import styles from './decodePage.module.css';

export default function DecodePage() {
    const appContext = useContext(AppContext);

    useEffect(() => {
        if (appContext && appContext.uploadedFile && !appContext.exifData) {
            const fileToParse = appContext.uploadedFile;
            
            const extractExif = async () => {
                try {
                    const result = await parseMetadata(fileToParse, {
                        args: ['-json', '-n'],
                        transform: (data) => JSON.parse(data),
                    });

                    if (result.success && Array.isArray(result.data) && result.data.length > 0) {
                        const metadataObject = result.data[0];
                        console.log('Extracted EXIF data:', metadataObject);
                        appContext.setExifData(metadataObject);
                    } else {
                        throw new Error(result.error || 'Failed to parse metadata.');
                    }
                } catch (error) {
                    console.error('Error processing EXIF data:', error);
                    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
                    appContext.setExifData({ Error: errorMessage });
                }
            };

            extractExif();
        }
    }, [appContext]);

    if (!appContext || (!appContext.imagePreviewUrl && !appContext.uploadedFile)) {
        return (
            <div className="app-container">
                 <header className="app-header" style={{ borderBottom: 'none' }}>
                    <Link href="/upload" className="back-to-home-link">
                        &larr; Back to Upload
                    </Link>
                </header>
                <main className="app-main" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <p>No image uploaded. Please go back and upload an image first.</p>
                </main>
            </div>
        );
    }
    
    const { imagePreviewUrl, exifData } = appContext;

    const renderExifData = () => {
        if (!exifData) {
            return <div><code>Extracting metadata...</code></div>;
        }

        const error = exifData.Error as string | undefined;
        if (error) {
            return <div><code>Error: {error}</code></div>;
        }

        const formattedEntries = Object.entries(exifData).map(([key, value]) => ({
            key: key.replace(/([A-Z])/g, ' $1').trim(),
            value,
        }));

        const maxKeyLength = Math.max(...formattedEntries.map(item => item.key.length));

        return (
            <pre>
                <code>
                    {formattedEntries.map(({ key, value }) => {
                        const valueStr = typeof value === 'object' ? JSON.stringify(value) : String(value);
                        const padding = ' '.repeat(maxKeyLength - key.length);
                        return <div key={key}>{`${key}${padding} : ${valueStr}`}</div>;
                    })}
                </code>
            </pre>
        );
    };

    return (
        <div className="app-container">
            <header className="app-header" style={{ borderBottom: 'none' }}>
                <Link href="/upload" className="back-to-home-link">
                    &larr; Back to Upload
                </Link>
            </header>

            <main className="app-main">
                <section className={styles.homepageSection}>
                    <div className={styles.rightColumn}>
                        {imagePreviewUrl ? (
                            <Image src={imagePreviewUrl} alt="Uploaded image for decoding" className="cube-graphic" width={400} height={400} style={{ borderRadius: '10px', objectFit: 'contain' }}/>
                        ) : (
                            <div style={{width: 400, height: 400, backgroundColor: '#333', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>No Image Preview</div>
                        )}
                    </div>
                    <div className={styles.leftColumnWrapper}>
                        <div className={styles.leftColumnContent}>
                            <h1><code>metadata</code></h1>
                            <div className="welcome-text">
                               {renderExifData()}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
             <footer className="app-footer">
                <p>&copy; {new Date().getFullYear()}{' '}<a href="https://www.linkedin.com/in/morganbergen" style={{ textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">Morgan Bergen</a>. All rights reserved.</p>
            </footer>
        </div>
    );
}