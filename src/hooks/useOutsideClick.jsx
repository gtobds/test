import { useEffect } from 'react';

export const useOutsideClick = (refs, func) => {
  useEffect(() => {
    const setOutside = (e) => {
      //단일ref도 배열로
      const refArray = Array.isArray(refs) ? refs : [refs];
      const isOut = refArray.every((ref) => ref.current && !ref.current.contains(e.target));
      if (isOut) {
        func();
      }
    };
    document.addEventListener('mousedown', setOutside);
    return () => document.removeEventListener('mousedown', setOutside);
  }, [refs, func]);
};
