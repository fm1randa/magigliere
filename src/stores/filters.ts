import { create } from "zustand";

interface FiltersStore {
  isStaff: boolean;
  isStudent: boolean;
  toggleIsStaff: () => void;
  toggleIsStudent: () => void;
}

export const useFilters = create<FiltersStore>()((set) => ({
  isStaff: false,
  isStudent: false,
  toggleIsStaff: () => set((state) => ({ isStaff: !state.isStaff })),
  toggleIsStudent: () => set((state) => ({ isStudent: !state.isStudent })),
}));
