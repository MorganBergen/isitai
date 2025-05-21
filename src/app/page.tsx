import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1><code>isitai.net</code></h1>
      <br></br>
      <Image src="/logo.svg" alt="logo" width={300} height={300} priority />
      <br></br><h1><code>release date june 22 2025</code></h1><br></br>
      <h1><code>update</code></h1>
    </div>
  );
}