/**
 * @file    layout.tsx
 * @brief   Root layout for the application.
 * @author  morgan bergen
 * @returns JSX.Element
 */

'use client';
import { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/next";
import './globals.css'; // Import global styles
import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono'; // GeistMono is available if needed for <code> or other elements

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

  const backgroundColor = theme === 'dark' ? 'var(--backgroundColor-gray-dark-17)' : 'var(--backgroundColor-white)'; //
  const color = theme === 'dark' ? 'var(--backgroundColor-white)' : 'var(--backgroundColor-gray-dark-17)'; //

  return (
    <html lang="en" data-theme={theme}>
      <body style={{
        backgroundColor,
        color,
        margin: 0,
        fontFamily: 'var(--font-geist-sans)', //
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
        {/* The children will be wrapped by the .app-container in page.tsx */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}