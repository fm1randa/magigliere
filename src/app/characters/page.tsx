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
      <div className="flex flex-row gap-8 items-center">
        <h1 className="text-xl font-bold">Characters</h1>
        <div className="flex gap-2">
          <label className="flex gap-1">
            <input type="checkbox" />
            Students
          </label>

          <label className="flex gap-1">
            <input type="checkbox" />
            Staff
          </label>
        </div>
      </div>
      <HydrationBoundary>
        <CharacterList />
      </HydrationBoundary>
    </>
  );
}
