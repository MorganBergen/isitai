# isitai

###  disclaimer

All uploaded files are processed locally on your machine. Nothing is saved or uploaded to some corporate cloud service or random database floating around somewhere on this Earth.

Your data is not collected.

Your data is not being sold to some third party.

Your data is not being used to train some AI model.

And lastly, this website is free of any advertisements preying on your attention.

Monetizing your data is not the purpose of this service; wacky internet-driven market-based incentive mechanisms skew the pure utility of this tool.

Keeping your privacy and integrity in mind is important to me.

I am not a non-profit organization, I am not a charity, I am not a government agency, and I am not a corporation. I am an individual who is trying to mitigate the disastrous effects disinformation can cause to a society.

I do not have the resources to run this service for free, and I do not want to be beholden to some corporate overlord who wants to monetize the data I collect. I want to provide this service to the public in a way that is sustainable and ethical, yet simultaneously efficient and useful.

$5.00 for 100 images - Personal Plan
$50.00 for 1,000 images - Professional Plan
$500.00 for 10,000 images - Enterprise Plan
API key access $X - Developer Plan

However, I understand that the majority of humans on this planet are economically insecure and cannot be burdened by discretionary expenditures that don't directly contribute to their food, shelter, or clothing. This includes individuals who solely rely on public computers for their internet use.

I want to give everyone access to this tool.

So, if you would like to gain access but are unable to afford the service, please email me at contact@isitai.com, and I will send you an access key, no questions asked.

Ensuring that I can accommodate users of all economic backgrounds is what makes IsItAI stand out against the rest.

---------------------

all uploaded files are processed on locally on your machine. 
nothing is saved or uploaded to some corporate cloud service or random database floating around somewhere on this earth.

your data is not collected.

your data is not being sold to some third party

your data is not being used to train some ai model

and lastely this website is free of any advertisements preying on your attention

monetizing your data not the purpose of this service, wacky internet driven market based incentive mechanisms skew the pure utility of this tool.

keeping your privacy and integrity in mind is important to me.

I am not a non-profit organization, I am not a charity, I am not a government agency, I am not a corporation.  I am an individual who is trying to mitigate the disastrous effects disinformation can cause onto a society. 

I do not have the resources to run this service for free, and I do not want to be beholden to some corporate overlord who wants to monetize on the data i collect.  I want to provide this service to the public in a way that is sustainable and ethical, yet simultaneously efficient and useful.

$5.00 for 100 images - personal plan
$50.00 for 1,000 images professional plan
$500.00 for 10,000 images - enterprise plan
api key access $x - developer plan

however I understand that the majority of humans on this planet are economically insecure, and cannot be burdened by discresionary expenditures that don't directly contribute to their food, sheler, or clothing.  This inlcudes individuals who soley rely on public computers for their internet use.

I want to give everyone access to this tool.

So if you would like to gain access, but are unable to afford the service.  
please email me at contact@isitai.com and I will send you an access key, no questions asked.

ensuring that I can accommodate for users of all economic backgrounds, is what makes this isitai standout against the rest.


https://github.com/6over3/exiftool?tab=readme-ov-file

