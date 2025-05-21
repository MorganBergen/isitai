'use client';

import { useEffect, useState } from 'react';

export default function Page() {

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, []);


  return (
    <div>
      <p><code>Welcome to is it ai, your tool for uncovering the story behind digital images.  Simply upload any supported image file (PNG, JPEG, HEIC) to instantly reveal its embedded metadata.  Explore details about the image&apos;s origin, creation, and any modifications, helping you understand its authenticity and provenance. By examining this data, from EXIF and C2PA, you can gain insights into whether an image has been manipulated (edited), has been generated artificially, or was captured by a camera lens.</code></p>

      
      <p><code>window height: <code style={{color: 'red'}}>{windowSize.height}</code></code></p>
      <p><code>Window width: <code style={{color: 'red'}}>{windowSize.width}</code></code></p>
    </div>
  )
}