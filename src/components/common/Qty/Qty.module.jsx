import { useEffect, useId, useState } from 'react';

import classname from 'classnames/bind';
import css from './Qty.module.scss';
const cx = classname.bind(css);

const Qty = ({ val = 0, min = 0, max, classNm, size, disabled }) => {
  const idu = useId();
  const [value, setQval] = useState(Number(val));
  const [isMin, setMin] = useState(false);
  const [isMax, setMax] = useState(false);

  const fncPlus = () => {
    setQval(value + 1);
  };
  const fncMinus = () => {
    setQval(value - 1);
  };

  useEffect(() => {
    const numMin = Number(min);
    const numMax = Number(max);

    if (value <= numMin) {
      setMin(true);
      setMax(false);
      setQval(numMin);
    } else if (value >= numMax) {
      setMin(false);
      setMax(true);
      setQval(numMax);
    } else {
      setMin(false);
      setMax(false);
      setQval(value);
    }
  }, [value]);

  return (
    <>
      <span className={cx('qty', size, classNm)}>
        <input type='text' id={'qty' + idu} value={value} onChange={(e) => setQval(Number(e.target.value))} aria-label='수량' inputMode='numeric' spellCheck='false' disabled={disabled} />
        <button type='button' className={cx('minus')} aria-label='감소' onClick={fncMinus} disabled={isMin || disabled}></button>
        <button type='button' className={cx('plus')} aria-label='증가' onClick={fncPlus} disabled={isMax || disabled}></button>
      </span>
    </>
  );
};

export default Qty;
