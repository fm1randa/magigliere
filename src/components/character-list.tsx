"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { charactersOptions } from "../characters";
import Link from "next/link";
import { useFilters } from "@/stores/filters";

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
    <ul>
      {data?.map((character, index) => (
        <Link
          href={`/character/${character.id}`}
          key={`${character.name}-${index}`}
          className="block w-fit hover:underline"
        >
          <li>{character.name}</li>
        </Link>
      ))}
    </ul>
  );
}
