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
import { ThemeContext, Theme } from './ThemeContext'; // Import the context and Theme type

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const getSystemTheme = (): Theme =>
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    setTheme(getSystemTheme());

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleThemeChange);

    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  

  return (
    <html lang="en" data-theme={theme}>
      {/* Ensure the style prop is REMOVED from the body tag below */}
      <body>
        <ThemeContext.Provider value={{ theme }}>
          {children}
        </ThemeContext.Provider>
        <Analytics />
      </body>
    </html>
  );
}