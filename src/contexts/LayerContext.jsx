import { createContext, useContext, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { useScrollLock } from '@/hooks/useScrollLock.jsx';

import classname from 'classnames/bind';
import scss from '@/components/common/Layer/Layer.module.scss';
const cx = classname.bind(scss);

const LayerContext = createContext(null);

export function LayerProvider({ children }) {
  const [layers, setLayers] = useState([]);

  useScrollLock(layers.length > 0);

  const openLayer = useCallback((content, options = { replace: false }) => {
    setLayers((prev) => {
      if (options.replace && prev.length > 0) {
        // 마지막 레이어를 빼고 새 레이어를 넣음 (Change)
        return [...prev.slice(0, -1), content];
      }
      // 새 레이어를 추가 (Over)
      return [...prev, content];
    });
  }, []);

  const closeLayer = useCallback(() => {
    setLayers((prev) => prev.slice(0, -1));
  }, []);

  const closeAllLayers = useCallback(() => {
    setLayers([]);
  }, []);

  return (
    <LayerContext.Provider value={{ openLayer, closeLayer, closeAllLayers }}>
      {children}
      {createPortal(
        <AnimatePresence mode='sync'>
          {layers.map((content, index) => (
            <motion.div
              key={`layer-${index}`}
              className={cx('layer-overlay')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
              onClick={closeLayer}
              style={{ zIndex: 1000 + index }}>
              <motion.div
                className={cx('layer-content')}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}>
                {content}
                <button className={cx('layer-close')} onClick={closeLayer}>
                  X
                </button>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>,
        document.getElementById('layer-root'),
      )}
    </LayerContext.Provider>
  );
}

export const useLayer = () => useContext(LayerContext);