1.  Prompt for a password when the "Decode" button is clicked.
2.  If the password is correct, use a client-side tool like exiftool-web (https://github.com/lucasgelfond/exiftool-web) to extract EXIF data from the uploaded image.
3.  Display this EXIF data.



##  introduction

isitai is a web application specializing in extracting and presenting encoded metadata from compressed rgb data files, also known as raster bitmap images. 

<!-- <img src="./0A0A0A-logo.svg" alt="home page" width="400" align="right" /> -->

the purpose of isitai is to allow users to inspect a given image's metadata such as the device model, modification dates, gps coordinates, profile creator, and rendering intent.  this information is crucial for understanding the context and authenticity of an image, especially in an era where ai-generated content is becoming increasingly prevalent.


verify ai, specifically extracts exif metadata and cryptographically secure c2pa information — from conventional image file formats including jpeg, png, jpg, heic, & webp. 

by democratizing data accessiblity, isitai gives users the tool to adequately identify whether a digital asset was captured by a human or generated by an artifically intelligent agent.

in the world of synthetic media and ai generated content, the authenticity of digital assets is paramount.  as the lines between human-created and machine-generated content blur, understanding the provenance of an image becomes crucial.  isitai aims to provide users with a comprehensive tool to analyze and verify the metadata embedded within images, ensuring transparency and trust in the digital landscape.

`dc-008-2024` `exif` version 3.0

`exif`, `c2pa`, `xmp`, `iptc-iim`

**about**  web application that views image encoded metadata, specifically exif and c2pa metadata.

[**`exif`**](https://www.cipa.jp/std/documents/download_e.html?cipa_dc-008-2024-e) - exchangable image file format, standard metadata embedded in image files (e.g. camera info, geolocation, timestamp).  the camera & imaging products association (cipa) and japan electronics and information and technology industries association (jeita) jointly formulated this standard.  the both standards are technically equivalent.

[cipa: - dc-008-2023 - exchangeable image file format for digital still cameras: exif version 3.0](https://www.cipa.jp/e/std/std-sec.html)

[jieta - cp-3451f - exchangeable image file format for digital still cameras: exif version 3.0](https://www.jeita.or.jp/cgi-bin/standard_e/list.cgi?cateid=1&subcateid=4)

[about exif 3.0](https://www.cipa.jp/std/documents/e/exif3.0-overview_e.pdf)

[exifinterface class by microsoft](https://learn.microsoft.com/en-us/dotnet/api/android.media.exifinterface?view=net-android-35.0)

[**`c2pa`**](https://opensource.contentauthenticity.org/docs/c2patool/docs/usage)  content authenticity initiative, a newer standard that embeeds content provenance metadata using cryptographically verifiable manifest

[guidelines for handling image metadata](https://s3.amazonaws.com/software.tagthatphoto.com/docs/mwg_guidance.pdf)

[xpm standard from adobe](https://www.adobe.com/devnet/xmp.html)

[xmp standard from iso](https://www.iso.org/standard/75163.html) - iso 16684-1:2019 - graphic technology — extensible metadata platform (xmp)

[xmp toolkit sdk](https://github.com/adobe/xmp-toolkit-sdk/tree/main)

[xmp toolkit programmers guide](https://github.com/adobe/xmp-toolkit-sdk/blob/main/docs/xmpprogrammersguide.pdf)


ISO/TC 171/SC 2 - Authenticity of Information — Content credentials
ISO/CD 22144 - ISO - International Organization for Standardization
https://www.iso.org/standard/90726.html

C2PA - JDF - Joint Development Foundation      
SO/CD 221 - ISO - International Organization for Standardization
DC-008-2024 - CIPA - Camera & Imaging Products Association
CP-3451G - JIETA - Japan Electronics and Information Technology Industries Association

##  technical introduction

**frontend** will contain next.js + chakra ui

**backend** node.js or serverless functions to handle processing server side

|  layer  |  title  |  description |
|:--------|:--------|:-------------|
|  frontend | `next.js`  |  react framework for server side rendering and static site generation |
|  frontend | `chakra ui`  |  component library for react with a focus on accessibility and theming |
|  backend | `node.js`  |  javascript runtime for server side processing |
|  backend | `serverless functions`  |  serverless functions for processing images and metadata |

##  `exiftool img_0001.png`

```
<code>exiftool version number         : 13.25</code>
<code>file name                       : img_0001.png</code>
<code>directory                       : .</code>
<code>file size                       : 11 mb</code>
<code>file modification date/time     : 2025:05:10 21:14:04-05:00</code>
<code>file access date/time           : 2025:05:14 16:22:21-05:00</code>
<code>file inode change date/time     : 2025:05:14 15:23:36-05:00</code>
<code>file permissions                : -rw-r--r--</code>
<code>file type                       : png</code>
<code>file type extension             : png</code>
<code>mime type                       : image/png</code>
<code>image width                     : 4032</code>
<code>image height                    : 3024</code>
<code>bit depth                       : 8</code>
<code>color type                      : rgb</code>
<code>compression                     : deflate/inflate</code>
<code>filter                          : adaptive</code>
<code>interlace                       : noninterlaced</code>
<code>profile name                    : icc profile</code>
<code>profile cmm type                : apple computer inc.</code>
<code>profile version                 : 4.0.0</code>
<code>profile class                   : input device profile</code>
<code>color space data                : rgb</code>
<code>profile connection space        : xyz</code>
<code>profile date time               : 2016:01:01 00:00:00</code>
<code>profile file signature          : acsp</code>
<code>primary platform                : apple computer inc.</code>
<code>cmm flags                       : not embedded, independent</code>
<code>device manufacturer             : apple computer inc.</code>
<code>device model                    :</code>
<code>device attributes               : reflective, glossy, positive, color</code>
<code>rendering intent                : perceptual</code>
<code>connection space illuminant     : 0.9642 1 0.82491</code>
<code>profile creator                 : apple computer inc.</code>
<code>profile id                      : 09a72bcf796cf3543b61a77f1ae38acc</code>
<code>profile description             : apple wide color sharing profile</code>
<code>profile copyright               : copyright apple inc., 2016</code>
<code>media white point               : 0.9642 1 0.8251</code>
<code>a to b2                         : (binary data 29772 bytes, use -b option to extract)</code>
<code>chromatic adaptation            : 1.04781 0.02289 -0.05017 0.02953 0.99051 -0.01706 -0.00925 0.01506 0.75191</code>
<code>a to b0                         : (binary data 29772 bytes, use -b option to extract)</code>
<code>a to b1                         : (binary data 29772 bytes, use -b option to extract)</code>
<code>exif byte order                 : big-endian (motorola, mm)</code>
<code>make                            : apple</code>
<code>camera model name               : iphone x</code>
<code>orientation                     : horizontal (normal)</code>
<code>x resolution                    : 72</code>
<code>y resolution                    : 72</code>
<code>resolution unit                 : inches</code>
<code>software                        : 11.4</code>
<code>modify date                     : 2018:07:19 21:04:54</code>
<code>tile width                      : 512</code>
<code>tile length                     : 512</code>
<code>exposure time                   : 1/24</code>
<code>f number                        : 1.8</code>
<code>exposure program                : program ae</code>
<code>iso                             : 40</code>
<code>exif version                    : 0221</code>
<code>date/time original              : 2018:07:19 21:04:54</code>
<code>create date                     : 2018:07:19 21:04:54</code>
<code>offset time                     : -05:00</code>
<code>offset time original            : -05:00</code>
<code>offset time digitized           : -05:00</code>
<code>components configuration        : y, cb, cr, -</code>
<code>shutter speed value             : 1/24</code>
<code>aperture value                  : 1.8</code>
<code>brightness value                : 3.138169257</code>
<code>exposure compensation           : -0.173</code>
<code>metering mode                   : spot</code>
<code>focal length                    : 4.0 mm</code>
<code>subject area                    : 2820 2094 755 753</code>
<code>maker note version              : 9</code>
<code>run time flags                  : valid</code>
<code>run time value                  : 122533112040916</code>
<code>run time scale                  : 1000000000</code>
<code>run time epoch                  : 0</code>
<code>ae stable                       : yes</code>
<code>ae target                       : 182</code>
<code>ae average                      : 179</code>
<code>af stable                       : yes</code>
<code>acceleration vector             : -0.8960353732 -0.07537551967 0.4357159734</code>
<code>focus distance range            : 26.33 - 27.22 m</code>
<code>ois mode                        : 2</code>
<code>content identifier              : 1b0e4499-bb39-414b-a2af-447d4e8538b6</code>
<code>image capture type              : unknown (5)</code>
<code>live photo video index          : 8192</code>
<code>photos app feature flags        : 0</code>
<code>sub sec time                    : 181</code>
<code>sub sec time original           : 181</code>
<code>sub sec time digitized          : 181</code>
<code>flashpix version                : 0100</code>
<code>exif image width                : 4032</code>
<code>exif image height               : 3024</code>
<code>sensing method                  : one-chip color area</code>
<code>scene type                      : directly photographed</code>
<code>exposure mode                   : auto</code>
<code>white balance                   : auto</code>
<code>digital zoom ratio              : 1.292307692</code>
<code>focal length in 35mm format     : 36 mm</code>
scene capture type              : standard
<code>lens info                       : 4-6mm f/1.8-2.4</code>
<code>lens make                       : apple</code>
<code>lens model                      : iphone x back dual camera 4mm f/1.8</code>
<code>gps altitude ref                : above sea level</code>
<code>gps time stamp                  : 02:04:54</code>
<code>gps speed ref                   : km/h</code>
<code>gps speed                       : 0</code>
<code>gps img direction ref           : true north</code>
<code>gps img direction               : 262.6861314</code>
<code>gps dest bearing ref            : true north</code>
<code>gps dest bearing                : 262.6861314</code>
<code>gps date stamp                  : 2018:07:20</code>
<code>gps horizontal positioning error: 5 m</code>
<code>pixels per unit x               : 2835</code>
<code>pixels per unit y               : 2835</code>
<code>pixel units                     : meters</code>
<code>xmp toolkit                     : xmp core 6.0.0</code>
<code>color space                     : uncalibrated</code>
<code>flash pix version               : 0100</code>
<code>subsec time original            : 181</code>
<code>subsec time digitized           : 181</code>
<code>flash function                  : false</code>
<code>flash fired                     : false</code>
<code>flash return                    : no return detection</code>
<code>flash mode                      : auto</code>
<code>flash red eye mode              : false</code>
<code>focal len in 35mm film          : 36</code>
<code>subsec time                     : 181</code>
<code>creator tool                    : 11.4</code>
<code>photographic sensitivity        : 40</code>
<code>subject                         :</code>
<code>date created                    : 2018:07:19 21:04:54-05:00</code>
<code>run time since power up         : 1 days 10:02:13</code>
<code>aperture                        : 1.8</code>
<code>image size                      : 4032x3024</code>
<code>megapixels                      : 12.2</code>
<code>scale factor to 35 mm equivalent: 9.0</code>
<code>shutter speed                   : 1/24</code>
<code>create date                     : 2018:07:19 21:04:54.181-05:00</code>
<code>date/time original              : 2018:07:19 21:04:54.181-05:00</code>
<code>modify date                     : 2018:07:19 21:04:54.181-05:00</code>
<code>gps altitude                    : 398.3 m above sea level</code>
<code>gps date/time                   : 2018:07:20 02:04:54z</code>
<code>gps latitude                    : 37 deg 41' 44.00" n</code>
<code>gps longitude                   : 97 deg 21' 21.99" w</code>
<code>flash                           : auto, did not fire</code>
<code>gps latitude ref                : north</code>
<code>gps longitude ref               : west</code>
<code>circle of confusion             : 0.003 mm</code>
<code>field of view                   : 53.1 deg</code>
<code>focal length                    : 4.0 mm (35 mm equivalent: 36.0 mm)</code>
<code>gps position                    : 37 deg 41' 44.00" n, 97 deg 21' 21.99" w</code>
<code>hyperfocal distance             : 2.66 m</code>
<code>light value                     : 7.6</code>
<code>lens id                         : iphone x back dual camera 4mm f/1.8</code>
```

##  goals

1.  allow users to easily upload images
2.  clearly present extracted `exif` metadata
3.  clearly present extracted `c2pa` metadata, authenticity, and provenance info
4.  user friendly and accessible interface
5.  efficient and secure processing of images

##  functional requirements

| fr# |  category                        |
|:----|:------------------------------------|
| fr1 |  image upload                       |
| fr2 |  exif metadata processing & display |
| fr3 |  c2pa metadata processing & display |
| fr4 |  user interface & experience ui/ux  |

###  fr1 

1.  upload image file using drag and drop interface
2.  upload an image file by clicking an upload button and selecting a file from their local system
3.  support at least some of the following image formats `jpeg`, `png`, `heic`, `webp`
4.  visual feedback during upload process (e.g. progress indicator)
5.  display an error message if the uploaded file is not a supported image type or exceeds a size limit
6.  maximym file size is defined as 25mb
7.  application show allow replacing the current image with a new one or clearing the current image and metadata view

###  fr2

1.  backend shall extract `exif` metadata from the uploaded image
2.  frontend shall display common `exif` tags in a structured and human readable format from the following categories in the figure 1 below  
    i.  the application should handle and indicate missing `exif` tags (e.g. display n/a or omit the field)  
    ii.  for fields with binary data (e.g. "A to B2"), the application should indicate its presence and size (e.g. binary data 29772 bytes).  direct download of this binary data is an optional future enhancement.
3.  `c2pa` metadata and processing & display


|  catagory  |   exif tag |
|:----------|:-------------|
| file information | `file name`, `file size`, `file type`, `mime type` | 
| image characteristics | `image width`, `image height`, `bit depth`, `color type`, `color space`, `profile name` |
|  camera information | `make`, `camera model name`, `software`, `orientation` |
| exposure details | `exposure time`, `f numbers`, `exposure program`, `iso`, `shutter speed value`, `aperture` |
| lens information | `focal length`, `lens info`, `lens make`, `lens model` | 
| date & time | `modfy date`, `create date`, `date/time original` |
| geolocation | `gps latitude`, `gps longitude`, `gps altitude`, `gps date/time` + INTERACTIVE MAP|
| flash information | `flash`, `flash function`, `flash fired`, `flash mode` |
| advanced | `components configuration`, `exif version`, `exif image width`, `exif image height`, `sensing method`, `scene type`, `exposure mode`, `white balance`, `digital zoom ratio`, `scene capture type` |

###  fr3

###  fr4

###  non-functional requirements

| nfr# |  description                        |
|:-----|:------------------------------------|
| nfr1 |  performance                        |
| nfr2 |  useability                         |
| nfr3 |  accessibility                      |
| nfr4 |  security                           |
| nfr5 |  scalability                        |
| nfr6 |  maintainability                    |
| nfr7 |  privacy                            |

potential tangent urls 

isitai.net

truemetadata.com

dataproof.org

viewmetadata.com

valdiatedata.com

verifythis.org

veryifymetadata.com

canitrustthis.com

trustworthyornot.com

trustworthydata.com

datamistrust.com

isitedited.com

isitdisinfo.com

editeddata.com

idonttrustit.com

isthisedited.com

aboutthis.com

validatethis.com

canitrustthis.io

provenance.com

trustthisdata.com

verifydata.org

revealmetadata.com

manifestrecord.com

checkmetadata.com

datamistrust.com

trustindata.org

trustthisdata.com

idonttrustthis.com

isthisfake.net

uncoverdata.net

suspiciousdata.com

unreliabledata.com

forgeddata.net

truthfuldata.net

isitmisinformation.com

isitdisinformation.com

disinformationindata.com

isitdisinformation.com

checkfortruth.com

trustsignals.net

trustworthydata.com

confirmdata.io

justifydata.org

realmetadata.com

truemetadata.com

--------------------


#  steps for implementation

1.  `npx create-next-app@latest . --typescript --eslint --tailwind (optional) --src-dir (optional) --app --import-alias "@/*"`
2.  `npm i @vercel/analytics`
    1.  `import { Analytics } from "@vercel/analytics/next"`
    2.  `<Analytics/>`
3.  


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
The `--app` flag sets up the App Router, which is recommended for new Next.js projects.

```
npm i @vercel/analytics

import { Analytics } from "@vercel/analytics/next"

<Analytics/>
```

```
~/Documents/00-GitHub/isitai main*                                                                                                               02:32:50 PM
❯ npx create-next-app@latest
✔ What is your project named? … app
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
✔ What import alias would you like configured? … @/*
Creating a new Next.js app in /Users/owner/Documents/00-GitHub/isitai/app.

Using npm.

Initializing project with template: app


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- eslint
- eslint-config-next
- @eslint/eslintrc


added 305 packages, and audited 306 packages in 14s

129 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Success! Created app at /Users/owner/Documents/00-GitHub/isitai/app

```









---------------------------

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


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




---------------



during a gold rush, sell picks and shovels.

Here's why:

"AI gold rush." There's immense excitement, investment, and rapid development in AI models, particularly generative AI that creates images, text, audio, and video. Everyone is rushing to build the next big AI application or integrate AI into their existing products.

The "Miners":

Companies developing foundational AI models (like OpenAI, Google, Anthropic, etc.).
Startups and developers building AI-powered applications for various purposes (art generation, content writing, coding assistance, etc.).

Creative professionals and industries adopting AI tools.
The "Shovels" (and your project, isitai):

As AI generates vast amounts of digital content, critical questions arise about provenance (where did it come from? who or what created it?), authenticity (is it genuine? has it been tampered with?), and attribution (who deserves credit or bears responsibility?).

Your project, isitai, by providing "a provenance and authentication service for digital assets using EXIF and C2PA," is offering essential tools to address these critical needs.

EXIF data is a long-standing standard for metadata in images, and extending or integrating it with new provenance information is a logical step.

C2PA (Coalition for Content Provenance and Authenticity) is a key industry initiative establishing standards for digital content provenance. Building a service that leverages or aligns with C2PA means 

you're providing a standardized and increasingly necessary "shovel."
Why isitai is a "shovel":

Trust and Verification: In an era where AI can create highly realistic fakes (deepfakes, misinformation), services that help authenticate content and track its origin are vital for building trust.
Intellectual Property: As AI models are trained on vast datasets and generate new content, clear provenance can help address copyright and IP concerns for both human creators and AI-generated works.
Ethical AI & Responsible Deployment: Knowing if content is AI-generated is crucial for transparency and ethical considerations.
Regulatory Compliance: Future regulations will likely require more transparency and traceability for AI-generated content. Your service could help companies comply.
Just like the gold miners needed shovels, picks, food, and durable clothing, participants in the AI revolution (whether they are building models, creating applications, or consuming AI-generated content) will increasingly need robust tools for provenance and authentication.

Your project is focused on providing a critical piece of infrastructure and a necessary service for the burgeoning AI ecosystem. So, yes, you are very much in the business of "selling shovels" during this AI gold rush, and that's often a very smart place to be!

-------------------------

As AI generates vast amounts of digital content, critical questions arise about provenance (where did it come from? who or what created it?), authenticity (is it genuine? has it been tampered with?), and attribution (who deserves credit or bears responsibility?).



--------



exiftool version number         : 13.25
file name                       : img_0001.png
directory                       : .
file size                       : 11 mb
file modification date/time     : 2025:05:10 21:14:04-05:00
file access date/time           : 2025:05:14 16:22:21-05:00
file inode change date/time     : 2025:05:14 15:23:36-05:00
file permissions                : -rw-r--r--
file type                       : png
file type extension             : png
mime type                       : image/png
image width                     : 4032
image height                    : 3024
bit depth                       : 8
color type                      : rgb
compression                     : deflate/inflate
filter                          : adaptive
interlace                       : noninterlaced
profile name                    : icc profile
profile cmm type                : apple computer inc.
profile version                 : 4.0.0
profile class                   : input device profile
color space data                : rgb
profile connection space        : xyz
profile date time               : 2016:01:01 00:00:00
profile file signature          : acsp
primary platform                : apple computer inc.
cmm flags                       : not embedded, independent
device manufacturer             : apple computer inc.
device model                    :
device attributes               : reflective, glossy, positive, color
rendering intent                : perceptual
connection space illuminant     : 0.9642 1 0.82491
profile creator                 : apple computer inc.
profile id                      : 09a72bcf796cf3543b61a77f1ae38acc
profile description             : apple wide color sharing profile
profile copyright               : copyright apple inc., 2016
media white point               : 0.9642 1 0.8251
a to b2                         : (binary data 29772 bytes, use -b option to extract)
chromatic adaptation            : 1.04781 0.02289 -0.05017 0.02953 0.99051 -0.01706 -0.00925 0.01506 0.75191
a to b0                        : (binary data 29772 bytes, use -b option to extract)
a to b1                         : (binary data 29772 bytes, use -b option to extract)
exif byte order                 : big-endian (motorola, mm)
make                            : apple
camera model name               : iphone x
orientation                     : horizontal (normal)
x resolution                    : 72
y resolution                    : 72
resolution unit                 : inches
software                        : 11.4
modify date                     : 2018:07:19 21:04:54
tile width                      : 512
tile length                     : 512
exposure time                   : 1/24
f number                        : 1.8
exposure program                : program ae
iso                             : 40
exif version                    : 0221
date/time original              : 2018:07:19 21:04:54
create date                     : 2018:07:19 21:04:54
offset time                     : -05:00
offset time original            : -05:00
offset time digitized           : -05:00
components configuration        : y, cb, cr, -
shutter speed value             : 1/24
aperture value                  : 1.8
brightness value                : 3.138169257
exposure compensation           : -0.173
metering mode                   : spot
focal length                    : 4.0 mm
subject area                    : 2820 2094 755 size
maker note version              : 9
run time flags                  : valid
run time value                  : 122533112040916
run time scale                  : 1000000000
run time epoch                  : 0
ae stable                       : yes
ae target                       : 182
ae average                      : 179
af stable                       : yes
acceleration vector             : -0.8960353732 -0.07537551967 0.4357159734
focus distance range            : 26.33 - 27.22 m
ois mode                        : 2
content identifier              : 1b0e4499-bb39-414b-a2af-447d4e8538b6
image capture type              : unknown (5)
live photo video index          : 8192
photos app feature flags        : 0
sub sec time                    : 181
sub sec time original           : 181
sub sec time digitized          : 181
flashpix version                : 0100
exif image width                : 4032
exif image height               : 3024
sensing method                  : one-chip color area
scene type                      : directly photographed
exposure mode                   : auto
white balance                   : auto
digital zoom ratio              : 1.292307692
focal length in 35mm format     : 36 mm
scene capture type              : standard
lens info                       : 4-6mm f/1.8-2.4
lens make                       : apple
lens model                      : iphone x back dual camera 4mm f/1.8
gps altitude ref                : above sea level
gps time stamp                  : 02:04:54
gps speed ref                   : km/h
gps speed                       : 0
gps img direction ref           : true north
gps img direction               : 262.6861314
gps dest bearing ref            : true north
gps dest bearing                : 262.6861314
gps date stamp                  : 2018:07:20
gps horizontal positioning error: 5 m
pixels per unit x               : 2835
pixels per unit y               : 2835
pixel units                     : meters
xmp toolkit                     : xmp core 6.0.0
color space                     : uncalibrated
flash pix version               : 0100
subsec time original            : 181
subsec time digitized           : 181
flash function                  : false
flash fired                     : false
flash return                    : no return detection
flash mode                      : auto
flash red eye mode              : false
focal len in 35mm film          : 36
subsec time                     : 181
creator tool                    : 11.4
photographic sensitivity        : 40
subject                         :
date created                    : 2018:07:19 21:04:54-05:00
run time since power up         : 1 days 10:02:13
aperture                        : 1.8
image size                      : 4032x3024
megapixels                      : 12.2
scale factor to 35 mm equivalent: 9.0
shutter speed                   : 1/24
create date                     : 2018:07:19 21:04:54.181-05:00
date/time original              : 2018:07:19 21:04:54.181-05:00
modify date                     : 2018:07:19 21:04:54.181-05:00
gps altitude                    : 398.3 m above sea level
gps date/time                   : 2018:07:20 02:04:54z
gps latitude                    : 37 deg 41' 44.00" n
gps longitude                   : 97 deg 21' 21.99" w
flash                           : auto, did not fire
gps latitude ref                : north
gps longitude ref               : west
circle of confusion             : 0.003 mm
field of view                   : 53.1 deg
focal length                    : 4.0 mm (35 mm equivalent: 36.0 mm)
gps position                    : 37 deg 41' 44.00" n, 97 deg 21' 21.99" w
hyperfocal distance             : 2.66 m
light value                     : 7.6
lens id                         : iphone x back dual camera 4mm f/1.8


Icon Name (Material Symbols)

description
save
extension
code_blocks

width_full
height
layers
palette

label_important
photo_camera
terminal
screen_rotation

edit_calendar
calendar_add_on
event
schedule_send

shutter_speed
camera
iso
center_focus_weak
speed
flash_on / flash_off

location_on
location_on
altitude
access_time_filled

color_lens
notes

aspect_ratio
auto_awesome
landscape / portrait
lens

EXIF Key Display Name
File Information
File Name
File Size
File Type
MIME Type
Image Dimensions
Image Width
Image Height
Bit Depth
Color Type
Device & Software
Make
Camera Model Name
Software
Orientation
Date & Time
Modify Date
Create Date
Date/Time Original
Offset Time
Exposure & Settings
Exposure Time
F-Number (Aperture)
ISO
Focal Length
Metering Mode
Flash
GPS / Location
GPS Latitude
GPS Longitude
GPS Altitude
GPS Date/Time Stamp
ICC Profile
Profile Name
Profile Description
Other Interesting Fields
X Resolution / Y Resolution
Exposure Program
Scene Capture Type
Lens Model




what i have so far is the list of components that make of the figma mockup that i just made, each compoent has subcompoents i have provided the CSS for the main components, now I need to provide the CSS for the subcomponents and the structure of the mockup.

```plaintext
frame
└── contents
    ├── icon-background (60 of them in a grid of 10x6)
    │   └──icons (60 of them in a grid of 10x6)
    │
    ├──details-backdrop
    │   ├──view-icon-background
    │   │   └──view-icon
    │   ├──download-button
    │   ├──view-details-button
    │   └──detail-text
    │
    └── image-frame
        └── image
```


frame
width: 1234px;
height: 477px;
flex-shrink: 0;
width: 1234px;
height: 477px;
flex-shrink: 0;

contents
width: 1194px;
height: 437px;
flex-shrink: 0;
border-radius: 10px;
background: #1A1A1A;

image-frame
width: 474px;
height: 301px;
flex-shrink: 0;
border-radius: 10px;
background: #1F1F1F;

image
width: 426px;
height: 255px;
flex-shrink: 0;
border-radius: 10px;
background: url(<path-to-image>) lightgray 50% / cover no-repeat;

details-backdrop
width: 474px;
height: 86px;
flex-shrink: 0;
border-radius: 10px;
background: #1F1F1F;

view-icon-background
width: 58px;
height: 58px;
flex-shrink: 0;
border-radius: 10px;
background: #333;

view-icon
width: 58px;
height: 58px;
flex-shrink: 0;
border-radius: 10px;
background: #1F1F1F;

download-button
display: inline-flex;
padding: 7px 14px;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 30px;
background: var(--Fills-Tertiary, rgba(120, 120, 128, 0.24));
color: var(--Colors-Blue, var(--Colors-Blue, #0A84FF));
font-family: "Geist Sans", sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 133.333% */
letter-spacing: -0.23px;

view-details-button
display: flex;
width: 34px;
padding: 7px 14px;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 30px;
background: var(--Fills-Tertiary, rgba(120, 120, 128, 0.24));
width: 15px;
height: 15px;
flex-shrink: 0;
fill: var(--Miscellaneous-Floating-Tab---Text-Selected, #007AFF);
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <circle cx="7.5" cy="7.5" r="7.5" fill="#007AFF"/>
</svg>


icons
width: 34.8px;
height: 34.8px;
flex-shrink: 0;
aspect-ratio: 34.80/34.80;
color: #525252;


details-text
display: flex;
width: 145px;
height: 65px;
flex-direction: column;
justify-content: flex-end;
flex-shrink: 0;

details-text-value
color: #B8B8B8;
font-family: Geist;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 25px; /* 104.167% */

details-text-fieldname
color: #7A7A7A;
font-family: Geist;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 25px;









----------



Okay, this is a fantastic and ambitious next step for isitai! You want to create a dedicated, highly interactive page to display the decoded EXIF data, inspired by the Vercel Fonts UI and your detailed Figma mockups (details.jpg and download-option.jpg).

This will involve creating a new page (e.g., in a src/app/details/ folder) and adding significant new CSS. The core idea is a two-panel layout: one for displaying the details of a selected EXIF field (with its icon, key, value, and description) and another panel with a grid of icons representing various EXIF fields. Hovering/clicking an icon in the grid will update the detail panel. You also want a feature to download the EXIF data.

Key Considerations:

Data Passing: This new "details" page will need the imageSrc (for the preview) and the full allExifData object that was extracted on the upload page. For this example, I will use placeholder data within the new page component. In your actual application, you'll need to pass this data, perhaps using:
Query parameters: For simple data like image SRC if it's a URL.
Client-side state management: (Context API, Zustand, Jotai, Redux) to make the data available across routes after extraction. This is generally the most robust way for complex objects like allExifData.
Server-side solution: If you were to store the extraction results temporarily on the server, but this is more complex.
Material Symbols Icons: You'll need to include the Google Fonts Material Symbols stylesheet in your application for the icons to render correctly. You can add this to your src/app/layout.tsx:

```htmnl
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```

exiftool-web: This page assumes that exiftool-web has already processed the image on the previous page, and the resulting allExifData object is what's being passed to and used here.

Let's create the new page and the CSS.

I'll provide the code for the new details page (src/app/details/page.tsx) and the necessary additions to your globals.css.

This is a substantial setup. Remember to:

Pass Data: Implement a method to pass imageSrc and allExifData from your upload page to this new /details page. The current implementation uses placeholder data.
Material Symbols Font: Ensure you've linked the Material Symbols font in your layout.tsx [cite: uploaded:layout.tsx] or global HTML.
Expand EXIF_METADATA_CONFIG: Populate this object with up to 60 mappings for the icons you want to display in the grid, based on your exiftool output.
Test Responsiveness: Thoroughly test the layout on different screen sizes.
Light Mode Theming: Review and adjust the light mode colors. The CSS provided focuses on the dark mode from your mockup and infers light mode from your existing variables. You may need to add more specific light theme overrides for some of the new components.
This should give you a very interactive and visually appealing way to present EXIF data!



```tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the structure of your EXIF data entry for the detail view
interface ExifDisplayInfo {
    key: string; // The display-friendly key name
    originalKey: string; // The key as it appears in the EXIF data object
    value: string | number | undefined | null;
    description: string;
    iconName: string; // Google Fonts Material Symbol name
    group: string; // For potential future filtering/grouping
}

// Define the structure for the full EXIF dataset
type FullExifData = Record<string, any>;

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
const MaterialIcon = ({ iconName, className }: { iconName: string; className?: string }) => {
    return <span className={`material-symbols-outlined ${className}`}>{iconName}</span>;
};

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
    const [imageSrc, setImageSrc] = useState<string | null>("/path-to-your-uploaded-image.jpg"); // Placeholder
    const [allExifData, setAllExifData] = useState<FullExifData | null>(() => {
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
            let dataValue: any = undefined;
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
                fields.push({
                    key: config.displayName,
                    originalKey: keyInConfig,
                    value: dataValue,
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
        const originalFileName = (allExifData.FileName as string)?.split('.')[0] || 'exif_data';
        let fileName = `${originalFileName}_${new Date().toISOString().split('T')[0]}`;
        let mimeType = "";

        if (format === 'json') {
            content = JSON.stringify(allExifData, null, 2);
            fileName += ".json";
            mimeType = "application/json";
        } else if (format === 'txt') {
            for (const [key, value] of Object.entries(allExifData)) {
                content += `${key}: ${typeof value === 'object' ? JSON.stringify(value) : String(value)}\n`;
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
                            <div className="image-frame">
                                <Image
                                    src={imageSrc} // Replace with actual imageSrc prop/state
                                    alt={allExifData.FileName as string || "Decoded image"}
                                    layout="fill"
                                    objectFit="contain"
                                    className="details-image-style"
                                />
                            </div>
                            <div className="details-backdrop">
                                <div className="view-icon-background">
                                    {selectedExifDetail && (
                                        <MaterialIcon iconName={selectedExifDetail.iconName} className="view-icon-style" />
                                    )}
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
                                    <MaterialIcon iconName={field.iconName} className="exif-detail-icon" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

```


```css
/* styles globals.css */

/* ... (your existing :root and other styles from previous globals.css) ... */

/* Specific styles for the details page if needed to override body defaults */
/* .details-page-override > body {
    background-color: #000; /* Example: Very dark background for this page
} */

.details-main-content {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Align frame to top if page is scrollable */
    flex-grow: 1;
}

.details-frame {
    width: 1234px; /* Figma spec */
    height: auto; /* Let content determine height */
    min-height: 477px; /* Figma spec */
    max-width: calc(100% - 40px); /* Ensure some padding from viewport edges */
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px; /* Padding for the frame itself, if contents are smaller than 1234px */
}

.details-contents-container {
    width: 1194px; /* Figma spec */
    height: auto;
    min-height: 437px; /* Figma spec */
    max-width: 100%;
    flex-shrink: 0;
    border-radius: 10px; /* Figma spec */
    padding: 20px;
    display: flex;
    gap: 20px;
    overflow: hidden; /* Important for border-radius on children if they touch edges */
}
html[data-theme="dark"] .details-contents-container {
    background: #1A1A1A; /* Figma spec */
}
html[data-theme="light"] .details-contents-container {
    background: var(--backgroundColor-gray-lightest);
    border: 1px solid var(--backgroundColor-gray-light);
}

.details-left-panel {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 474px; /* Figma spec */
    max-width: 100%;
    flex-shrink: 0; /* Prevent shrinking if icon grid is too wide */
}

.image-frame {
    width: 474px; /* Figma spec */
    height: 301px; /* Figma spec */
    max-width: 100%;
    flex-shrink: 0;
    border-radius: 10px; /* Figma spec */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 23px; /* To create the inner space for the 426x255 image */
    overflow: hidden; /* Ensures image adheres to border-radius */
}
html[data-theme="dark"] .image-frame {
    background: #1F1F1F; /* Figma spec */
}
html[data-theme="light"] .image-frame {
    background: var(--backgroundColor-gray-light);
}

.details-image-style { /* Applied to Next/Image */
    border-radius: 10px !important; /* Figma spec */
    /* background: url(<path-to-image>) lightgray 50% / cover no-repeat; -> Handled by Next/Image */
}

.details-backdrop {
    width: 474px; /* Figma spec */
    height: 86px; /* Figma spec */
    max-width: 100%;
    flex-shrink: 0;
    border-radius: 10px; /* Figma spec */
    padding: 14px;
    display: flex;
    align-items: center;
    gap: 14px;
}
html[data-theme="dark"] .details-backdrop {
    background: #1F1F1F; /* Figma spec */
}
html[data-theme="light"] .details-backdrop {
    background: var(--backgroundColor-gray-light);
}

.view-icon-background {
    width: 58px; /* Figma spec */
    height: 58px; /* Figma spec */
    flex-shrink: 0;
    border-radius: 10px; /* Figma spec */
    display: flex;
    justify-content: center;
    align-items: center;
}
html[data-theme="dark"] .view-icon-background {
    background: #333; /* Figma spec */
}
html[data-theme="light"] .view-icon-background {
    background: var(--backgroundColor-gray);
}

.view-icon-style { /* For the large icon in details-backdrop */
    font-size: 34.8px !important; /* Figma spec for icon size */
    width: 34.8px;
    height: 34.8px;
    display: flex !important;
    align-items: center;
    justify-content: center;
}
html[data-theme="dark"] .view-icon-style {
    color: #B8B8B8; /* Figma: details-text-value color */
}
html[data-theme="light"] .view-icon-style {
    color: var(--backgroundColor-gray-dark-6); /* Consistent with other light theme icons */
}

.detail-text-area {
    display: flex;
    flex-direction: column;
    width: 145px; /* Figma spec */
    height: 65px; /* Figma spec */
    justify-content: flex-end; /* Aligns text block to bottom as per Figma */
    flex-shrink: 0; /* Figma spec */
    overflow: hidden; /* For text ellipsis */
}

.detail-text-fieldname {
    font-family: 'Geist', var(--font-geist-sans);
    font-size: 14px; /* Figma spec */
    line-height: 1.2; /* Adjusted from 25px for better fit */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2px; /* Small space between fieldname and value */
}
html[data-theme="dark"] .detail-text-fieldname {
    color: #7A7A7A; /* Figma spec */
}
html[data-theme="light"] .detail-text-fieldname {
    color: var(--backgroundColor-gray-dark-7);
}

.detail-text-value {
    font-family: 'Geist', var(--font-geist-mono);
    font-size: 20px; /* Adjusted from 24px for balance */
    line-height: 1.1; /* Adjusted from 25px */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all; /* If not nowrap */
}
html[data-theme="dark"] .detail-text-value {
    color: #B8B8B8; /* Figma spec */
}
html[data-theme="light"] .detail-text-value {
    color: var(--backgroundColor-gray-dark-16);
}

.detail-text-description {
    font-family: 'Geist', var(--font-geist-sans);
    font-size: 0.7rem; /* Smaller for description */
    line-height: 1.4;
    margin-top: 4px;
    opacity: 0.7; /* Slightly faded */
    max-height: 3em; /* Limit description lines shown by default */
    overflow: hidden;
}
html[data-theme="dark"] .detail-text-description {
    color: #7A7A7A;
}
html[data-theme="light"] .detail-text-description {
    color: var(--backgroundColor-gray-dark-7);
}

.details-buttons-group {
    display: flex;
    align-items: center; /* Align buttons vertically */
    gap: 8px;
    margin-left: auto; /* Pushes this group to the right */
}

.download-options {
    display: flex;
    gap: 8px;
}

.download-button, .view-details-button {
    display: inline-flex;
    padding: 7px 14px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 30px; /* Figma spec */
    font-family: "Geist", var(--font-geist-sans);
    font-size: 13px; /* Figma spec 15px, adjusted for balance */
    font-weight: 400;
    line-height: 1.2; /* Adjusted from 20px */
    letter-spacing: -0.23px; /* Figma spec */
    border: none;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s, opacity 0.2s;
}
/* Dark theme button styles from Figma */
html[data-theme="dark"] .download-button,
html[data-theme="dark"] .view-details-button {
    background: rgba(120, 120, 128, 0.24); /* Figma: var(--Fills-Tertiary) */
    color: #0A84FF; /* Figma: var(--Colors-Blue) */
}
html[data-theme="dark"] .download-button:hover,
html[data-theme="dark"] .view-details-button:hover {
    background: rgba(120, 120, 128, 0.35); /* Slightly darker on hover */
}
/* Light theme button styles (inferred) */
html[data-theme="light"] .download-button,
html[data-theme="light"] .view-details-button {
    background: var(--backgroundColor-gray-light);
    color: #007AFF; /* Standard blue */
    border: 1px solid var(--backgroundColor-gray);
}
html[data-theme="light"] .download-button:hover,
html[data-theme="light"] .view-details-button:hover {
    background: var(--backgroundColor-gray);
}

.download-button svg {
    width: 15px; height: 15px;
}
html[data-theme="dark"] .download-button svg { fill: #0A84FF; }
html[data-theme="light"] .download-button svg { fill: #007AFF; }

.view-details-button {
    width: 34px; /* Figma spec */
    height: 34px; /* To make it circular with padding */
    padding: 0; /* Remove padding if width/height are set for the circle */
    display: flex; /* Already set, ensure it centers the SVG */
    justify-content: center;
    align-items: center;
}
.view-details-button-svg-circle { /* Class for the circle in ViewDetailsSVGIcon */
     /* fill is set via CSS variable or direct value */
}
html[data-theme="dark"] .view-details-button-svg-circle { fill: #007AFF; /* Figma spec */ }
html[data-theme="light"] .view-details-button-svg-circle { fill: #007AFF; }


.icon-grid-container {
    flex-grow: 1; /* Takes remaining space */
    display: grid;
    grid-template-columns: repeat(10, 1fr); /* 10 columns */
    /* grid-template-rows: repeat(6, auto); Let content define row height or set fixed height for icon wrappers */
    gap: 8px; /* Reduced gap for tighter grid */
    padding: 10px;
    overflow-y: auto;
    max-height: 397px; /* (437px total height - 20px padding-top - 20px padding-bottom) approx */
    align-content: start; /* Align items to the start of the grid */
}

.icon-item-wrapper {
    aspect-ratio: 1 / 1; /* Square icons */
    border-radius: 8px; /* Figma says 10px for icon-background, adjusted for smaller grid items */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s, outline 0.2s;
    min-height: 40px; /* Minimum size for touch targets */
}
.icon-item-wrapper.placeholder {
    background-color: transparent !important;
    cursor: default;
    outline: none !important;
}
.icon-item-wrapper.placeholder .exif-detail-icon {
    opacity: 0; /* Make placeholder icons invisible */
}

html[data-theme="dark"] .icon-item-wrapper {
    background: #333; /* Figma spec for icon-background */
}
html[data-theme="dark"] .icon-item-wrapper:not(.placeholder):hover {
    background: #4A4A4A; /* Slightly lighter hover */
}
html[data-theme="dark"] .icon-item-wrapper.selected {
    background: #0A84FF; /* Blue for selected */
    outline: 2px solid #0A84FF;
}
html[data-theme="dark"] .icon-item-wrapper.selected .exif-detail-icon {
    color: white !important; /* Ensure icon is visible on blue background */
}


html[data-theme="light"] .icon-item-wrapper {
    background: var(--backgroundColor-gray);
}
html[data-theme="light"] .icon-item-wrapper:not(.placeholder):hover {
    background: var(--backgroundColor-gray-medium);
}
html[data-theme="light"] .icon-item-wrapper.selected {
    background: #007AFF; /* Blue for selected */
    outline: 2px solid #007AFF;
}
html[data-theme="light"] .icon-item-wrapper.selected .exif-detail-icon {
    color: white !important;
}


.exif-detail-icon { /* For icons in the grid */
    font-size: 28px !important; /* Adjusted from 34.8px for better fit in smaller grid cells */
    width: 28px;
    height: 28px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    transition: color 0.2s;
}
html[data-theme="dark"] .exif-detail-icon {
    color: #7A7A7A; /* Figma: #525252, but #7A7A7A is more visible on #333 */
}
html[data-theme="light"] .exif-detail-icon {
    color: var(--backgroundColor-gray-dark-7);
}
html[data-theme="dark"] .icon-item-wrapper:not(.placeholder):hover .exif-detail-icon {
    color: #B8B8B8; /* Lighter on hover */
}
html[data-theme="light"] .icon-item-wrapper:not(.placeholder):hover .exif-detail-icon {
    color: var(--backgroundColor-gray-dark-16);
}


/* Responsive adjustments for details page */
@media (max-width: 1234px) { /* When frame starts to shrink */
    .details-frame {
        width: 100%;
        padding: 10px; /* Reduce frame padding */
    }
    .details-contents-container {
        width: 100%;
        /* flex-direction: column; Stack earlier if needed */
        /* align-items: center; */
    }
}

@media (max-width: 1024px) { /* Tablet and smaller */
    .details-contents-container {
        flex-direction: column;
        align-items: center;
        height: auto;
        padding: 15px;
        gap: 15px;
    }
    .details-left-panel {
        width: 100%;
        max-width: 474px; /* Maintain left panel max width */
    }
    .image-frame, .details-backdrop {
        width: 100%;
    }
    .icon-grid-container {
        width: 100%;
        max-width: none; /* Allow grid to use available width */
        grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
        max-height: 300px; /* Adjust max height for stacked layout */
    }
}

@media (max-width: 768px) { /* Mobile */
    .details-frame {
        min-height: auto;
    }
    .details-contents-container {
        min-height: auto;
        padding: 10px;
        gap: 10px;
    }
    .image-frame {
        height: 200px; /* Adjust image frame height for mobile */
        padding: 10px;
    }
    .details-backdrop {
        flex-direction: column;
        align-items: flex-start;
        height: auto;
        padding: 10px;
        gap: 10px;
    }
    .details-buttons-group {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 0;
        margin-top: 10px;
    }
    .download-options {
        justify-content: flex-end;
        flex-grow: 1;
    }
    .detail-text-area {
        width: 100%; /* Full width in stacked backdrop */
    }
    .icon-grid-container {
        grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
        gap: 6px;
        max-height: 250px;
    }
    .exif-detail-icon {
        font-size: 24px !important;
        width: 24px;
        height: 24px;
    }
    .view-icon-style {
        font-size: 30px !important;
        width: 30px;
        height: 30px;
    }
    .download-button, .view-details-button {
        font-size: 12px;
        padding: 6px 10px;
    }
}
```
