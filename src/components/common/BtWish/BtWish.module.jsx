import { useEffect, useState } from 'react';
import classname from 'classnames/bind';
import scss from './BtWish.module.scss';
const cx = classname.bind(scss);

const BtWish = ({ className, on }) => {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    setIsOn(on);
  }, []);
  return (
    <>
      <button type='button' className={cx('sp-wish', className)} aria-label={isOn ? '좋아요 취소' : '좋아요 추가'} aria-pressed={isOn ? 'true' : 'false'} onClick={() => setIsOn(!isOn)} />
    </>
  );
};

export default BtWish;
