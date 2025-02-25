import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PreferencesStore {
  house: string | null;
  setHouse: (house: string) => void;
  favorites: string[];
  toggleFavorite: (characterId: string) => void;
  isFavorite: (characterId: string) => boolean;
}

export const usePreferences = create<PreferencesStore>()(
  persist(
    (set, store) => ({
      house: null,
      setHouse: (house: string) => set({ house }),
      favorites: [],
      toggleFavorite: (characterId: string) =>
        set((state) => ({
          favorites: state.favorites.includes(characterId)
            ? state.favorites.filter((id) => id !== characterId)
            : [...state.favorites, characterId],
        })),
      isFavorite: (characterId: string) => {
        return store().favorites.includes(characterId);
      },
    }),
    {
      name: "preferences",
    }
  )
);
