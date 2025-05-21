'use client';


import { Button } from 'nextra/components';
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
      <h1 style={{
        fontSize: '32px',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        textTransform: 'lowercase',
        letterSpacing: '1px',
        lineHeight: '1.5',
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        textShadow: 'none',
      }}>isitai.net</h1>
      <p style={{
        fontSize: '16px',
        fontWeight: 'normal',
        textAlign: 'left',
        marginBottom: '20px',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: 'none',
        textDecoration: 'none',
        // textTransform: 'lowercase',
        letterSpacing: '0.25px',
        lineHeight: '1.5',
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        textShadow: 'none',

      }}>
      Welcome to isitai, your tool for uncovering the story behind digital images.  Simply upload any supported image file (PNG, JPEG, HEIC) to instantly reveal its embedded metadata.  Explore details about the image&apos;s origin, creation, and any modifications, helping you understand its authenticity and provenance. By examining this data, from EXIF and C2PA, you can gain insights into whether an image has been manipulated (edited), has been generated artificially, or was captured by a camera lens. 
      </p>
    
    </div>
  )
}

// w(<code style={{color: 'red'}}>{windowSize.width}</code>)px X h(<code style={{color: 'red'}}>{windowSize.height}</code>)px