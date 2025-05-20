##  Phase 1: Project Setup & Core Structure

1.  Initialize Git Repository:

```bash
git init reveal-app
cd reveal-app
# Create a .gitignore file (Node.js template is a good start)
# e.g., npx gitignore node
git add .
git commit -m "Initial project setup"
# Create a repository on GitHub and push
```

2.  Setup Next.js with TypeScript:

```bash
npx create-next-app@latest . --typescript --eslint --tailwind (optional) --src-dir (optional) --app --import-alias "@/*"
# I'm using '.' to install in the current 'reveal-app' directory.
```
The --app flag sets up the App Router, which is recommended for new Next.js projects.

3.  Install Chakra UI

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
# or
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

Configure Chakra UI Provider:

Create app/providers.tsx (if using App Router):

```typescript
// app/providers.tsx
'use client'
import { ChakraProvider } from '@chakra-ui/react'
// You can also extend the theme here if needed
// import theme from './theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider /* theme={theme} */>{children}</ChakraProvider>
}
```

Update app/layout.tsx:

```typescript
// app/layout.tsx
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

4.  Directory Structure (Suggestion):

```bash
reveal-app/
├── app/                     # Next.js App Router
│   ├── api/                 # API routes (serverless functions)
│   │   └── extract-metadata/
│   │       └── route.ts     # Example API endpoint
│   ├── components/          # Reusable React components
│   │   ├── ui/              # Generic UI elements (buttons, inputs) based on Chakra
│   │   ├── layout/          # Layout components (header, footer, sidebar)
│   │   ├── ImageUploader.tsx
│   │   ├── MetadataDisplay.tsx
│   │   ├── ExifView.tsx
│   │   ├── C2paView.tsx
│   │   └── MapView.tsx
│   ├── lib/                 # Helper functions, utilities, constants
│   │   ├── exif-parser.ts   # Wrapper for Exif library
│   │   ├── c2pa-parser.ts   # Wrapper for C2PA library
│   ├── providers.tsx        # Client-side providers (like Chakra)
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component for '/'
├── public/                  # Static assets
├── .env.local               # Environment variables (Gitignored)
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

##  Phase 2: Backend Development (Metadata Extraction API)

1.  Choose and Install Metadata Libraries:

**Exif**  
`exif-parser`: `npm install exif-parser` (lightweight, pure JS)  
OR `exifr`: `npm install exifr` (more comprehensive, can also handle some video and TIFF metadata)  
OR if you absolutely need `ExifTool`'s full power and can manage the binary: `node-exiftool` (`npm install node-exiftool`).  This often requires ExifTool to be installed on the system path.

**C2PA**  
The official `c2pa-js` library (from `c2pa-rs` bindings) is the primary candidate: `npm install c2pa-js`
You might also need `wasm-sdk-types` or similar if the library uses WebAssembly. Check its documentation.

2.  Create API Endpoint (`app/api/extract-metadata/route.ts`):

```typescript
// app/api/extract-metadata/route.ts
import { NextRequest, NextResponse } from 'next/server';
import * as exifr from 'exifr'; // Using exifr as an example
import { createC2pa, ManifestStore } from 'c2pa-js'; // Example C2PA import
import path from 'path'; // For wasm resolver if needed by c2pa-js

// For c2pa-js, you might need to point to the WASM worker
// This setup can be tricky and depends on the c2pa-js version and bundler.
// You might need to copy wasm files to your public directory or serve them correctly.
// const wasmSrc = '/c2pa_wasm_bg.wasm'; // Path to the WASM file in public directory
// const workerSrc = '/c2pa.worker.min.js'; // Path to the worker script

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('image') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No image file uploaded' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer);

    // --- Exif Extraction ---
    let exifData = null;
    try {
      exifData = await exifr.parse(imageBuffer, true); // true for full metadata
    } catch (exifError) {
      console.warn('Could not parse EXIF data:', exifError);
      // Continue even if EXIF fails, as C2PA might still be present
    }

    // --- C2PA Extraction ---
    let c2paManifestStore: ManifestStore | null = null;
    try {
      // Initialize C2PA library - this might need specific config for WASM paths
      const c2pa = await createC2pa({
        // wasmSrc: path.resolve(process.cwd(), 'node_modules/c2pa-js/dist/c2pa_wasm_bg.wasm'), // Adjust path as needed for server environment
        // workerSrc: path.resolve(process.cwd(), 'node_modules/c2pa-js/dist/c2pa.worker.js'), // Adjust path
        // Ensure these paths are correct for your deployment environment (Vercel, Node server etc.)
        // This part is CRITICAL and often a source of issues.
        // For Vercel, you might need to place these files in the `public` dir and use relative URLs.
      });

      const { manifestStore } = await c2pa.read(imageBuffer);
      c2paManifestStore = manifestStore;
    } catch (c2paError) {
      console.warn('Could not parse C2PA data:', c2paError);
      // If c2pa.read throws an error when no C2PA data is present, catch it gracefully.
      // The c2pa-js library might return null or an empty manifestStore if no C2PA data.
      if ((c2paError as Error).message.toLowerCase().includes('no c2pa data')) {
         c2paManifestStore = null;
      } else {
        // Log other C2PA errors
        console.error('C2PA processing error:', c2paError);
      }
    }

    return NextResponse.json({
      exif: exifData,
      c2pa: c2paManifestStore ? c2paManifestStore.toJSON() : null, // Convert manifest store to JSON
    });

  } catch (error) {
    console.error('Metadata extraction error:', error);
    return NextResponse.json({ error: 'Error processing image', details: (error as Error).message }, { status: 500 });
  }
}
```

