import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-bold">Home</h1>
      <p className="mb-2">Wingardium Hello World-sa! ⚡</p>
      <Link href="/characters" className="hover:underline">
        <button className="bg-deep-burgundy text-white p-1 rounded-md">
          Explore characters
        </button>
      </Link>
    </>
  );
}
