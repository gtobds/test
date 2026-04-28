import { useEffect } from 'react';

export const useOutsideClick = (ref, func) => {
  // ref객체, 실행할 함수를 받아옴
  useEffect(() => {
    const setOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        func();
      }
    };

    document.addEventListener('mousedown', setOutside);
    return () => document.removeEventListener('mousedown', setOutside);
  }, [ref, func]);
};
