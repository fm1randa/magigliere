import { queryOptions } from "@tanstack/react-query";

const URL = "https://hp-api.onrender.com/api";

const route = (path: TemplateStringsArray) => `${URL}${path}`;

interface Wand {
  wood: string;
  core: string;
  length: number;
}

interface Character {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

export const charactersOptions = queryOptions({
  queryKey: ["characters"],
  queryFn: async (): Promise<Character[]> => {
    const response = await fetch(route`/characters`);
    return response.json();
  },
});
