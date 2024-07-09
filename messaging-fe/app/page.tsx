import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Messaging App</h1>
      <Image
        src="/messaging.svg"
        alt="Messaging App"
        width={400}
        height={400}
      />
    </main>
  );
}
