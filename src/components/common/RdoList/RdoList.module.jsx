import { useState } from 'react';

import classname from 'classnames/bind';
import scss from './RdoList.module.scss';
const cx = classname.bind(scss);

const RdoList = ({ rdoData, name, classNm, size }) => {
  const init = rdoData.find((data) => data.checked)?.id || null;
  const [isCheck, setIsCheck] = useState(init);
  const funcCheck = (e) => {
    setIsCheck(e.target.id);
  };
  return (
    <>
      {rdoData.map((data) => (
        <span className={cx('rdo', size, classNm)} key={data.id}>
          <input type='radio' id={data.id} name={name} checked={isCheck === data.id} disabled={data.disabled} onChange={funcCheck} />
          {data.label && <label htmlFor={data.id}>{data.label}</label>}
        </span>
      ))}
    </>
  );
};

export default RdoList;
