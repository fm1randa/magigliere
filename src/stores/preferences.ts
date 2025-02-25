import { create } from "zustand";

interface PreferencesStore {
  house: string | null;
  setHouse: (house: string) => void;
}

export const usePreferences = create<PreferencesStore>()((set) => ({
  house: null,
  setHouse: (house: string) => set({ house }),
}));
