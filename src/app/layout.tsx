/**
 * @file          layout.tsx
 * @description   Root layout for the application.
 * @author        morgan bergen
 * @returns       JSX.Element
 * @version       1.0
 **/

/**
 *  @description "use client" directive to enable client-side rendering for this 
 *  component.  this layout component wraps the entire application, providing 
 *  theme context and application.
 *
 *  client-side rendering is necessary here to manage the theme state and respond to
 *  system theme changes in real time.  
 *
 *  client-side rendering versus server-side rendering is a key consideration in Next
 *
 *  server-side rendering (SSR) is when the server generates the html for a page on 
 *  each request, while client-side rendering (csr) is when the server sends
 *  a minimal html shell and the client (browser) fetches data and renders the page
 *  
 *  opts this module into running to server components, but this file uses react that requires a client runtime.  it's imilar to browser environment with dom access
 **/
"use client";

// import necessary hooks and components
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeContext, Theme } from "./ThemeContext";
import { AppProvider } from "./AppContext"; // Import the new AppProvider

//  global import for styles 
import "./globals.css";

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
            {/* this is considered a comment*/}
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
