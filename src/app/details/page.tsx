'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the structure of your EXIF data entry for the detail view
interface ExifDisplayInfo {
    key: string; // The display-friendly key name
    originalKey: string; // The key as it appears in the EXIF data object
    value: string | number | undefined | null; // Keep this flexible for different data types
    description: string;
    iconName: string; // Google Fonts Material Symbol name
    group: string; // For potential future filtering/grouping
}

// Define the structure for the full EXIF dataset
// Using 'unknown' as the value type to avoid 'any'
// This forces you to handle specific property access with type checks later if needed.
type FullExifData = Record<string, unknown>; // FIX: Changed 'any' to 'unknown'

// --- SVG Icon Components from Figma Specs ---
const ViewDetailsSVGIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="7.5" r="7.5" className="view-details-button-svg-circle" />
    </svg>
);

const DownloadSVGIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="currentColor" style={{ verticalAlign: 'middle' }}>
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"/>
    </svg>
);

// --- Generic Material Icon Renderer ---
// REMOVED: MaterialIcon component is commented out in your JSX, so it's unused.
// If you uncomment its usage in JSX, uncomment this component too.
// const MaterialIcon = ({ iconName, className }: { iconName: string; className?: string }) => {
//     return <span className={`material-symbols-outlined ${className}`}>{iconName}</span>;
// };

