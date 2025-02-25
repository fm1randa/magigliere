"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { charactersOptions } from "../characters";
import Link from "next/link";

export function CharacterList() {
  const { data } = useSuspenseQuery(charactersOptions);

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
