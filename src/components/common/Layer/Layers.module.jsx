import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLayerStore } from '@/stores/useLayerStore.jsx';
import { useScrollLock } from '@/hooks/useScrollLock.jsx';
import classname from 'classnames/bind';
import css from '@/components/common/Layer/Layers.module.scss';

const cx = classname.bind(css);

export function Layers() {
  const { layers, closeLayer } = useLayerStore();

  useScrollLock(layers.length > 0);

  if (typeof window === 'undefined') return null;

  return createPortal(
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
  );
}
