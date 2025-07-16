# isitai

###  disclaimer

1. Date/Time Original

```plaintext
This is when the image was actually captured by the camera.
If this date doesn’t match the context or other file dates, it could suggest tampering.
2. Make and Model

These fields show the camera or device used to take the photo (e.g., Canon EOS 5D, iPhone 13).
Missing values or generic names (like “Adobe”) may indicate the image wasn't taken by a camera or has been exported from software.
3. Software

Shows which software last modified the image.
Tools like Photoshop or Lightroom here suggest the image was edited.
4. Modify Date

The last time the file was saved or altered.
Compare this with the original date to detect post-processing.
5. XMP/History (History Action, History Software Agent, History When)

This provides a log of changes (e.g., “saved with Adobe Lightroom”).
A clear editing trail points to manipulation.
6. Thumbnail Image / Thumbnail Offset

Many cameras embed a small preview image.
If the thumbnail doesn't match the main image, it's a strong sign the image was altered.
7. GPS Data (not in your example)

If present, shows where the image was taken.
Inconsistent or missing GPS data (for a photo that should have it) can be suspicious.
8. Compression & Color Profile (e.g., JPEG Compression, sRGB)

Standard compression and profiles are expected for authentic camera images.
Unusual profiles or inconsistent settings can signal rendering or editing.
9. Orientation & Resolution

Orientation (e.g., rotated) and resolution (e.g., 3000x3000) give insight into how the image was captured.
Perfect square images or very high resolutions can suggest digital art or editing.
10. Artist / Credit / Source

If manually filled (e.g., “NASA”), check if it matches the supposed origin.
Fake or altered metadata here can mislead about the source.
```

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
~/Documents/00-GitHub/isitai
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


------------------


























































