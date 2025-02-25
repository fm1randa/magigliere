"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { charactersOptions } from "../characters";
import Link from "next/link";
import { useFilters } from "@/stores/filters";
import { CharacterCard } from "./character-card";

export function CharacterList() {
  const { isStaff, isStudent } = useFilters();
  const { data } = useSuspenseQuery({
    ...charactersOptions,
    select: (data) => {
      return data?.filter((character) => {
        if (isStaff && isStudent)
          return character.hogwartsStaff || character.hogwartsStudent;
        if (isStaff) return character.hogwartsStaff;
        if (isStudent) return character.hogwartsStudent;
        return true;
      });
    },
  });

  return (
    <div className="grid grid-cols-5 gap-y-10 mt-5">
      {data?.map((character, index) => (
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
