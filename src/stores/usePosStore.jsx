import { create } from 'zustand';

export const usePosStore = create((set) => ({
  footTop: 0,
  footHeight: 0,
  setFootTop: (value) => set((state) => (state.footTop !== value ? { footTop: value } : state)),
  setFootHeight: (value) => set((state) => (state.footHeight !== value ? { footHeight: value } : state)),
}));
