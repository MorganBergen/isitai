# reveal

###  introduction

**about**  web application that views image metadata, specifically exif and c2pa metadata

**`EXIF`**  exchangable image file format, standard metadata embedded in image files (e.g. camera info, geolocation, timestamp)

**`C2PA`**  content authenticity initiative, a newer standard that embeeds content provenance metadata using cryptographically verifiable manifest

**tech stack typescript web stack**

**frontend** will contain next.js + chakra ui

**backend** node.js or serverless functions to handle processing server side

|  layer  |  title  |  description |
|:--------|:--------|:-------------|
|  frontend | `next.js`  |  react framework for server side rendering and static site generation |
|  frontend | `chakra ui`  |  component library for react with a focus on accessibility and theming |
|  backend | `node.js`  |  javascript runtime for server side processing |
|  backend | `serverless functions`  |  serverless functions for processing images and metadata |

```
ExifTool Version Number         : 13.25
File Name                       : IMG_0001.png
Directory                       : .
File Size                       : 11 MB
File Modification Date/Time     : 2025:05:10 21:14:04-05:00
File Access Date/Time           : 2025:05:14 16:22:21-05:00
File Inode Change Date/Time     : 2025:05:14 15:23:36-05:00
File Permissions                : -rw-r--r--
File Type                       : PNG
File Type Extension             : png
MIME Type                       : image/png
Image Width                     : 4032
Image Height                    : 3024
Bit Depth                       : 8
Color Type                      : RGB
Compression                     : Deflate/Inflate
Filter                          : Adaptive
Interlace                       : Noninterlaced
Profile Name                    : ICC Profile
Profile CMM Type                : Apple Computer Inc.
Profile Version                 : 4.0.0
Profile Class                   : Input Device Profile
Color Space Data                : RGB
Profile Connection Space        : XYZ
Profile Date Time               : 2016:01:01 00:00:00
Profile File Signature          : acsp
Primary Platform                : Apple Computer Inc.
CMM Flags                       : Not Embedded, Independent
Device Manufacturer             : Apple Computer Inc.
Device Model                    :
Device Attributes               : Reflective, Glossy, Positive, Color
Rendering Intent                : Perceptual
Connection Space Illuminant     : 0.9642 1 0.82491
Profile Creator                 : Apple Computer Inc.
Profile ID                      : 09a72bcf796cf3543b61a77f1ae38acc
Profile Description             : Apple Wide Color Sharing Profile
Profile Copyright               : Copyright Apple Inc., 2016
Media White Point               : 0.9642 1 0.8251


A To B2                         : (Binary data 29772 bytes, use -b option to extract)
Chromatic Adaptation            : 1.04781 0.02289 -0.05017 0.02953 0.99051 -0.01706 -0.00925 0.01506 0.75191
A To B0                         : (Binary data 29772 bytes, use -b option to extract)
A To B1                         : (Binary data 29772 bytes, use -b option to extract)
Exif Byte Order                 : Big-endian (Motorola, MM)
Make                            : Apple
Camera Model Name               : iPhone X
Orientation                     : Horizontal (normal)
X Resolution                    : 72
Y Resolution                    : 72
Resolution Unit                 : inches
Software                        : 11.4
Modify Date                     : 2018:07:19 21:04:54
Tile Width                      : 512
Tile Length                     : 512
Exposure Time                   : 1/24
F Number                        : 1.8
Exposure Program                : Program AE
ISO                             : 40
Exif Version                    : 0221
Date/Time Original              : 2018:07:19 21:04:54
Create Date                     : 2018:07:19 21:04:54
Offset Time                     : -05:00
Offset Time Original            : -05:00
Offset Time Digitized           : -05:00
Components Configuration        : Y, Cb, Cr, -
Shutter Speed Value             : 1/24
Aperture Value                  : 1.8
Brightness Value                : 3.138169257
Exposure Compensation           : -0.173
Metering Mode                   : Spot
Focal Length                    : 4.0 mm
Subject Area                    : 2820 2094 755 753
Maker Note Version              : 9
Run Time Flags                  : Valid
Run Time Value                  : 122533112040916
Run Time Scale                  : 1000000000
Run Time Epoch                  : 0
AE Stable                       : Yes
AE Target                       : 182
AE Average                      : 179
AF Stable                       : Yes
Acceleration Vector             : -0.8960353732 -0.07537551967 0.4357159734
Focus Distance Range            : 26.33 - 27.22 m
OIS Mode                        : 2
Content Identifier              : 1B0E4499-BB39-414B-A2AF-447D4E8538B6
Image Capture Type              : Unknown (5)
Live Photo Video Index          : 8192
Photos App Feature Flags        : 0
Sub Sec Time                    : 181
Sub Sec Time Original           : 181
Sub Sec Time Digitized          : 181
Flashpix Version                : 0100
Exif Image Width                : 4032
Exif Image Height               : 3024
Sensing Method                  : One-chip color area
Scene Type                      : Directly photographed
Exposure Mode                   : Auto
White Balance                   : Auto
Digital Zoom Ratio              : 1.292307692
Focal Length In 35mm Format     : 36 mm
Scene Capture Type              : Standard
Lens Info                       : 4-6mm f/1.8-2.4
Lens Make                       : Apple
Lens Model                      : iPhone X back dual camera 4mm f/1.8
GPS Altitude Ref                : Above Sea Level
GPS Time Stamp                  : 02:04:54
GPS Speed Ref                   : km/h
GPS Speed                       : 0
GPS Img Direction Ref           : True North
GPS Img Direction               : 262.6861314
GPS Dest Bearing Ref            : True North
GPS Dest Bearing                : 262.6861314
GPS Date Stamp                  : 2018:07:20
GPS Horizontal Positioning Error: 5 m
Pixels Per Unit X               : 2835
Pixels Per Unit Y               : 2835
Pixel Units                     : meters
XMP Toolkit                     : XMP Core 6.0.0
Color Space                     : Uncalibrated
Flash Pix Version               : 0100
Subsec Time Original            : 181
Subsec Time Digitized           : 181
Flash Function                  : False
Flash Fired                     : False
Flash Return                    : No return detection
Flash Mode                      : Auto
Flash Red Eye Mode              : False
Focal Len In 35mm Film          : 36
Subsec Time                     : 181
Creator Tool                    : 11.4
Photographic Sensitivity        : 40
Subject                         :
Date Created                    : 2018:07:19 21:04:54-05:00
Run Time Since Power Up         : 1 days 10:02:13
Aperture                        : 1.8
Image Size                      : 4032x3024
Megapixels                      : 12.2
Scale Factor To 35 mm Equivalent: 9.0
Shutter Speed                   : 1/24
Create Date                     : 2018:07:19 21:04:54.181-05:00
Date/Time Original              : 2018:07:19 21:04:54.181-05:00
Modify Date                     : 2018:07:19 21:04:54.181-05:00
GPS Altitude                    : 398.3 m Above Sea Level
GPS Date/Time                   : 2018:07:20 02:04:54Z
GPS Latitude                    : 37 deg 41' 44.00" N
GPS Longitude                   : 97 deg 21' 21.99" W
Flash                           : Auto, Did not fire
GPS Latitude Ref                : North
GPS Longitude Ref               : West
Circle Of Confusion             : 0.003 mm
Field Of View                   : 53.1 deg
Focal Length                    : 4.0 mm (35 mm equivalent: 36.0 mm)
GPS Position                    : 37 deg 41' 44.00" N, 97 deg 21' 21.99" W
Hyperfocal Distance             : 2.66 m
Light Value                     : 7.6
Lens ID                         : iPhone X back dual camera 4mm f/1.8

```
