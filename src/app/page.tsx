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
              In a world of digital edits and AI-generated content, understanding an image&apos;s history is key.
              Simply upload a JPG, JPEG, TIFF, PNG, JP2, HEIC or XCF file, and <code>isitai</code> instantly decodes its embedded <code><Link href="https://c2pa.org/specifications/specifications/1.0/specs/_attachments/C2PA_Specification.pdf">EXIF</Link></code> and <code><Link href="https://www.cipa.jp/e/std/std-sec.html#">C2PA</Link></code> metadata. Explore its origin, creation,
              and modifications to grasp its authenticity and <Link href="https://en.wikipedia.org/wiki/Provenance">provenance</Link>. Empower yourself to see if an image was manipulated, generated artificially, or was genuinely captured by a camera lens.
              <br />
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
            <Link href="/upload" className="get-started-button">
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