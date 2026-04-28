import { useEffect } from 'react';

export const useScrollLock = (isOpen) => {
  useEffect(() => {
    if (isOpen) {
      const winTop = window.pageYOffset || document.documentElement.scrollTop;
      document.documentElement.setAttribute('data-scroll', winTop);
      document.documentElement.classList.add('isLyr');
      document.body.scrollTo(0, winTop);
    } else {
      const scrTop = document.documentElement.getAttribute('data-scroll');
      document.documentElement.classList.remove('isLyr');
      window.scrollTo(0, parseInt(scrTop));
      document.documentElement.setAttribute('data-scroll', 0);
    }
    return () => {
      document.documentElement.classList.remove('isLyr');
    };
  }, [isOpen]);
};
