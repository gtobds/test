import { create } from 'zustand';

export const useLayerStore = create((set) => ({
  layers: [],

  openLayer: (content, options = { replace: false }) => {
    set((state) => {
      if (options.replace && state.layers.length > 0) {
        return { layers: [...state.layers.slice(0, -1), content] };
      }
      return { layers: [...state.layers, content] };
    });
  },
  closeLayer: () => {
    set((state) => ({
      layers: state.layers.slice(0, -1),
    }));
  },
  closeAllLayers: () => {
    set({ layers: [] });
  },
}));
