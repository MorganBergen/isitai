'use client';

import { useContext } from 'react'; // Import useContext
import { ThemeContext } from './ThemeContext'; // Import your ThemeContext
import Image from 'next/image'; // Import Image from next/image
import Link from 'next/link'; // Import Link from next/link
import { useRouter } from 'next/navigation';

export default function Page() {

  const router = useRouter();

  const { theme } = useContext(ThemeContext); 

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
              In a world of digital edits and AI-generated content, important questions arise about an image&apos;s <Link href="https://en.wikipedia.org/wiki/Provenance">provenance</Link> and authenticity.</p> <p className="welcome-text-highlighted">where did this picture come from? <br></br>who or what created it?<br></br>is this genuine image or has it been tampered with?
            </p>
            <p className="description-text">
              <code>isitai</code> is a free web application that helps you answer these questions by parsing and extracting the binary metadata of digital images.  Simply attach a JPG, JPEG, PNG, HEIC, JP2, or TIFF file and <code>isitai</code> will instantly decode its embedded <code><Link href="https://c2pa.org/specifications/specifications/1.0/specs/_attachments/C2PA_Specification.pdf">C2PA</Link></code> and <code><Link href="https://www.cipa.jp/std/documents/download_e.html?cipa_dc-008-2024-e">EXIF</Link></code> metadata such as origin, modification date, gps location, camera info, and more.  Empower yourself to see if an image was manipulated, generated artificially, or was genuinely captured by a camera lens.
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
            <button className="get-started-button"
              onClick={() => router.push('/upload')}>
              Get Started
            </button>
          </div>
        </section>
      </main>
      <footer className="app-footer">
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <a
            href="https://www.linkedin.com/in/morganbergen"
            style={{ textDecoration: 'underline' }}
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security measure for target="_blank"
          >
            Morgan Bergen
          </a>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}