// --- EXIF Field to Icon and Description Mapping ---
// This should be comprehensive. Using a selection for brevity here.
// Add more fields based on your exiftool output and desired icon coverage.
const EXIF_METADATA_CONFIG: Record<string, { displayName: string; icon: string; description: string; group: string }> = {
    // File System / Basic Info
    "FileName": { displayName: "File Name", icon: "description", description: "The original name of the image file.", group: "File" },
    "FileSize": { displayName: "File Size", icon: "save", description: "The size of the image file on disk.", group: "File" },
    "FileType": { displayName: "File Type", icon: "extension", description: "The general type of the image file (e.g., PNG, JPEG).", group: "File" },
    "MIMEType": { displayName: "MIME Type", icon: "code_blocks", description: "The standardized technical format identifier for the image.", group: "File" },
    "FileModifyDate": { displayName: "Modify Date (File)", icon: "edit_calendar", description: "Date and time the file's content was last changed.", group: "File System" },

    // Image Dimensions & Format
    "ImageWidth": { displayName: "Image Width", icon: "width_full", description: "The width of the image in pixels.", group: "Image Specs" },
    "ImageHeight": { displayName: "Image Height", icon: "height", description: "The height of the image in pixels.", group: "Image Specs" },
    "BitDepth": { displayName: "Bit Depth", icon: "layers", description: "Number of bits per color component.", group: "Image Specs" },
    "ColorType": { displayName: "Color Type", icon: "palette", description: "The color system used (e.g., RGB, Grayscale).", group: "Image Specs" },
    "Compression": { displayName: "Compression", icon: "compress", description: "Method used to compress image data.", group: "Image Specs" },
    "Orientation": { displayName: "Orientation", icon: "screen_rotation", description: "How the image should be oriented for viewing.", group: "Image Specs" },
    "XResolution": { displayName: "X Resolution", icon: "aspect_ratio", description: "Pixels per resolution unit in image width.", group: "Image Specs" },
    "YResolution": { displayName: "Y Resolution", icon: "aspect_ratio", description: "Pixels per resolution unit in image height.", group: "Image Specs" },
    "ResolutionUnit": { displayName: "Resolution Unit", icon: "straighten", description: "Unit for X and Y resolution (e.g., inches, cm).", group: "Image Specs" },

    // Device & Software
    "Make": { displayName: "Device Make", icon: "label_important", description: "Manufacturer of the capture device.", group: "Device" },
    "Model": { displayName: "Device Model", icon: "photo_camera", description: "Specific model of the camera or device.", group: "Device" }, // Often 'Model' not 'CameraModelName' from exiftool-web
    "CameraModelName": { displayName: "Camera Model", icon: "photo_camera", description: "Specific model of the camera or device.", group: "Device" },
    "Software": { displayName: "Software", icon: "terminal", description: "Software used to create or modify the image.", group: "Device" },
    "LensModel": { displayName: "Lens Model", icon: "lens", description: "Specific model of the lens used.", group: "Device" },

    // Date & Time Stamps
    "DateTimeOriginal": { displayName: "Date/Time Original", icon: "event", description: "Date and time image was originally captured.", group: "Date/Time" },
    "CreateDate": { displayName: "Create Date", icon: "calendar_add_on", description: "Date and time image metadata was created.", group: "Date/Time" },
    "ModifyDate": { displayName: "Modify Date (EXIF)", icon: "edit_note", description: "Date and time image data or EXIF was last modified.", group: "Date/Time" },
    "OffsetTime": { displayName: "Offset Time", icon: "schedule_send", description: "Time zone offset from UTC for date/time fields.", group: "Date/Time" },

    // Exposure & Camera Settings
    "ExposureTime": { displayName: "Exposure Time", icon: "shutter_speed", description: "Duration camera shutter was open (e.g., 1/100s).", group: "Exposure" },
    "FNumber": { displayName: "F-Number", icon: "camera", description: "Lens aperture setting (e.g., f/1.8).", group: "Exposure" },
    "ISO": { displayName: "ISO", icon: "iso", description: "Camera's sensitivity to light.", group: "Exposure" },
    "FocalLength": { displayName: "Focal Length", icon: "center_focus_weak", description: "Focal length of the lens in millimeters.", group: "Exposure" },
    "ExposureProgram": { displayName: "Exposure Program", icon: "auto_awesome", description: "Mode set by photographer (e.g., Auto, Manual).", group: "Exposure" },
    "MeteringMode": { displayName: "Metering Mode", icon: "speed", description: "Method camera used to measure light for exposure.", group: "Exposure" },
    "Flash": { displayName: "Flash", icon: "flash_on", description: "Information about whether the flash fired and its mode.", group: "Exposure" },

    // GPS / Location Data
    "GPSLatitude": { displayName: "GPS Latitude", icon: "location_on", description: "North/South geographic coordinate.", group: "GPS" },
    "GPSLongitude": { displayName: "GPS Longitude", icon: "location_on", description: "East/West geographic coordinate.", group: "GPS" },
    "GPSAltitude": { displayName: "GPS Altitude", icon: "altitude", description: "Altitude where image was taken.", group: "GPS" },
    "GPSTimeStamp": { displayName: "GPS Time Stamp", icon: "access_time_filled", description: "UTC time of the GPS measurement.", group: "GPS" }, // Note: Key might be GPSTimeStamp
    "GPSDateStamp": { displayName: "GPS Date Stamp", icon: "calendar_month", description: "UTC date of the GPS measurement.", group: "GPS" },

    // ICC Profile
    "ProfileDescription": { displayName: "Color Profile", icon: "color_lens", description: "Description of the embedded ICC color profile.", group: "Profile" },

    // Add more mappings here to reach ~60 icons...
    // Example:
    "ExifVersion": { displayName: "EXIF Version", icon: "tag", description: "Version of the EXIF standard used.", group: "Technical" },
    "ComponentsConfiguration": { displayName: "Color Components", icon: "gradient", description: "Order of color components (e.g., Y, Cb, Cr).", group: "Technical" },
    "SceneCaptureType": { displayName: "Scene Capture Type", icon: "camera_enhance", description: "Type of scene (e.g., Standard, Landscape).", group: "Technical" },
    "DigitalZoomRatio": { displayName: "Digital Zoom", icon: "zoom_in", description: "Digital zoom ratio when image was shot.", group: "Technical" },
    "XMPToolkit": { displayName: "XMP Toolkit", icon: "build_circle", description: "Version of Adobe XMP Toolkit used.", group: "Technical" },
};


