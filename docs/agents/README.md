# feaature prompt 

add/integrate the following into what i currently have for the uploads make sure to integrate both of them and make sure you dont miss anything


```markdown
❯ tree
.
├── App.tsx

├── components
│   ├── ActionButtons.tsx
│   ├── Header.tsx
│   ├── ImageViewer.tsx
│   ├── MetadataExplanation.tsx
│   ├── MetadataTile.tsx
│   ├── PlainTextView.tsx
│   ├── ThemeToggle.tsx
│   ├── TileView.tsx
│   └── ViewToggle.tsx
├── context
│   └── ThemeContext.tsx
├── data
│   ├── metadataExplanations.tsx
│   └── mockData.tsx
├── index.css
├── index.tsx
└── utils
    └── formatters.tsx

5 directories, 16 files
```

#  `./src/App.tsx`


```typescript
import React from 'react';
import { ImageViewer } from './components/ImageViewer';
import { ThemeProvider } from './context/ThemeContext';
export function App() {
  return <ThemeProvider>
      <div className="flex flex-col w-full min-h-screen bg-gray-50 dark:bg-gray-950">
        <main className="flex-1 pt-16 pb-16 px-12 sm:pt-24 sm:pb-24 sm:px-24 lg:pt-40 lg:pb-40 lg:px-40">
          <ImageViewer />
        </main>
      </div>
    </ThemeProvider>;
}


```

~/Documents/01-github/playground/src main*                       01:30:05 AM
❯ cat components/ActionButtons.tsx components/Header.tsx components/ImageViewer.tsx components/MetadataExplanation.tsx components/MetadataTile.tsx components/PlainTextView.tsx components/ThemeToggle.tsx components/TileView.tsx components/ViewToggle.tsx | pbcopy


