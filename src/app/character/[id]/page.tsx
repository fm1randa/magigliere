import { CharacterInfo } from "@/components/character-info";
import { FavoriteButton } from "@/components/favorite-button";
import { HydrationBoundary } from "@tanstack/react-query";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default async function Character() {
  return (
    <>
      <div className="w-full flex">
        <Link
          href="/characters"
          className="flex items-center gap-2 hover:underline"
        >
          <FaArrowLeft />
          Back to Characters
        </Link>
        <FavoriteButton />
      </div>
      <HydrationBoundary>
        <CharacterInfo />
      </HydrationBoundary>
    </>
  );
}