export default function DetailsPage() {
    // ** IMPORTANT: Replace these with actual data passed to this page **
    // This data would typically come from a previous step (e.g., upload page processing)
    // via state management (Context, Zustand, etc.) or routing parameters.
    // Removed unused setters for imageSrc and allExifData
    const [imageSrc] = useState<string | null>("/IMG_0001.png"); // Placeholder
    const [allExifData] = useState<FullExifData | null>(() => {
        // Populate with sample data similar to your exiftool output for development
        return {
            "FileName": "IMG_0001.png", "FileSize": "11 MB", "FileType": "PNG", "MIMEType": "image/png",
            "ImageWidth": 4032, "ImageHeight": 3024, "BitDepth": 8, "ColorType": "RGB",
            "Make": "Apple", "Model": "iPhone X", /* exiftool-web often uses 'Model' */
            "Software": "11.4", "DateTimeOriginal": "2018:07:19 21:04:54",
            "ExposureTime": "1/24", "FNumber": 1.8, "ISO": 40, "FocalLength": "4.0 mm",
            "GPSLatitude": "37 deg 41' 44.00\" N", "GPSLongitude": "97 deg 21' 21.99\" W",
            "GPSAltitude": "398.3 m", "ProfileDescription": "Apple Wide Color Sharing Profile",
            // Add more sample fields to test the grid
        };
    });

    const [selectedExifDetail, setSelectedExifDetail] = useState<ExifDisplayInfo | null>(null);

    const displayableFields = useMemo(() => {
        if (!allExifData) return [];
        const fields: ExifDisplayInfo[] = [];
        for (const keyInConfig in EXIF_METADATA_CONFIG) {
            // Check if the key (or a common variation) exists in the actual EXIF data
            let dataValue: unknown = undefined; // FIX: Changed 'any' to 'unknown'
            if (allExifData.hasOwnProperty(keyInConfig)) {
                dataValue = allExifData[keyInConfig];
            } else if (keyInConfig === "CameraModelName" && allExifData.hasOwnProperty("Model")) { // Handle common variations
                dataValue = allExifData["Model"];
            } else if (keyInConfig === "ModifyDate" && allExifData.hasOwnProperty("FileModifyDate")) {
                dataValue = allExifData["FileModifyDate"];
            }
            // Add more such fallbacks if needed based on exiftool-web output

            if (dataValue !== undefined) {
                const config = EXIF_METADATA_CONFIG[keyInConfig];

                // Ensure value is a string or number for ExifDisplayInfo
                let formattedValue: string | number | undefined | null = undefined;
                if (typeof dataValue === 'string' || typeof dataValue === 'number') {
                    formattedValue = dataValue;
                } else if (dataValue === null) {
                    formattedValue = null;
                } else if (typeof dataValue === 'object') {
                    // For complex objects, you might want to stringify them or show a specific property
                    formattedValue = JSON.stringify(dataValue);
                } else {
                    // Handle other unknown types if necessary, e.g., boolean, undefined
                    formattedValue = String(dataValue);
                }


                fields.push({
                    key: config.displayName,
                    originalKey: keyInConfig,
                    value: formattedValue, // Use the formatted value
                    description: config.description,
                    iconName: config.icon,
                    group: config.group,
                });
            }
        }
        return fields;
    }, [allExifData]);

    // Select the first available field by default
    useEffect(() => {
        if (displayableFields.length > 0 && !selectedExifDetail) {
            setSelectedExifDetail(displayableFields[0]);
        }
    }, [displayableFields, selectedExifDetail]);

    const handleIconInteraction = (field: ExifDisplayInfo) => {
        setSelectedExifDetail(field);
    };

    const handleDownload = (format: 'json' | 'txt') => {
        if (!allExifData) {
            alert("No EXIF data available to download.");
            return;
        }

        let content = "";
        // Safely access FileName as string
        const originalFileName = (allExifData.FileName as string | undefined)?.split('.')[0] || 'exif_data';
        let fileName = `${originalFileName}_${new Date().toISOString().split('T')[0]}`;
        let mimeType = "";

        if (format === 'json') {
            content = JSON.stringify(allExifData, null, 2);
            fileName += ".json";
            mimeType = "application/json";
        } else if (format === 'txt') {
            // Iterate over allExifData as Record<string, unknown>
            for (const [key, value] of Object.entries(allExifData as Record<string, unknown>)) {
                content += `${key}: ${typeof value === 'object' && value !== null ? JSON.stringify(value) : String(value)}\n`;
            }
            fileName += ".txt";
            mimeType = "text/plain";
        }

        const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    // Ensure we have exactly 60 items for the grid (10x6)
    const gridItems = useMemo(() => {
        const items = [...displayableFields];
        while (items.length < 60) {
            items.push({ key: `placeholder-${items.length}`, originalKey: `placeholder-${items.length}`, value: '', description: '', iconName: ' ', group: 'Placeholder' }); // Use space for empty icon
        }
        return items.slice(0, 60);
    }, [displayableFields]);


    if (!allExifData || !imageSrc) {
        // Handle case where data is not yet loaded or passed
        // You might want a loading spinner or a message
        return (
            <div className="app-container details-page-override">
                <header className="app-header">
                    <Link href="/upload" className="back-to-home-link">&larr; Back to Upload</Link>
                </header>
                <main className="app-main details-main-content">
                    <p>Loading image details or no data provided...</p>
                </main>
            </div>
        );
    }

    return (
        <div className="app-container details-page-override">
            <header className="app-header">
                <Link href="/upload" className="back-to-home-link">
                    &larr; Back to Upload
                </Link>
                {/* Add other header elements if needed */}
            </header>

            <main className="app-main details-main-content">
                <div className="details-frame">
                    <div className="details-contents-container">
                        {/* Left Column: Image and Selected EXIF Detail */}
                        <div className="details-left-panel">
                        <div className="image-frame"> {/* This is 474x301, has #1F1F1F bg */}
                                <div className="actual-image-container"> {/* This will be 426x255 */}
                                    {imageSrc && (
                                        <Image
                                            src={imageSrc}
                                            alt={allExifData?.FileName as string || "Decoded image"}
                                            layout="fill"
                                            objectFit="contain" // Ensures aspect ratio is maintained within this box
                                            className="details-image-style" // For border-radius on the image itself
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="details-backdrop">
                                <div className="view-icon-background">
                                    {/* {selectedExifDetail && (
                                        // MaterialIcon is commented out and thus not used, resulting in no-unused-vars.
                                        // If you plan to use it, uncomment this. Otherwise, keep it commented or remove.
                                        <MaterialIcon iconName={selectedExifDetail.iconName} className="view-icon-style" />
                                    )} */}
                                </div>
                                <div className="detail-text-area">
                                    <span className="detail-text-fieldname">
                                        {selectedExifDetail ? selectedExifDetail.key : 'Select an icon'}
                                    </span>
                                    <span className="detail-text-value">
                                        {selectedExifDetail ? String(selectedExifDetail.value) : '...'}
                                    </span>
                                     {selectedExifDetail && selectedExifDetail.key !== `placeholder-${selectedExifDetail.originalKey}` && (
                                        <p className="detail-text-description">{selectedExifDetail.description}</p>
                                     )}
                                </div>
                                <div className="details-buttons-group">
                                    <button className="view-details-button" title="View All Details (Conceptual)">
                                        <ViewDetailsSVGIcon />
                                    </button>
                                     <div className="download-options">
                                        <button onClick={() => handleDownload('json')} className="download-button">
                                            <DownloadSVGIcon /> JSON
                                        </button>
                                        <button onClick={() => handleDownload('txt')} className="download-button">
                                            <DownloadSVGIcon /> TXT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Grid of EXIF Icons */}
                        <div className="icon-grid-container">
                            {gridItems.map((field, index) => (
                                <div
                                    key={field.originalKey + index}
                                    className={`icon-item-wrapper ${field.key.startsWith('placeholder-') ? 'placeholder' : ''} ${selectedExifDetail?.originalKey === field.originalKey ? 'selected' : ''}`}
                                    onMouseEnter={() => !field.key.startsWith('placeholder-') && handleIconInteraction(field)}
                                    onClick={() => !field.key.startsWith('placeholder-') && handleIconInteraction(field)}
                                    title={!field.key.startsWith('placeholder-') ? `${field.key}: ${field.description}` : undefined}
                                >
                                    {/* MaterialIcon is commented out here too, so this usage is also removed. */}
                                    {/* <MaterialIcon iconName={field.iconName} className="exif-detail-icon" /> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}