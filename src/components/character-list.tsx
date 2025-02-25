"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { charactersOptions } from "../characters";

export function CharacterList() {
  const { data } = useSuspenseQuery(charactersOptions);

  return (
    <ul>
      {data?.map((character, index) => (
        <li key={`${character.name}-${index}`}>{character.name}</li>
      ))}
    </ul>
  );
}
