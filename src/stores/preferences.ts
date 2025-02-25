import { create } from "zustand";

interface PreferencesStore {
  house: string | null;
  setHouse: (house: string) => void;
  favorites: string[];
  toggleFavorite: (characterId: string) => void;
  isFavorite: (characterId: string) => boolean;
}

export const usePreferences = create<PreferencesStore>()((set, store) => ({
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
}));
