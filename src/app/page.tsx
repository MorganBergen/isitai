'use client';

// Removed useEffect for windowSize as it's not used for the mockup layout
// If you need it for other purposes, you can add it back.

export default function Page() {
  // const [theme, setTheme] = useState<'light' | 'dark'>('light'); // Theme is now handled in RootLayout

  // useEffect(() => {
  //   // Simplified: assuming theme is 'light' or 'dark' from RootLayout via CSS
  //   const rootHtmlElement = document.documentElement;
  //   const currentTheme = rootHtmlElement.getAttribute('data-theme') as 'light' | 'dark' | null;
  //   if (currentTheme) {
  //       setTheme(currentTheme);
  //   }
  //   // If you need to observe changes to data-theme, you could use a MutationObserver
  // }, []);

  // The actual SVG for the cube graphic should be determined by the theme if different versions exist.
  // For now, assuming one graphic that works on both or you use CSS to style it.
  // Or, you could pass the theme from RootLayout down if absolutely necessary for image src.
  // However, CSS or conditional rendering based on a data-theme attribute is cleaner.

  return (
    <div className="app-container">
      <header className="app-header" style={{ borderBottom: 'none' }}>
        {/* Header content can go here if needed for other pages or a global logo */}
        {/* For this mockup, the main branding "isitai.net" is in the content below */}
      </header>

      <main className="app-main">
        <section className="homepage-section">
          <div className="homepage-left-column">
            <h1>isitai.net</h1>
            <p className="welcome-text">
              Welcome to is it ai, your tool for uncovering the story behind digital images.
            </p>
            <p className="description-text">
              Simply upload any supported image file (PNG, JPEG, HEIC) to instantly reveal its
              embedded metadata. Explore details about the image&apos;s origin, creation, and
              any modifications, helping you understand its authenticity and provenance.
              By examining this data, including EXIF and C2PA information, you can gain
              insights into whether an image has been manipulated or if its source is
              verifiable, aiding in the detection of AI-generated content.
            </p>
          </div>
          <div className="homepage-right-column">
            {/*
              Replace '/cube-graphic.svg' with the actual path to your cube graphic.
              If you have different graphics for light/dark themes, you might need
              to conditionally render them here or use CSS to switch background-image.
              For simplicity, one placeholder is used.
            */}
            <img
              src="/cube-graphic.svg" // Placeholder - replace with your actual image path e.g., /images/your-cube-graphic.svg
              alt="Digital image analysis graphic"
              className="cube-graphic"
            />
            <a href="/" className="get-started-button">
              Get Started
            </a>
          </div>
        </section>

        {/*
          The dimension-display div is commented out as it's not in the mockup.
          <div className="dimension-display">
            <p>upload here</p>
          </div>
        */}
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Morgan Bergen. All rights reserved.</p>
      </footer>
    </div>
  );
}