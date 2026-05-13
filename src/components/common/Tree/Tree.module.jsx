import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import classname from 'classnames/bind';
import scss from './Tree.module.scss';
const cx = classname.bind(scss);

const Tree = ({ treeData, classNm, speed }) => {
  const [activeId, setActiveId] = useState(null);
  const treeRef = useRef(null);

  //데이터가 없으면 렌더링 방지
  if (!treeData || treeData.length === 0) return null;

  useOutsideClick(treeRef, () => setActiveId(null));

  return (
    <>
      <div className={cx('tree-menu', classNm)} ref={treeRef}>
        <ul>{treeData && treeData.map((item) => <TreeItem key={item.id} item={item} activeId={activeId} onAvtiveId={setActiveId} speed={speed} />)}</ul>
      </div>
    </>
  );
};
export default Tree;

const TreeItem = ({ item, onAvtiveId, activeId, speed }) => {
  const [expand, setExpand] = useState(false);
  const hasSub = item.sub && item.sub.length > 0;
  const isActive = activeId === item.id;
  const itemRef = useRef(null);

  useOutsideClick(itemRef, () => setExpand(false));

  const funcToggle = (e) => {
    e.stopPropagation();
    if (hasSub) setExpand(!expand);
    onAvtiveId(item.id);
  };

  return (
    <>
      <li ref={itemRef}>
        <div className={cx('tree-bt')}>
          <button type='button' className={cx(hasSub && expand && 'exp', hasSub && 'arrow')} aria-selected={isActive ? 'true' : 'false'} onClick={funcToggle}>
            <em>{item.title}</em>
          </button>
        </div>
        <AnimatePresence>
          {hasSub && expand && (
            <motion.div
              className={cx('tree-bx')}
              initial={{ height: 0, display: 'block' }}
              animate={{ height: 'auto' }}
              exit={{ height: 0, display: 'none' }}
              transition={{ duration: speed, ease: 'easeInOut', delay: 0.05 }}>
              <ul>
                {item.sub.map((sub) => (
                  <TreeItem key={sub.id} item={sub} activeId={activeId} onAvtiveId={onAvtiveId} speed={speed} />
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    </>
  );
};
