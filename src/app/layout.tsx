/**
 * @file    layout.tsx
 * @brief   Root layout for the application.
 * @author  morgan bergen
 * @returns JSX.Element
 */

"use client";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeContext, Theme } from "./ThemeContext";
import { AppProvider } from "./AppContext"; // Import the new AppProvider

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const getSystemTheme = (): Theme =>
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    setTheme(getSystemTheme());

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  return (
    <html lang="en" data-theme={theme}>
      <body>
        <ThemeContext.Provider value={{ theme }}>
          <AppProvider>
            {" "}
            {/* Wrap children with AppProvider */}
            {children}
          </AppProvider>
        </ThemeContext.Provider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
