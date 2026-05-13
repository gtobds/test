import { NavLink } from 'react-router';
import { useState, useRef } from 'react';
import { useCateStore } from '@/stores/useCateStore';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import classname from 'classnames/bind';
import scss from './Header.module.scss';
const cx = classname.bind(scss);

const Ctg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [active2, setActive2] = useState(null);

  const cate = useCateStore((state) => state.cateList);
  const ctgRef = useRef(null);

  useOutsideClick(ctgRef, () => setIsOpen(false));

  return (
    <>
      <div ref={ctgRef} className={cx('head-ctg')} role='menu' aria-expanded={isOpen ? 'true' : 'false'}>
        <button type='button' className={cx('head-ctg_open')} aria-pressed={isOpen ? 'true' : 'false'} aria-label='전체카테고리 레이어 열기' onClick={() => setIsOpen(!isOpen)} />
        {isOpen && cate.length > 0 && (
          <div
            className={cx('head-ctg_layer')}
            onMouseLeave={() => {
              setActive(null);
              setActive2(null);
            }}>
            <div className={cx('wrp')}>
              <h3 className='ir'>카테고리 메뉴</h3>
              <ul>
                {cate.map((lst) => (
                  <li
                    key={lst.id}
                    onMouseEnter={() => {
                      setActive(lst);
                      setActive2(null);
                    }}>
                    <div role='menuitem' aria-expanded={active?.id === lst.id && active.sub ? 'true' : 'false'}>
                      <div className={cx('mnBt')}>
                        <NavLink to={lst.link} role='heading' aria-level='4'>
                          <span>{lst.title}</span>
                        </NavLink>
                      </div>
                      {active && active.sub && (
                        <div className={cx('mnLyr')} onMouseEnter={() => setActive(active)}>
                          <ul>
                            {active.sub.map((dep) => (
                              <li key={dep.id} onMouseEnter={() => setActive2(dep)}>
                                <div role='menuitem' aria-expanded={active2?.id === dep.id && active2.sub ? 'true' : 'false'}>
                                  <div className={cx('mnBt')}>
                                    <NavLink to={dep.link} role='heading' aria-level='5'>
                                      <span>{dep.title}</span>
                                    </NavLink>
                                  </div>
                                  {active2 && active2.sub && (
                                    <div
                                      className={cx('mnLyr')}
                                      onMouseEnter={() => {
                                        setActive(active);
                                        setActive2(active2);
                                      }}>
                                      <ul>
                                        {active2.sub.map((dep2) => (
                                          <li key={dep2.id}>
                                            <div role='menuitem'>
                                              <div className={cx('mnBt')}>
                                                <NavLink to={dep2.link}>
                                                  <span>{dep2.title}</span>
                                                </NavLink>
                                              </div>
                                            </div>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Ctg;
