"use client";
import { CharacterList } from "@/components/character-list";
import { charactersOptions } from "@/characters";
import { getQueryClient } from "@/get-query-client";
import { HydrationBoundary } from "@tanstack/react-query";
import { useFilters } from "@/stores/filters";

export default function Characters() {
  const queryClient = getQueryClient();

  const { isStaff, isStudent, toggleIsStaff, toggleIsStudent } = useFilters();

  void queryClient.prefetchQuery(charactersOptions);

  return (
    <>
      <div className="flex flex-row gap-8 items-center">
        <h1 className="text-xl font-bold font-harry-beast-display text-golden-ochre">
          Characters
        </h1>
        <div className="flex gap-2">
          <label className="flex gap-1">
            <input
              type="checkbox"
              checked={isStudent}
              onChange={toggleIsStudent}
            />
            Students
          </label>

          <label className="flex gap-1">
            <input type="checkbox" checked={isStaff} onChange={toggleIsStaff} />
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
