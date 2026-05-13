import classname from 'classnames/bind';
import scss from './GdsTitle.module.scss';
const cx = classname.bind(scss);

const GdsTitle = ({ classNm, brd, sales, title }) => {
  return (
    <>
      <div className={cx('gdsTitle', classNm)}>
        {brd && <span className={cx('gdsTitle-brd')}>{brd}</span>}
        {sales && <span className={cx('gdsTitle-sales sp-tx')}>{sales}</span>}
        <span className={cx('gdsTitle-title')}>{title}</span>
      </div>
    </>
  );
};

export default GdsTitle;