Important for c2pa-js: The library often relies on WebAssembly (WASM). Setting up the correct paths for WASM and worker files, especially for serverless environments like Vercel, is crucial. You may need to copy these files from node_modules/c2pa-js/dist/ to your public/ directory and configure c2pa-js to find them, or ensure they are bundled correctly. This is often the most challenging part of the setup. Consult the c2pa-js documentation carefully.

##  Phase 3: Frontend Development (UI & Logic)

1.  Main Page (`app/page.tsx`):
Will contain the ImageUploader component and MetadataDisplay component.  
Manage state for the uploaded file, extracted Exif data, and extracted C2PA data.

2.  `ImageUploader` Component(`app/components/ImpageUploader.tsx`)  
Use Chakra UI components (`Input type="file"`, `Box` for drag-and-drop, `Button`, `Spinner`)  
On file upload, call the `/api/extract-metadata` endpoint  
Handle loading states and error messages  
Pass the extracted metadata up to the parent page component  

3.  `MetadataDisplay` Component (`app/components/MetadataDisplay.tsx`)

Takes `exif` and `c2pa` data as props  
Uses Chakra UI `Tabs` to switch between "Exif" and "C2PA" views if C2PA data exists  
Conditionally renders `ExifView` and `C2paView`  

4.  `ExifView` Component (`app/components/ExifView.tsx`)

Takes Exif data as props  
Renders the Exif data in a structured way (e.g., using Chakra UI `Table`, `SimpleGrid`, or nested `Boxes`)  
Integrate MapView component if GPS data is present  

5.  `C2paView` Component (`app/components/C2paView.tsx`)
Takes C2PA manifest store data as props  
Displays authenticity status, assertions, ingredients, etc. This will require careful mapping of the `c2pa-js` output to UI elements  

6.  `MapView` Component (`app/components/MapView.tsx`)
Use a library like `react-leaflet` (npm install react-leaflet leaflet) and its CSS  
Takes latitude and longitude as props  
Remember to import Leaflet's CSS: `import 'leaflet/dist/leaflet.css';` in your `layout.tsx` or `page.tsx`  

##  Phase 4: Iteration & Refinement

1.  Start with Exif: Get image upload and basic Exif display working first. This is generally more straightforward.
2.  Tackle C2PA: This is more complex. Focus on getting the c2pa-js library initialized correctly and parsing a known C2PA-enabled image. Then work on displaying the manifest data.
3.  Styling & UX: Align with your Figma design using Chakra UI's theming and styling capabilities.
4.  Error Handling: Implement comprehensive error handling and user feedback.
5.  Testing:
    Test with various image types.
    Test with images that have only Exif, only C2PA, both, or neither.
    Test with images that might have corrupted metadata.
6.  Accessibility Check: Use browser developer tools and accessibility checkers.

###  summary

C2PA Library Integration: As mentioned, getting `c2pa-js` (or any WASM-based library) to work correctly in both local development and serverless deployment (like Vercel) can be tricky due to asset paths. Pay close attention to its documentation and examples.  
Large Metadata: Some images have a vast amount of Exif data. Design your UI to be scannable and not overwhelming (e.g., collapsible sections).  
Data Formatting: Dates, coordinates, and other data types will need careful formatting for readability.  
State Management: For a single-page app like this, React's built-in state (useState, useReducer) and context (useContext) might be sufficient. For more complex needs, consider Zustand or Jotai.  
This detailed breakdown should provide a solid foundation for both the requirements and the initial development of your "reveal" application. Good luck!  







