import { CharacterInfo } from "@/components/character-info";
import { HydrationBoundary } from "@tanstack/react-query";

export default async function Character() {
  return (
    <HydrationBoundary>
      <CharacterInfo />
    </HydrationBoundary>
  );
}
