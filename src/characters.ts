import { queryOptions } from "@tanstack/react-query";

const URL = "https://hp-api.onrender.com/api";

const route = (path: TemplateStringsArray) => `${URL}${path}`;

interface Character {
  name: string;
  house: string;
  image: string;
}

export const charactersOptions = queryOptions({
  queryKey: ["characters"],
  queryFn: async (): Promise<Character[]> => {
    const response = await fetch(route`/characters`);
    return response.json();
  },
});