import React from 'react';
import { UploadIcon, ShareIcon, DownloadIcon } from 'lucide-react';
interface ActionButtonsProps {
  onReupload: () => void;
  onExport: () => void;
  onShare: () => void;
}
export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onReupload,
  onExport,
  onShare
}) => {
  return <div className="flex space-x-2 mb-4">
      <button onClick={onReupload} className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors shadow-sm">
        <UploadIcon className="w-4 h-4 mr-2" />
        Upload New
      </button>
      <button onClick={onExport} className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors shadow-sm">
        <DownloadIcon className="w-4 h-4 mr-2" />
        Export Data
      </button>
      <button onClick={onShare} className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors shadow-sm">
        <ShareIcon className="w-4 h-4 mr-2" />
        Share
      </button>
    </div>;
};import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { FileIcon } from 'lucide-react';
export const Header: React.FC = () => {
  return <header className="w-full bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Use the appropriate logo based on theme */}
          <img src="/0A0A0A-logo.svg" alt="EXIF Viewer Logo" className="w-6 h-6 hidden dark:block" />
          <img src="/FFFFFF-logo.svg" alt="EXIF Viewer Logo" className="w-6 h-6 block dark:hidden" />
          <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            EXIF Viewer
          </h1>
        </div>
        <ThemeToggle />
      </div>
    </header>;
};import React, { useState } from 'react';
import { ViewToggle } from './ViewToggle';
import { PlainTextView } from './PlainTextView';
import { TileView } from './TileView';
import { ActionButtons } from './ActionButtons';
import { mockExifData } from '../data/mockData';
type ViewMode = 'plain' | 'tile';
export const ImageViewer: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('tile');
  // Use the provided image URL
  const imageUrl = "/IMG_0001.png";
  const toggleView = () => {
    setViewMode(viewMode === 'plain' ? 'tile' : 'plain');
  };
  // Placeholder functions for the action buttons
  const handleReupload = () => {
    alert('Upload new image feature would open a file dialog');
  };
  const handleExport = () => {
    alert('Export data feature would download a JSON or CSV file');
  };
  const handleShare = () => {
    alert('Share feature would generate a shareable link or open share dialog');
  };
  return <div className="max-w-4xl mx-auto">
      <div className="mb-4 flex flex-wrap justify-between items-center gap-3">
        <ActionButtons onReupload={handleReupload} onExport={handleExport} onShare={handleShare} />
        <ViewToggle viewMode={viewMode} toggleView={toggleView} />
      </div>
      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
        {viewMode === 'plain' ? <PlainTextView exifData={mockExifData} imageUrl={imageUrl} /> : <TileView exifData={mockExifData} imageUrl={imageUrl} />}
      </div>
    </div>;
};
import React, { useEffect, useRef } from 'react';
import { XIcon } from 'lucide-react';
import { MetadataExplanation as ExplanationType } from '../data/metadataExplanations';
interface MetadataExplanationProps {
  explanation: ExplanationType;
  onClose: () => void;
  position: {
    x: number;
    y: number;
  };
}
export const MetadataExplanation: React.FC<MetadataExplanationProps> = ({
  explanation,
  onClose,
  position
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Adjust position if tooltip would go off screen
    if (tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      let adjustedX = position.x;
      let adjustedY = position.y;
      // Adjust horizontally if needed
      if (position.x + rect.width > viewportWidth - 20) {
        adjustedX = viewportWidth - rect.width - 20;
      }
      // Adjust vertically if needed
      if (position.y + rect.height > viewportHeight - 20) {
        adjustedY = viewportHeight - rect.height - 20;
      }
      tooltipRef.current.style.left = `${adjustedX}px`;
      tooltipRef.current.style.top = `${adjustedY}px`;
    }
    // Add click outside listener to close the tooltip
    const handleClickOutside = (e: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [position, onClose]);
  return <div ref={tooltipRef} className="fixed z-50 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden" style={{
    left: position.x,
    top: position.y
  }}>
      <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-medium text-gray-900 dark:text-gray-100">
          {explanation.title}
        </h3>
        <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <XIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
      <div className="p-3">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {explanation.description}
        </p>
      </div>
    </div>;
};import React, { useState, Component } from 'react';
import * as LucideIcons from 'lucide-react';
import { metadataIconMapping } from '../data/mockData';
import { metadataExplanations } from '../data/metadataExplanations';
import { MetadataExplanation } from './MetadataExplanation';
interface MetadataTileProps {
  label: string;
  value: string;
  isHighlighted?: boolean;
  originalKey?: string;
}
export const MetadataTile: React.FC<MetadataTileProps> = ({
  label,
  value,
  isHighlighted = false,
  originalKey
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [explanationPosition, setExplanationPosition] = useState({
    x: 0,
    y: 0
  });
  // Get the appropriate icon name or use default
  const iconName = metadataIconMapping[label] || metadataIconMapping['default'];
  // Convert to PascalCase and append "Icon" for Lucide component naming
  const pascalCaseIconName = iconName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Icon';
  // Get the icon component from Lucide
  // @ts-ignore - Dynamic icon component name
  const IconComponent = LucideIcons[pascalCaseIconName] || LucideIcons.InfoIcon;
  // Check if we have an explanation for this metadata
  const key = originalKey || label;
  const hasExplanation = !!metadataExplanations[key];
  const handleTileClick = (e: React.MouseEvent) => {
    if (hasExplanation) {
      // Calculate position for the explanation popup
      const rect = e.currentTarget.getBoundingClientRect();
      setExplanationPosition({
        x: rect.left,
        y: rect.bottom + 8
      });
      setShowExplanation(true);
    }
  };
  return <>
      <div
        onClick={handleTileClick}
        className={`
          rounded-xl p-4 shadow-sm transition-all duration-200 h-24 flex flex-col justify-center
          ${isHighlighted ? 'bg-gray-800 dark:bg-gray-900 ring-1 ring-gray-700' : 'bg-gray-300 dark:bg-gray-850 hover:bg-gray-350 dark:hover:bg-gray-800'}
          ${hasExplanation ? 'cursor-pointer' : 'cursor-default'}
        `}
      >
        <div className="flex items-center mb-1.5 min-w-0">
          <IconComponent className="w-6 h-6 mr-2 text-gray-600 dark:text-gray-400 flex-shrink-0" />
          <div className="text-xs font-medium text-gray-600 dark:text-gray-400 capitalize whitespace-nowrap overflow-hidden text-ellipsis">
            {label}
            {hasExplanation && <div className="ml-1 w-1.5 h-1.5 inline-block align-middle rounded-full bg-blue-500" />}
          </div>
        </div>
        <div className="text-xs text-gray-900 dark:text-gray-100 font-normal whitespace-nowrap overflow-hidden text-ellipsis" title={value}>
          {value}
        </div>
      </div>
      {showExplanation && metadataExplanations[key] && <MetadataExplanation explanation={metadataExplanations[key]} onClose={() => setShowExplanation(false)} position={explanationPosition} />}
    </>;
};
import React from 'react';
import { ExifData } from '../data/mockData';
import { FileIcon } from 'lucide-react';
interface PlainTextViewProps {
  exifData: ExifData;
  imageUrl: string;
}
export const PlainTextView: React.FC<PlainTextViewProps> = ({
  exifData,
  imageUrl
}) => {
  return <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 p-4 bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center">
        <div className="rounded-lg overflow-hidden shadow-lg mb-4 max-w-sm w-full">
          <img src={imageUrl} alt="Uploaded image" className="w-full h-auto" />
        </div>
        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
          <FileIcon className="w-5 h-5" />
          <span>{exifData['File Name']}</span>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-500 mt-1">
          {exifData['File Type']} • {exifData['File Size']}
        </div>
      </div>
      <div className="w-full md:w-2/3 p-4 font-mono text-sm overflow-auto bg-gray-200 dark:bg-gray-900 border-t md:border-t-0 md:border-l border-gray-300 dark:border-gray-800 max-h-[70vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
          {Object.entries(exifData).map(([key, value]) => <div key={key} className="flex">
              <span className="w-48 text-gray-600 dark:text-gray-400 truncate">
                {key}
              </span>
              <span className="text-gray-900 dark:text-gray-200 truncate">
                : {value}
              </span>
            </div>)}
        </div>
      </div>
    </div>;
};import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
export const ThemeToggle: React.FC = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      {theme === 'light' ? <MoonIcon className="w-5 h-5 text-gray-800" /> : <SunIcon className="w-5 h-5 text-gray-300" />}
    </button>;
};import React from 'react';
import { ExifData } from '../data/mockData';
import { MetadataTile } from './MetadataTile';
import { formatDate, formatCoordinates } from '../utils/formatters';
import { FileIcon, CameraIcon, MapPinIcon, CalendarIcon } from 'lucide-react';
interface TileViewProps {
  exifData: ExifData;
  imageUrl: string;
}
export const TileView: React.FC<TileViewProps> = ({
  exifData,
  imageUrl
}) => {
  // Format dates for better readability
  const formattedDates = {
    'Create Date': formatDate(exifData['Create Date']),
    'Modify Date': formatDate(exifData['Modify Date']),
    'Date/Time Original': formatDate(exifData['Date/Time Original']),
    'File Modification Date/Time': formatDate(exifData['File Modification Date/Time']),
    'File Access Date/Time': formatDate(exifData['File Access Date/Time']),
    'File Inode Change Date/Time': formatDate(exifData['File Inode Change Date/Time'])
  };
  // Format GPS coordinates
  const formattedLocation = formatCoordinates(exifData['GPS Latitude'], exifData['GPS Longitude']);
  // Primary metadata for key tiles
  const keyMetadata = {
    dimensions: `${exifData['Image Width']} × ${exifData['Image Height']}`,
    camera: `${exifData['Make']} ${exifData['Camera Model Name']}`,
    lens: exifData['Lens Model'],
    'file size': exifData['File Size'],
    'file type': exifData['File Type'],
    'date taken': formattedDates['Date/Time Original'],
    'focal length': exifData['Focal Length'],
    'focal length (35mm)': exifData['Focal Length In 35mm Format'],
    iso: exifData['ISO'],
    aperture: `ƒ/${exifData['F Number']}`,
    'exposure time': exifData['Exposure Time'] + ' sec',
    location: formattedLocation,
    altitude: exifData['GPS Altitude']
  };
  // Create mapping between display labels and original keys
  const keyToOriginalMapping: Record<string, string> = {
    'date taken': 'Date/Time Original',
    'focal length': 'Focal Length',
    'focal length (35mm)': 'Focal Length In 35mm Format',
    iso: 'ISO',
    aperture: 'F Number',
    'exposure time': 'Exposure Time',
    location: 'GPS Position',
    altitude: 'GPS Altitude'
  };
  // Get all remaining metadata, replacing dates with formatted versions
  const allMetadata = {
    ...exifData,
    ...formattedDates
  };
  // Filter out keys that are already in keyMetadata
  const remainingMetadata = Object.entries(allMetadata).filter(([key]) => !Object.values(keyMetadata).includes(allMetadata[key]) && key !== 'File Name' && !Object.keys(keyMetadata).some(tileKey => key.toLowerCase() === tileKey.replace(' ', '_').toLowerCase()));
  return <div className="p-4 sm:p-6 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        {/* Grid with image anchored top-left and tiles wrapping around; tuned breakpoints */}
        <div className="grid grid-cols-1 min-[360px]:grid-cols-2 min-[720px]:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6 auto-rows-[5.5rem] sm:auto-rows-[6rem] grid-flow-dense">
        {/* Image card at top-left, spanning multiple tracks */}
        <div className="col-span-1 row-span-3 sm:col-span-1 sm:row-span-3 md:row-span-4 xl:row-span-4">
          <div className="relative bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md h-full">
            <img src={imageUrl} alt={exifData['File Name']} className="w-full h-44 sm:h-48 md:h-56 lg:h-64 object-cover" />
            {/* Glass blur overlay over image */}
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 backdrop-blur-md bg-gray-900/40">
              <div className="flex items-center space-x-2 text-gray-50">
                <FileIcon className="w-5 h-5 opacity-90" />
                <h3 className="font-medium text-xs truncate">
                  {exifData['File Name']}
                </h3>
              </div>
              <div className="flex items-center mt-1 text-xs text-gray-100/90">
                <CameraIcon className="w-4 h-4 mr-1 opacity-90" />
                <span className="truncate">
                  {exifData['Make']} {exifData['Camera Model Name']}
                </span>
              </div>
              <div className="flex flex-wrap mt-2 gap-x-3 text-xs text-gray-100/80">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1 opacity-90" />
                  <span>{formattedDates['Date/Time Original'].split(',')[0]}</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-4 h-4 mr-1 opacity-90" />
                  <span>GPS: {formattedLocation.split(',')[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Uniform, gapless tile grid items */}
        {/* Top row of key metadata tiles */}
        {Object.entries(keyMetadata).slice(0, 8).map(([key, value], index) => (
          <MetadataTile
            key={key}
            label={key}
            value={value.toString()}
            isHighlighted={index < 3}
            originalKey={keyToOriginalMapping[key]}
          />
        ))}

        {/* Remaining metadata tiles wrapping around */}
        {[...Object.entries(keyMetadata).slice(8), ...remainingMetadata.slice(0, 30)].map(([key, value], index) => {
          const isKeyMetadata = index < Object.entries(keyMetadata).slice(8).length;
          const originalKey = isKeyMetadata ? keyToOriginalMapping[key] : key;
          return (
            <MetadataTile
              key={key}
              label={key}
              value={value.toString()}
              originalKey={originalKey}
            />
          );
        })}
        </div>
      </div>
    </div>;
};
import React from 'react';
import { LayoutGridIcon, ListIcon } from 'lucide-react';
interface ViewToggleProps {
  viewMode: 'plain' | 'tile';
  toggleView: () => void;
}
export const ViewToggle: React.FC<ViewToggleProps> = ({
  viewMode,
  toggleView
}) => {
  return <div className="inline-flex items-center bg-gray-300 dark:bg-gray-800 rounded-xl p-1 shadow-sm">
      <button onClick={viewMode === 'tile' ? toggleView : undefined} className={`px-3 py-1.5 rounded-lg flex items-center ${viewMode === 'plain' ? 'bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm' : 'text-gray-700 dark:text-gray-400'}`} aria-label="Plain text view">
        <ListIcon className="w-4 h-4 mr-2" />
        <span>Plain Text</span>
      </button>
      <button onClick={viewMode === 'plain' ? toggleView : undefined} className={`px-3 py-1.5 rounded-lg flex items-center ${viewMode === 'tile' ? 'bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm' : 'text-gray-700 dark:text-gray-400'}`} aria-label="Tile view">
        <LayoutGridIcon className="w-4 h-4 mr-2" />
        <span>Tile View</span>
      </button>
    </div>;
};


context/ThemeContext.tsx

```typescript
import React, { useEffect, useState, createContext, useContext } from 'react';
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  // Default to dark theme with the new color scheme
  const [theme, setTheme] = useState<Theme>('dark');
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    // Apply base background color based on theme
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#0A0A0A';
    } else {
      document.body.style.backgroundColor = '#F5F5F5';
    }
  }, [theme]);
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  return <ThemeContext.Provider value={{
    theme,
    toggleTheme
  }}>
      {children}
    </ThemeContext.Provider>;
};
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

```










import React from 'react';
export interface MetadataExplanation {
  title: string;
  description: string;
}
export const metadataExplanations: Record<string, MetadataExplanation> = {
  'File Modification Date/Time': {
    title: 'Modification Date/Time',
    description: "In EXIF metadata, File Modification Date/Time refers to the timestamp recorded for when the image file was last modified at the filesystem level. This is usually the date and time the file's data was last changed, which might be the same as or different from when the photo was originally taken, depending on edits, exports, or transfers."
  },
  'File Access Date/Time': {
    title: 'Access Date/Time',
    description: "The last time the file was accessed by the operating system or an application. This doesn't necessarily mean the file was modified, just that it was opened or read."
  },
  'File Inode Change Date/Time': {
    title: 'Inode Change Date/Time',
    description: "The timestamp when the file's inode metadata was last changed. This is a filesystem-level attribute that tracks changes to file permissions, ownership, or other file attributes."
  },
  'Exposure Time': {
    title: 'Exposure Time',
    description: "The length of time the camera's shutter was open when taking the photo. Shorter times (like 1/1000 sec) freeze motion, while longer times (like 1/30 sec) may show motion blur but let in more light."
  },
  'F Number': {
    title: 'F Number (Aperture)',
    description: 'Controls the size of the lens opening. Lower f-numbers (like f/1.8) let in more light and create a shallower depth of field (background blur). Higher f-numbers (like f/16) let in less light but keep more of the image in focus.'
  },
  ISO: {
    title: 'ISO Sensitivity',
    description: 'Determines how sensitive the camera sensor is to light. Lower ISO values (like 100) produce cleaner images but require more light, while higher values (like 3200) work better in dark conditions but may introduce digital noise.'
  },
  'Focal Length': {
    title: 'Focal Length',
    description: 'The optical distance from the camera sensor to the point where light rays converge. Shorter focal lengths (like 18mm) provide wider angles of view, while longer focal lengths (like 200mm) magnify distant subjects.'
  },
  'Focal Length In 35mm Format': {
    title: '35mm Equivalent Focal Length',
    description: 'The focal length converted to what would be equivalent on a traditional 35mm film camera. This standardized measurement helps compare lenses across different camera systems with varying sensor sizes.'
  },
  'GPS Latitude': {
    title: 'GPS Latitude',
    description: 'The north-south position where the photo was taken. Measured in degrees north or south of the equator (0°). Positive values are north of the equator, negative values are south.'
  },
  'GPS Longitude': {
    title: 'GPS Longitude',
    description: 'The east-west position where the photo was taken. Measured in degrees east or west of the Prime Meridian (0°). Positive values are east of the Prime Meridian, negative values are west.'
  },
  'GPS Altitude': {
    title: 'GPS Altitude',
    description: 'The elevation above or below sea level where the photo was taken, typically measured in meters or feet.'
  },
  'White Balance': {
    title: 'White Balance',
    description: 'The camera setting that adjusts colors to make white objects appear white under different lighting conditions. Auto white balance attempts to detect and compensate for the color temperature of the light source.'
  },
  Flash: {
    title: 'Flash',
    description: "Indicates whether the camera's flash fired when taking the photo, and which flash mode was used (auto, forced, red-eye reduction, etc.)."
  }
};import React from 'react';
export interface ExifData {
  [key: string]: string;
}
export const mockExifData: ExifData = {
  'ExifTool Version Number': '13.30',
  'File Name': 'IMG_0001.png',
  Directory: '.',
  'File Size': '11 MB',
  'File Modification Date/Time': '2025:05:22 23:47:23-05:00',
  'File Access Date/Time': '2025:08:11 23:35:15-05:00',
  'File Inode Change Date/Time': '2025:08:11 23:34:45-05:00',
  'File Permissions': '-rw-r--r--',
  'File Type': 'PNG',
  'File Type Extension': 'png',
  'MIME Type': 'image/png',
  'Image Width': '4032',
  'Image Height': '3024',
  'Bit Depth': '8',
  'Color Type': 'RGB',
  Compression: 'Deflate/Inflate',
  Filter: 'Adaptive',
  Interlace: 'Noninterlaced',
  Make: 'Apple',
  'Camera Model Name': 'iPhone X',
  Orientation: 'Horizontal (normal)',
  'X Resolution': '72',
  'Y Resolution': '72',
  'Resolution Unit': 'inches',
  Software: '11.4',
  'Modify Date': '2018:07:19 21:04:54',
  'Exposure Time': '1/24',
  'F Number': '1.8',
  'Exposure Program': 'Program AE',
  ISO: '40',
  'Date/Time Original': '2018:07:19 21:04:54',
  'Create Date': '2018:07:19 21:04:54',
  'Focal Length': '4.0 mm',
  'Focal Length In 35mm Format': '36 mm',
  'GPS Latitude': '37 deg 41\' 44.00" N',
  'GPS Longitude': '97 deg 21\' 21.99" W',
  'GPS Altitude': '398.3 m Above Sea Level',
  'Lens Make': 'Apple',
  'Lens Model': 'iPhone X back dual camera 4mm f/1.8',
  'White Balance': 'Auto',
  Flash: 'Auto, Did not fire',
  'Light Value': '7.6',
  'Hyperfocal Distance': '2.66 m',
  'Field Of View': '53.1 deg'
};
// Icon categories for metadata
export interface IconMapping {
  [key: string]: string;
}
export const metadataIconMapping: IconMapping = {
  // File information
  'File Name': 'file',
  'File Size': 'file-text',
  'File Type': 'file-type',
  'File Permissions': 'lock',
  Directory: 'folder',
  'MIME Type': 'file-code',
  // Image dimensions
  'Image Width': 'move-horizontal',
  'Image Height': 'move-vertical',
  dimensions: 'maximize',
  // Date/Time
  'Modify Date': 'calendar',
  'Create Date': 'calendar-plus',
  'Date/Time Original': 'calendar-clock',
  'File Modification Date/Time': 'clock',
  'File Access Date/Time': 'history',
  // Camera info
  Make: 'camera',
  'Camera Model Name': 'video',
  'Lens Make': 'aperture',
  'Lens Model': 'eye',
  // Exposure settings
  'Exposure Time': 'timer',
  'F Number': 'aperture',
  ISO: 'gauge',
  'Exposure Program': 'settings',
  'Exposure Mode': 'sliders',
  'White Balance': 'sun',
  Flash: 'zap',
  'Light Value': 'sun',
  // Color
  'Color Type': 'palette',
  'Color Space': 'palette',
  'Bit Depth': 'layers',
  // GPS
  'GPS Latitude': 'map-pin',
  'GPS Longitude': 'map',
  'GPS Altitude': 'mountain',
  'GPS Position': 'compass',
  // Other
  Software: 'code',
  'Focal Length': 'zoom-in',
  'Focal Length In 35mm Format': 'zoom-in',
  Orientation: 'rotate-cw',
  'Resolution Unit': 'ruler',
  'X Resolution': 'ruler-horizontal',
  'Y Resolution': 'ruler-vertical',
  'Hyperfocal Distance': 'target',
  'Field Of View': 'scan',
  // Default
  default: 'info'
};
`

index.compass

/* PLEASE NOTE: THESE TAILWIND IMPORTS SHOULD NEVER BE DELETED */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
/* DO NOT DELETE THESE TAILWIND IMPORTS, OTHERWISE THE STYLING WILL NOT RENDER AT ALL */

index.tsx

import './index.css';
import React from "react";
import { render } from "react-dom";
import { App } from "./App";
render(<App />, document.getElementById("root"));


`./src/utils/formatters.tsx`



```typescript
import React from 'react';
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString.replace(/(\d{4}):(\d{2}):(\d{2})/, '$1-$2-$3'));
    if (isNaN(date.getTime())) {
      return dateString;
    }
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  } catch (e) {
    return dateString;
  }
}
export function formatCoordinates(latString: string, longString: string): string {
  try {
    // Extract degrees from strings like "37 deg 41' 44.00" N"
    const latDeg = parseFloat(latString.split(' ')[0]);
    const longDeg = parseFloat(longString.split(' ')[0]);
    const latDir = latString.includes('N') ? 'N' : 'S';
    const longDir = longString.includes('E') ? 'E' : 'W';
    return `${latDeg.toFixed(4)}° ${latDir}, ${longDeg.toFixed(4)}° ${longDir}`;
  } catch (e) {
    return `${latString}, ${longString}`;
  }
}
```
