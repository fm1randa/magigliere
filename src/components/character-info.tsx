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
    <div className="flex flex-col gap-4 items-center justify-center w-[1000px] h-full pr-60 pl-60 pt-20 pb-44 bg-[url(/images/papyrus.png)] bg-contain bg-no-repeat bg-center">
      {data?.image && (
        <Image
          src={data?.image}
          alt={data?.actor ?? "Unknown actor"}
          title={data?.actor}
          width={250}
          height={250}
          className="rounded-full w-[250px] h-[250px] object-cover"
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
            <li key={key} className="text-gray-700">
              <strong className="text-dark-blue">
                {getFormattedKey(key)}:
              </strong>{" "}
              {getParsedProperty(key as keyof Character)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
