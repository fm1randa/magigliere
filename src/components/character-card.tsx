"use client";

import { charactersOptions } from "@/characters";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import UnknownChar from "../../public/images/unknown-char.jpeg";

export function CharacterCard({ id }: { id: string }) {
  const { data } = useSuspenseQuery({
    ...charactersOptions,
    select: (data) => data?.find((character) => character.id === id),
  });

  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <Image
        alt={`${data.actor === "" ? "Unknown actor" : data.actor} as ${data.name}`}
        src={data.image === "" ? UnknownChar : data.image}
        width={150}
        height={150}
        className="h-[150] object-cover rounded-md"
        title={`${data.actor === "" ? "Unknown actor" : data.actor} as ${data.name}`}
      />
      <h2 className="text-sm font-bold text-golden-ochre">{data.name}</h2>
    </div>
  );
}
