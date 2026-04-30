import classname from 'classnames/bind';
import scss from './NtcLst.module.scss';
const cx = classname.bind(scss);

const NtcLst = ({ classNm, title, children }) => {
  return (
    <>
      <div className={cx('ntcLst', classNm)}>
        {title && <h4 className={cx('ntcLst-tit')}>{title}</h4>}
        {children}
      </div>
    </>
  );
};

export default NtcLst;
