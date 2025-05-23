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
            <h1><code>isitai.net</code></h1>
            <p className="welcome-text">
              Welcome, this tool is intended for uncovering the story behind digital images.
            </p>
            <p className="description-text">
              Simply upload any supported image file (PNG, JPEG, HEIC) to instantly reveal its embedded metadata.  By exploring the details about the image&apos;s origin, creation, modifications, etc. you will be informed by the metadata of the image, helping you understand its authenticity and provenance. By examining this data, from <code>EXIF</code> and <code>C2PA</code>, you can gain insights into whether an image has been manipulated (edited), has been generated artificially, or was captured by a camera lens.
            </p>
            <h1><code>isitai.net</code></h1>
            <p className="welcome-text">
              Unveil the True Story Behind Your Images.
            </p>
            <p className="description-text">
              In a world of digital edits and AI-generated content, understanding an image&apos;s history is key.
              Simply upload a PNG, JPEG, or HEIC file, and isitai.net instantly decodes its
              embedded <code>EXIF</code> and <code>C2PA</code> metadata. Explore its origin, creation,
              and modifications to grasp its authenticity and provenance. Empower yourself to see if an
              image is edited, AI-made, or a genuine camera capture.
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