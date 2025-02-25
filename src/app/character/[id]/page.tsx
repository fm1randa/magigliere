import { CharacterInfo } from "@/components/character-info";
import { HydrationBoundary } from "@tanstack/react-query";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default async function Character() {
  return (
    <>
      <div className="w-full">
        <Link
          href="/characters"
          className="flex items-center gap-2 hover:underline"
        >
          <FaArrowLeft />
          Back to Characters
        </Link>
      </div>
      <HydrationBoundary>
        <CharacterInfo />
      </HydrationBoundary>
    </>
  );
}
