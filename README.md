# isitai

[![Status](https://img.shields.io/badge/STATUS-Under%20Construction-yellow.svg)](https://www.github.com/isitai)

isitai is a web application for extracting and presenting image metadata (EXIF, C2PA, XMP, IPTC-IIM) from raster images (JPEG, PNG, HEIC, WebP). It helps verify the authenticity and provenance of digital assets by revealing embedded metadata.

## Introduction

isitai specializes in extracting and presenting encoded metadata from raster images. The tool enables users to inspect embedded information such as device model, creation and modification dates, GPS coordinates, color profiles, and rendering intent. In an era of AI-generated and synthetic media, understanding an image’s provenance is crucial for trust and transparency.

## Technical introduction

**Frontend**: Next.js with Chakra UI for a responsive, accessible interface.

**Backend**: Node.js (or serverless functions) for image processing and metadata extraction.

| layer     | technology             | description                                               |
|:---------:|:-----------------------|:----------------------------------------------------------|
| Frontend  | Next.js                | React framework for SSR and static site generation        |
| Frontend  | Chakra UI              | Accessible component library with theming                 |
| Backend   | Node.js                | JavaScript runtime for server-side processing             |
| Backend   | Serverless functions   | Scalable image/metadata processing endpoints              |

## Features

- Extract EXIF metadata (camera information, timestamps, geolocation)
- Parse C2PA content credentials for cryptographically verifiable provenance
- Support for JPEG, PNG, HEIC, WebP and other common image formats
- Client-side processing; no files are uploaded or stored
- Simple and accessible UI powered by Next.js and Chakra UI

## Example: EXIF metadata

Run the `exiftool` CLI on an example image:

```bash
exiftool img_0001.png
```

```plaintext
exiftool version number         : 13.25
file name                       : img_0001.png
directory                       : .
file size                       : 11 mb
file modification date/time     : 2025:05:10 21:14:04-05:00
file access date/time           : 2025:05:14 16:22:21-05:00
file type                       : png
mime type                       : image/png
image width                     : 4032
image height                    : 3024
bit depth                       : 8
color type                      : rgb
make                            : apple
camera model name               : iphone x
orientation                     : horizontal (normal)
...
```
*(output truncated — see [docs/README.md#exiftool-img_0001png](docs/README.md#exiftool-img_0001png) for full details)*

## Privacy & Security

- All files are processed locally in your browser; nothing is uploaded to any server.
- No data is collected, stored, sold, or used to train AI models.
- No advertisements.

## wasm runtime

`@uswriting/exiftool` depends on `zeroperl-1.0.0.wasm` to run ExifTool inside the browser. The upstream CDN at `https://perl.objex.ai/zeroperl-1.0.0.wasm` currently rejects cross-origin requests, so development builds fail unless the wasm blob is served from the same origin. Please download the file from the upstream URL and place it inside this project’s `public/` directory (`public/zeroperl-1.0.0.wasm`). The app will try to load that file first and will explain how to fix the missing asset if it is absent.

## Getting Started

For installation, development, deployment instructions, and detailed documentation, see the [docs/README.md](docs/README.md) file.

## Environment Variables

- Stripe keys: set secrets via environment variables; do not commit them to git.
- Local development: create `.env.local` in the project root with:

```
STRIPE_SECRET_KEY=sk_live_your_new_key
STRIPE_WEBHOOK_SECRET=whsec_your_new_secret
```

- Vercel: Project → Settings → Environment Variables
  - Add `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` for Production/Preview/Development, then redeploy.

- GitHub Actions: Settings → Secrets and variables → Actions
  - Add `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` as repository secrets if CI needs them.

- Key rotation: If a key is ever committed or exposed, rotate it in the Stripe Dashboard (Developers → API keys), then update the environment variables accordingly.

## Contributing

Contributions, issues, and feature requests are welcome! Please open an issue or submit a pull request on GitHub.

#  payment disclaimer

REFERENCE THE OLD COMMIT #XXXXX FOR ORIGINAL README DRAFT

# scripts

`npx create-next-app@latest --typescript`

`next dev --turbopack`

`next build`

`next start`

`next lint`

`rm -rf .next`

`node --test`

#  TRACE WARNING FOR SCRIPT `NPM RUN Development`

```zsh
~/Documents/01-isitai/isitai main*                                            11:11:17 AM
❯ npm run dev

> isitai@0.1.0 dev
> next dev --turbopack

(node:4611) Warning: `--localstorage-file` was provided without a valid path
(Use `node --trace-warnings ...` to show where the warning was created)
   ▲ Next.js 15.3.2 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.180:3000
   - Environments: .env.local, .env

 ✓ Starting...
(node:4612) Warning: `--localstorage-file` was provided without a valid path
(Use `node --trace-warnings ...` to show where the warning was created)
 ✓ Ready in 707ms
^C

~/Documents/01-isitai/isitai main*                                      3m 27s 11:14:46 AM
❯ DEBUG=next:* npm run dev

> isitai@0.1.0 dev
> next dev --turbopack

(node:6530) Warning: `--localstorage-file` was provided without a valid path
(Use `node --trace-warnings ...` to show where the warning was created)
   ▲ Next.js 15.3.2 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.180:3000
   - Environments: .env.local, .env

 ✓ Starting...
(node:6531) Warning: `--localstorage-file` was provided without a valid path
(Use `node --trace-warnings ...` to show where the warning was created)
  next:router-server:filesystem nextDataRoutes Set(0) {} +0ms
  next:router-server:filesystem dynamicRoutes [] +0ms
  next:router-server:filesystem customRoutes {
  headers: [],
  rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
  redirects: [
    {
      source: '/:path+/',
      destination: '/:path+',
      permanent: true,
~/Documents/01-isitai/isitai main*                                            11:11:17 AM
❯ npm run dev

> isitai@0.1.0 dev
> next dev --turbopack

(node:4611) Warning: `--localstorage-file` was provided without a valid path
(Use `node --trace-warnings ...` to show where the warning was created)
   ▲ Next.js 15.3.2 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.180:3000
   - Environments: .env.local, .env

 ✓ Starting...
(node:4612) Warning: `--localstorage-file` was provided without a valid path
(Use `node --trace-warnings ...` to show where the warning was created)
 ✓ Ready in 707ms
^C

~/Documents/01-isitai/isitai main*                                      3m 27s 11:14:46 AM
❯ DEBUG=next:* npm run dev

> isitai@0.1.0 dev
> next dev --turbopack

(node:6530) Warning: `--localstorage-file` was provided without a valid path
(Use `node --trace-warnings ...` to show where the warning was created)
   ▲ Next.js 15.3.2 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.180:3000
   - Environments: .env.local, .env

 ✓ Starting...
(node:6531) Warning: `--localstorage-file` was provided without a valid path
(Use `node --trace-warnings ...` to show where the warning was created)
  next:router-server:filesystem nextDataRoutes Set(0) {} +0ms
  next:router-server:filesystem dynamicRoutes [] +0ms
  next:router-server:filesystem customRoutes {
  headers: [],
  rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
  redirects: [
    {
      source: '/:path+/',
      destination: '/:path+',
      permanent: true,
      locale: undefined,
      internal: true
    }
  ]
} +0ms
  next:router-server:filesystem publicFolderItems Set(0) {} +1ms
  next:router-server:filesystem nextStaticFolderItems Set(0) {} +0ms
  next:router-server:filesystem pageFiles Set(0) {} +0ms
  next:router-server:filesystem appFiles Set(0) {} +0ms
Creating turbopack project { dir: '/Users/owner/Documents/01-isitai/isitai', testMode: true
 }
 ✓ Ready in 737ms
^C  next:start-server start-server process cleanup +0ms
  next:start-server start-server process cleanup finished +1ms

      locale: undefined,
      internal: true
    }
  ]
} +0ms
  next:router-server:filesystem publicFolderItems Set(0) {} +1ms
  next:router-server:filesystem nextStaticFolderItems Set(0) {} +0ms
  next:router-server:filesystem pageFiles Set(0) {} +0ms
  next:router-server:filesystem appFiles Set(0) {} +0ms
Creating turbopack project { dir: '/Users/owner/Documents/01-isitai/isitai', testMode: true
 }
 ✓ Ready in 737ms
^C  next:start-server start-server process cleanup +0ms
  next:start-server start-server process cleanup finished +1ms

```















