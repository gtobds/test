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
    window.addEventListener('resize', fnSetScroll);
    return () => {
      window.removeEventListener('scroll', fnSetScroll);
      window.removeEventListener('resize', fnSetScroll);
    };
  }, [limit]);

  return isTop;
};
