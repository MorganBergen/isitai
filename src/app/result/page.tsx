import Link from 'next/link';

export default function ResultPage({ searchParams }: any) {
  const rawId = (searchParams as any).session_id;
  const sessionId = Array.isArray(rawId) ? rawId.join(', ') : rawId;

  return (
    <div className="app-container">
      <main className="app-main" style={{ padding: '2rem', textAlign: 'center' }}>
        {sessionId ? (
          <>
            <h1>Thank you for your purchase!</h1>
            <p>Your session id is {sessionId}</p>
          </>
        ) : (
          <h1>Subscription canceled.</h1>
        )}
        <Link href="/upload" style={{ display: 'block', marginTop: '2rem' }}>
          Back to upload
        </Link>
      </main>
    </div>
  );
}
