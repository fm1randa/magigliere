import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full grow flex flex-col items-center justify-center gap-5">
        <p className="mb-2 text-7xl text-center">
          Wingardium Hello World-sa! ⚡
        </p>
        <Link href="/characters" className="hover:underline">
          <button className="bg-deep-burgundy text-white p-1 rounded-md w-[200px] h-[50px]">
            Explore HP characters
          </button>
        </Link>
      </div>
    </>
  );
}
