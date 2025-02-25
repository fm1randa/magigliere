"use client";

import { Character, charactersOptions, Wand } from "@/characters";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ValueOf } from "next/dist/shared/lib/constants";
import Image from "next/image";
import { useParams } from "next/navigation";

function splitWords(str: string) {
  return str.split(" ");
}

function capitalize(str?: string) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

function capitalizeWords(str: string) {
  return splitWords(str).map(capitalize).join(" ");
}

function splitByUppercase(str: string) {
  return str.replace(/([A-Z])/g, " $1").trim();
}

function splitByUnderscore(str: string) {
  return str.replace(/_/g, " ");
}

export function CharacterInfo() {
  const { id } = useParams<{ id: string }>();
  const { data } = useSuspenseQuery({
    ...charactersOptions,
    select: (data) => data.find((character) => character.id === id),
  });

  const getWandDescription = (wand?: Character["wand"]) => {
    if (!wand || !wand.core || !wand.wood || !wand.length) {
      return "Unknown";
    }

    return `${capitalizeWords(wand.core)} core, ${wand.length}" long, made of ${wand.wood} wood`;
  };

  const isWand = (value: ValueOf<Character>): value is Wand => {
    return typeof value === "object" && "core" in value;
  };

  const getParsedProperty = (property: keyof Character) => {
    const value = data?.[property];
    if (value === undefined || value === null || value === "") {
      return "Unknown";
    }

    if (isWand(value)) {
      return getWandDescription(value as Character["wand"]);
    }

    if (Array.isArray(value)) {
      return value.join(", ") || "None";
    }

    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }

    if (typeof value === "string") {
      return capitalizeWords(value);
    }

    return value;
  };

  const getFormattedKey = (key: string) => {
    return capitalizeWords(splitByUppercase(splitByUnderscore(key)));
  };

  return (
    <>
      {data?.image && (
        <Image
          src={data?.image}
          alt={data?.actor ?? "Unknown actor"}
          title={data?.actor}
          width={150}
          height={150}
          className="rounded-full mr-10 w-[150px] h-[150px]"
        />
      )}
      <h1 className="text-xl font-bold font-harry-beast-display text-golden-ochre">
        {data?.name}
      </h1>
      <ul>
        {Object.keys(data || {}).map((key) => {
          if (
            key === "id" ||
            key === "image" ||
            key === "actor" ||
            key === "name"
          ) {
            return null;
          }
          return (
            <li key={key}>
              <strong className="text-slate-gray">
                {getFormattedKey(key)}:
              </strong>{" "}
              {getParsedProperty(key as keyof Character)}
            </li>
          );
        })}
      </ul>
    </>
  );
}
