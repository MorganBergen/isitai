/**
 * @file    layout.tsx
 * @brief   Root layout for the application.
 * @author  morgan bergen
 * @returns JSX.Element
 */


'use client';  
import { useEffect } from 'react';  
import { useState } from 'react';  
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  useEffect(() => {
    const getSystemTheme = () =>
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(getSystemTheme());
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = () => setTheme(getSystemTheme());
    mediaQuery.addEventListener('change', handleThemeChange);
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  const backgroundColor = theme === 'dark' ? '#0A0A0A' : '#FFFFFF';  
  const color = theme === 'dark' ? '#FFFFFF' : '#0A0A0A';

  return (
    <html lang="en">
      <body style={{
        backgroundColor,
        color,
        margin: 0,
        fontFamily: 'sans-serif',
        padding: 20,
        // transition: 'background 0.3s, color 0.3s'
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
              // transition: 'background 0.3s, color 0.3s',
            }}
          >{theme === 'dark' ? 'light' : 'dark'} mode </button>
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