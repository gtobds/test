import { useCallback, useEffect, useRef, useState } from 'react';

export const useScrollAnchor = (margin = 0) => {
  const [activeId, setActiveId] = useState(null);
  const ancRef = useRef(new Map());
  const setAncRef = useCallback(
    (key) => (el) => {
      if (el) {
        ancRef.current.set(key, el);
      } else {
        ancRef.current.delete(key);
      }
    },
    [],
  );

  const scrollToAnc = useCallback(
    (key) => {
      const target = ancRef.current.get(key);

      if (target) {
        const targetPos = target.getBoundingClientRect().top;
        const offsetPos = targetPos + window.scrollY - margin;

        window.scrollTo({
          top: offsetPos,
          behavior: 'smooth',
          duration: 0.2,
        });
      }
    },
    [margin],
  );

  //스크롤감지
  useEffect(() => {
    const option = {
      root: null,
      margin: `-${margin}px 0px 0px`,
      threshold: 1,
    };
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Array.from(ancRef.current.entries()).find(([_, el]) => el === entry.target)?.[0];
          if (id) setActiveId(id);
        }
      });
    };
    const observer = new IntersectionObserver(callback, option);
    ancRef.current.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [margin, ancRef.current.size]);

  return { setAncRef, scrollToAnc, activeId };
};
