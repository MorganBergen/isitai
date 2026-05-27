# isitai

[![Status](https://img.shields.io/badge/STATUS-Under%20Construction-yellow.svg)](https://www.github.com/isitai)

> leading the charge against misinformation

isitai is a web application for extracting and presenting image metadata (EXIF, C2PA, XMP, IPTC-IIM) from raster images (JPEG, PNG, HEIC, WebP). It helps verify the authenticity and provenance of digital assets by revealing embedded metadata.

## Introduction

isitai specializes in extracting and presenting encoded metadata from raster images. The tool enables users to inspect embedded information such as device model, creation and modification dates, GPS coordinates, color profiles, and rendering intent. In an era of AI-generated and synthetic media, understanding an image’s provenance is crucial for trust and transparency.

## Technical introduction

isitai is a next.js 15 (app router) web application with react 19 and typescript.  
metadata inspector (exif, c2pa, etc.) with privacy first, in browser processing when possible.  
dependencies include exifr, @uswriting/exiftool, exiftool in wasm via zeroperl), stripe, vercel analytics/speed insights, ui bits like lucide-react and react icons.

**Frontend**: Next.js and React

**Backend**: Node.js (or serverless functions) for image processing and metadata extraction.

| layer     | technology             | description                                               |
|:---------:|:-----------------------|:----------------------------------------------------------|
| Frontend  | Next.js                | React framework for SSR and static site generation        |
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
