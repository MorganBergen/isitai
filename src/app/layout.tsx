/**
 * @file    layout.tsx
 * @brief   Root layout for the application.
 * @author  morgan bergen
 * @returns JSX.Element
 */


'use client';  //  render this layout on the client side
import { useEffect } from 'react';  //  useEffect is a react hook that allows you to perform side effects in function components
import { useState } from 'react';  //  useState is a react hook that allows you to add state to function components
import { Analytics } from "@vercel/analytics/next";  //  analytics import from vercel view on dashboard at vercel.com


//  react component that acts globally, parameter is children, it is whatever is rendered inside this layout such as the Page component from page.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {

  //  detects whether the user's system is in dark mode or light mode
  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  //  theme stores the current theme, setTheme is a function that allows you to update the theme
  //  useState is a react hook that allows you to add state to function components
  //  in this instance the theme is set to light by default useState 
  //  is a react hook that allows you to add state to function components

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  //  isMobile stores whether the user is on a mobile device or not
  const [isMobile, setIsMobile] = useState(false);

  //  on the first rendering, useEffect is called to invoke setTheme and setIsMobile
  useEffect(() => {
    //  getSystemTheme function is called to check if the user is in dark mode or light mode
    setTheme(getSystemTheme());
    //  setIsMobile function checks to see whether the viewport is under 768px
    setIsMobile(window.innerWidth < 768);

    //  handleResize function is called to check if the viewport is under 768px
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    //  event listener that listens for changes in the viewport size
    window.addEventListener('resize', handleResize);

    //  cleanup function that removes the event listener when the component is unmounted
    //  this is important to prevent memory leaks and performance issues
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundColor = theme === 'dark' ? '#0A0A0A' : '#FFFFFF';  //  set the background color based on the theme
  const color = theme === 'dark' ? '#FFFFFF' : '#0A0A0A';  //  set the text color based on the theme

  return (
    <html lang="en">
      <body style={{
        backgroundColor,
        color,
        margin: 0,
        fontFamily: 'sans-serif',
        padding: isMobile ? 10 : 40,
        transition: 'background 0.3s, color 0.3s'
      }}>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            style={{
              position: 'fixed',
              top: 10,
              right: 10,
              zIndex: 100,
              padding: 8,
              borderRadius: 4,
              border: 'none',
              background: theme === 'dark' ? '#333' : '#ddd',
              color: theme === 'dark' ? '#fff' : '#000',
              cursor: 'pointer',
              transition: 'background 0.3s, color 0.3s',
            }}
          >toggle {theme === 'dark' ? 'light' : 'dark'} mode </button>
          {children}
          <Analytics />
      </body>
    </html>
  )
}







// FFFFFF
// F5F5F5
// EBEBEB
// E0E0E0
// D6D6D6
// CCCCCC
// C2C2C2
// B8B8B8
// ADADAD
// A3A3A3
// 999999
// 8F8F8F
// 858585
// 7A7A7A
// 707070
// 666666
// 5C5C5C
// 525252
// 474747
// 3D3D3D
// 333333
// 292929
// 1F1F1F
// 141414
// 0A0A0A