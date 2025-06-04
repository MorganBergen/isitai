'use client';

import { ThemeContext } from '../ThemeContext';
import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './decodePage.module.css'; // Import the CSS module

export default function DecodePage() {
    const { theme } = useContext(ThemeContext);
    const imageSrc = theme === 'dark' ? '/IMG_0001.png' : '/IMG_0001.png';

    return (
        <div className="app-container">
            <header className="app-header" style={{ borderBottom: 'none' }}>
                {/* Header content can go here */}
            </header>

            <main className="app-main">
                {/* Apply the new CSS module classes to the section and columns */}
                <section className={styles.homepageSection}>
                    {/* CRUCIAL CHANGE: Image column FIRST in JSX for visual left placement */}
                    <div className={styles.rightColumn}> {/* This div contains your image */}
                        <Image
                            src={imageSrc}
                            alt="Digital image analysis graphic"
                            className="cube-graphic" // Keep existing global class
                            width={400}
                            height={400}
                            style={{ borderRadius: '10px' }}
                        />
                    </div>
                    {/* Text column SECOND in JSX for visual right placement */}
                    <div className={styles.leftColumnWrapper}>
                        <div className={styles.leftColumnContent}> {/* This div contains your actual metadata text */}
                            <h1><code>metadata</code></h1>
                            <p className="welcome-text">
                                <Link href="https://google.com"><code>exiftool version number  : 13.25</code></Link><br></br>
                                <code>file name                       : img_0001.png</code><br></br>
                                <code>directory                       : .</code><br></br>
                                <code>file size                       : 11 mb</code><br></br>
                                <code>file modification date/time     : 2025:05:10 21:14:04-05:00</code><br></br>
                                <code>file access date/time           : 2025:05:14 16:22:21-05:00</code><br></br>
                                <code>file inode change date/time     : 2025:05:14 15:23:36-05:00</code><br></br>
                                <code>file permissions                : -rw-r--r--</code><br></br>
                                <code>file type                       : png</code><br></br>
                                <code>file type extension             : png</code><br></br>
                                <code>mime type                       : image/png</code><br></br>
                                <code>image width                     : 4032</code><br></br>
                                <code>image height                    : 3024</code><br></br>
                                <code>bit depth                       : 8</code><br></br>
                                <code>color type                      : rgb</code><br></br>
                                <code>compression                     : deflate/inflate</code><br></br>
                                <code>filter                          : adaptive</code><br></br>
                                <code>interlace                       : noninterlaced</code><br></br>
                                <code>profile name                    : icc profile</code><br></br>
                                <code>profile cmm type                : apple computer inc.</code><br></br>
                                <code>profile version                 : 4.0.0</code><br></br>
                                <code>profile class                   : input device profile</code><br></br>
                                <code>color space data                : rgb</code><br></br>
                                <code>profile connection space        : xyz</code><br></br>
                                <code>profile date time               : 2016:01:01 00:00:00</code><br></br>
                                <code>profile file signature          : acsp</code><br></br>
                                <code>primary platform                : apple computer inc.</code><br></br>
                                <code>cmm flags                       : not embedded, independent</code><br></br>
                                <code>device manufacturer             : apple computer inc.</code><br></br>
                                <code>device model                    :</code><br></br>
                                <code>device attributes               : reflective, glossy, positive, color</code><br></br>
                                <code>rendering intent                : perceptual</code><br></br>
                                <code>connection space illuminant     : 0.9642 1 0.82491</code><br></br>
                                <code>profile creator                 : apple computer inc.</code><br></br>
                                <code>profile id                      : 09a72bcf796cf3543b61a77f1ae38acc</code><br></br>
                                <code>profile description             : apple wide color sharing profile</code><br></br>
                                <code>profile copyright               : copyright apple inc., 2016</code><br></br>
                                <code>media white point               : 0.9642 1 0.8251</code><br></br>
                                <code>a to b2                         : (binary data 29772 bytes, use -b option to extract)</code><br></br>
                                <code>chromatic adaptation            : 1.04781 0.02289 -0.05017 0.02953 0.99051 -0.01706 -0.00925 0.01506 0.75191</code><br></br>
                                <code>a to b0                         : (binary data 29772 bytes, use -b option to extract)</code><br></br>
                                <code>a to b1                         : (binary data 29772 bytes, use -b option to extract)</code><br></br>
                                <code>exif byte order                 : big-endian (motorola, mm)</code><br></br>
                                <code>make                            : apple</code><br></br>
                                <code>camera model name               : iphone x</code><br></br>
                                <code>orientation                     : horizontal (normal)</code><br></br>
                                <code>x resolution                    : 72</code><br></br>
                                <code>y resolution                    : 72</code><br></br>
                                <code>resolution unit                 : inches</code><br></br>
                                <code>software                        : 11.4</code><br></br>
                                <code>modify date                     : 2018:07:19 21:04:54</code><br></br>
                                <code>tile width                      : 512</code><br></br>
                                <code>tile length                     : 512</code><br></br>
                                <code>exposure time                   : 1/24</code><br></br>
                                <code>f number                        : 1.8</code><br></br>
                                <code>exposure program                : program ae</code><br></br>
                                <code>iso                             : 40</code><br></br>
                                <code>exif version                    : 0221</code><br></br>
                                <code>date/time original              : 2018:07:19 21:04:54</code><br></br>
                                <code>create date                     : 2018:07:19 21:04:54</code><br></br>
                                <code>offset time                     : -05:00</code><br></br>
                                <code>offset time original            : -05:00</code><br></br>
                                <code>offset time digitized           : -05:00</code><br></br>
                                <code>components configuration        : y, cb, cr, -</code><br></br>
                                <code>shutter speed value             : 1/24</code><br></br>
                                <code>aperture value                  : 1.8</code><br></br>
                                <code>brightness value                : 3.138169257</code><br></br>
                                <code>exposure compensation           : -0.173</code><br></br>
                                <code>metering mode                   : spot</code><br></br>
                                <code>focal length                    : 4.0 mm</code><br></br>
                                <code>subject area                    : 2820 2094 755 753</code><br></br>
                                <code>maker note version              : 9</code><br></br>
                                <code>run time flags                  : valid</code><br></br>
                                <code>run time value                  : 122533112040916</code><br></br>
                                <code>run time scale                  : 1000000000</code><br></br>
                                <code>run time epoch                  : 0</code><br></br>
                                <code>ae stable                       : yes</code><br></br>
                                <code>ae target                       : 182</code><br></br>
                                <code>ae average                      : 179</code><br></br>
                                <code>af stable                       : yes</code><br></br>
                                <code>acceleration vector             : -0.8960353732 -0.07537551967 0.4357159734</code><br></br>
                                <code>focus distance range            : 26.33 - 27.22 m</code><br></br>
                                <code>ois mode                        : 2</code><br></br>
                                <code>content identifier              : 1b0e4499-bb39-414b-a2af-447d4e8538b6</code><br></br>
                                <code>image capture type              : unknown (5)</code><br></br>
                                <code>live photo video index          : 8192</code><br></br>
                                <code>photos app feature flags        : 0</code><br></br>
                                <code>sub sec time                    : 181</code><br></br>
                                <code>sub sec time original           : 181</code><br></br>
                                <code>sub sec time digitized          : 181</code><br></br>
                                <code>flashpix version                : 0100</code><br></br>
                                <code>exif image width                : 4032</code><br></br>
                                <code>exif image height               : 3024</code><br></br>
                                <code>sensing method                  : one-chip color area</code><br></br>
                                <code>scene type                      : directly photographed</code><br></br>
                                <code>exposure mode                   : auto</code><br></br>
                                <code>white balance                   : auto</code><br></br>
                                <code>digital zoom ratio              : 1.292307692</code><br></br>
                                <code>focal length in 35mm format     : 36 mm</code><br></br>
                                <code>scene capture type              : standard</code><br></br>
                                <code>lens info                       : 4-6mm f/1.8-2.4</code><br></br>
                                <code>lens make                       : apple</code><br></br>
                                <code>lens model                      : iphone x back dual camera 4mm f/1.8</code><br></br>
                                <code>gps altitude ref                : above sea level</code><br></br>
                                <code>gps time stamp                  : 02:04:54</code><br></br>
                                <code>gps speed ref                   : km/h</code><br></br>
                                <code>gps speed                       : 0</code><br></br>
                                <code>gps img direction ref           : true north</code><br></br>
                                <code>gps img direction               : 262.6861314</code><br></br>
                                <code>gps dest bearing ref            : true north</code><br></br>
                                <code>gps dest bearing                : 262.6861314</code><br></br>
                                <code>gps date stamp                  : 2018:07:20</code><br></br>
                                <code>gps horizontal positioning error: 5 m</code><br></br>
                                <code>pixels per unit x               : 2835</code><br></br>
                                <code>pixels per unit y               : 2835</code><br></br>
                                <code>pixel units                     : meters</code><br></br>
                                <code>xmp toolkit                     : xmp core 6.0.0</code><br></br>
                                <code>color space                     : uncalibrated</code><br></br>
                                <code>flash pix version               : 0100</code><br></br>
                                <code>subsec time original            : 181</code><br></br>
                                <code>subsec time digitized           : 181</code><br></br>
                                <code>flash function                  : false</code><br></br>
                                <code>flash fired                     : false</code><br></br>
                                <code>flash return                    : no return detection</code><br></br>
                                <code>flash mode                      : auto</code><br></br>
                                <code>flash red eye mode              : false</code><br></br>
                                <code>focal len in 35mm film          : 36</code><br></br>
                                <code>subsec time                     : 181</code><br></br>
                                <code>creator tool                    : 11.4</code><br></br>
                                <code>photographic sensitivity        : 40</code><br></br>
                                <code>subject                         :</code><br></br>
                                <code>date created                    : 2018:07:19 21:04:54-05:00</code><br></br>
                                <code>run time since power up         : 1 days 10:02:13</code><br></br>
                                <code>aperture                        : 1.8</code><br></br>
                                <code>image size                      : 4032x3024</code><br></br>
                                <code>megapixels                      : 12.2</code><br></br>
                                <code>scale factor to 35 mm equivalent: 9.0</code><br></br>
                                <code>shutter speed                   : 1/24</code><br></br>
                                <code>create date                     : 2018:07:19 21:04:54.181-05:00</code><br></br>
                                <code>date/time original              : 2018:07:19 21:04:54.181-05:00</code><br></br>
                                <code>modify date                     : 2018:07:19 21:04:54.181-05:00</code><br></br>
                                <code>gps altitude                    : 398.3 m above sea level</code><br></br>
                                <code>gps date/time                   : 2018:07:20 02:04:54z</code><br></br>
                                <code>gps latitude                    : 37 deg 41&apos; 44.00&quot; n</code><br></br>
                                <code>gps longitude                   : 97 deg 21&apos; 21.99&quot; w</code><br></br>
                                <code>flash                           : auto, did not fire</code><br></br>
                                <code>gps latitude ref                : north</code><br></br>
                                <code>gps longitude ref               : west</code><br></br>
                                <code>circle of confusion             : 0.003 mm</code><br></br>
                                <code>field of view                   : 53.1 deg</code><br></br>
                                <code>focal length                    : 4.0 mm (35 mm equivalent: 36.0 mm)</code><br></br>
                                <code>gps position                    : 37 deg 41&apos; 44.00&quot; n, 97 deg 21&apos; 21.99&quot; w</code><br></br>
                                <code>hyperfocal distance             : 2.66 m</code><br></br>
                                <code>light value                     : 7.6</code><br></br>
                                <code>lens id                         : iphone x back dual camera 4mm f/1.8</code><br></br>
                            </p>
                            <p className="description-text">

                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="app-footer">
                <p>
                    &copy; {new Date().getFullYear()}{' '}
                    <a
                        href="https://www.linkedin.com/in/morganbergen"
                        style={{ textDecoration: 'underline' }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Morgan Bergen
                    </a>
                    . All rights reserved.
                </p>
            </footer>
        </div>
    )
}