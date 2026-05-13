import { create } from 'zustand';
import axios from 'axios';

export const useCateStore = create((set, get) => ({
  cateList: [],
  loading: false,
  error: null,

  fetchCate: async () => {
    // 이미 데이터가 있다면 다시 호출하지 않음 (캐싱 효과)
    if (get().cateList.length > 0) return;

    set({ loading: true });
    try {
      const response = await axios.get(new URL('/data/cateData.json', import.meta.url).href);
      set({ cateList: response.data.cateData, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  //카테고리 문자열 아이디로
  getCate: (id) => {
    return get().cateList.find((lst) => lst.id === id);
  },
}));
