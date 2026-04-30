import { create } from 'zustand';

export const usePosStore = create((set) => ({
  footTop: 0,
  footHeight: 0,
  setFootTop: (value) => set({ footTop: value }),
  setFootHeight: (value) => set({ footHeight: value }),
}));
