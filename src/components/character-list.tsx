"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { charactersOptions } from "../characters";
import Link from "next/link";
import { useFilters } from "@/stores/filters";
import { CharacterCard } from "./character-card";
import { useDebounce } from "@uidotdev/usehooks";
import { usePreferences } from "@/stores/preferences";

export function CharacterList() {
  const { isStaff, isStudent, query } = useFilters();
  const { house, favorites } = usePreferences();
  const debouncedQuery = useDebounce(query, 300);
  const { data } = useSuspenseQuery({
    ...charactersOptions,
    select: (data) => {
      return data
        ?.filter((character) => {
          if (
            debouncedQuery !== "" &&
            !character.name.toLowerCase().includes(debouncedQuery.toLowerCase())
          ) {
            return false;
          }
          if (isStaff && isStudent)
            return character.hogwartsStaff || character.hogwartsStudent;
          if (isStaff) return character.hogwartsStaff;
          if (isStudent) return character.hogwartsStudent;
          return true;
        })
        .sort((a, b) => {
          // First sort by favorites
          const aFavorite = favorites.includes(a.id);
          const bFavorite = favorites.includes(b.id);
          if (aFavorite && !bFavorite) return -1;
          if (!aFavorite && bFavorite) return 1;

          // Then sort by preferred house
          const aPreferredHouse = a.house === house;
          const bPreferredHouse = b.house === house;
          if (aPreferredHouse && !bPreferredHouse) return -1;
          if (!aPreferredHouse && bPreferredHouse) return 1;

          // Finally sort alphabetically
          return a.name.localeCompare(b.name);
        });
    },
  });

  return (
    <div className="grid grid-cols-5 gap-y-10 mt-5 gap-x-5">
      {data?.map((character) => (
        <Link
          href={`/character/${character.id}`}
          key={`${character.id}`}
          className="block w-fit hover:underline"
        >
          <CharacterCard id={character.id} />
        </Link>
      ))}
    </div>
  );
}
