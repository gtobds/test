import { useState, useEffect } from 'react';
import classname from 'classnames/bind';
import scss from './Tabs.module.scss';
const cx = classname.bind(scss);

const Tabs = ({ id, tabs, classNm, classBt, start = 0, panelPrefix, onTabChange }) => {
  const [activeIdx, setActiveIdx] = useState(start);

  useEffect(() => {
    if (start !== undefined) {
      setActiveIdx(start);
    }
  }, [start]);

  const handleTabClick = (idx) => {
    setActiveIdx(idx);
    //부모에게 전달 - 함수가 존재할 때만 실행
    if (onTabChange) {
      onTabChange(idx);
    }
  };

  return (
    <>
      <div className={cx(classNm)} id={id}>
        <div className={cx('tablist')} role='tablist'>
          {tabs.map((tab, idx) => (
            <button
              key={`${id}-tab-${idx}`}
              type='button'
              className={cx(classBt, { on: activeIdx === idx })}
              id={`${id}_${idx}`}
              role='tab'
              aria-controls={`${panelPrefix}${idx}`}
              aria-selected={activeIdx === idx}
              onClick={() => handleTabClick(idx)}>
              <em>{tab.label}</em>
            </button>
          ))}
        </div>
      </div>
      {/* {tabs.map((tab, idx) => (
        <div key={`${id}-panel-${idx}`} id={`${panelPrefix}${idx}`} role='tabpanel' aria-labelledby={`${id}_${idx}`} hidden={activeIdx !== idx} className={cx('panel', { active: activeIdx === idx })}>
          {tab.content}
        </div>
      ))} */}
    </>
  );
};

export default Tabs;
