import Link from 'next/link';

export default function ComingSoonPage() {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <p className="coming-soon-text">coming soon 2026</p>
        <Link href="/" className="coming-soon-back-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
