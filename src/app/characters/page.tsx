"use client";
import { CharacterList } from "@/components/character-list";
import { charactersOptions } from "@/characters";
import { getQueryClient } from "@/get-query-client";
import { HydrationBoundary } from "@tanstack/react-query";

export default function Characters() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(charactersOptions);

  return (
    <>
      <h1>Characters</h1>
      <HydrationBoundary>
        <CharacterList />
      </HydrationBoundary>
    </>
  );
}
