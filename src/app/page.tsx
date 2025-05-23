'use client';

import { useContext } from 'react'; // Import useContext
import { ThemeContext } from './ThemeContext'; // Import your ThemeContext
import Image from 'next/image'; // Import Image from next/image
import Link from 'next/link'; // Import Link from next/link

export default function Page() {
  const { theme } = useContext(ThemeContext); // Consume the theme from context

  const imageSrc = theme === 'dark' ? '/FFFFFF-logo-2pt.svg' : '/0A0A0A-logo-2pt.svg';

  return (
    <div className="app-container">
      <header className="app-header" style={{ borderBottom: 'none' }}>
        {/* Header content can go here */}
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
            <Image
              src={imageSrc}
              alt="Digital image analysis graphic"
              className="cube-graphic"
              width={400}
              height={400}
            />
            <Link href="/" className="get-started-button">
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Morgan Bergen. All rights reserved.</p>
      </footer>
    </div>
  );
}