import { create } from "zustand";

interface FiltersStore {
  query: string;
  isStaff: boolean;
  isStudent: boolean;
  toggleIsStaff: () => void;
  toggleIsStudent: () => void;
  setQuery: (query: string) => void;
}

export const useFilters = create<FiltersStore>()((set) => ({
  isStaff: false,
  isStudent: false,
  query: "",
  setQuery: (query) => set({ query }),
  toggleIsStaff: () => set((state) => ({ isStaff: !state.isStaff })),
  toggleIsStudent: () => set((state) => ({ isStudent: !state.isStudent })),
}));
