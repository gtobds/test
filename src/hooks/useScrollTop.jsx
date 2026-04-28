import { useState, useEffect } from 'react';

export const useScrollTop = (limit = 0) => {
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const fnSetScroll = () => {
      if (!document.documentElement.classList.contains('isLyr')) {
        if (window.scrollY > limit) {
          setIsTop(true);
        } else {
          setIsTop(false);
        }
      }
    };
    window.addEventListener('scroll', fnSetScroll);

    return () => {
      // 언마운트시해제
      window.removeEventListener('scroll', fnSetScroll);
    };
  }, [limit]);

  return isTop;
};
