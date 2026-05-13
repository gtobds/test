import classname from 'classnames/bind';
import scss from './GdsEtc.module.scss';
const cx = classname.bind(scss);

const GdsEtc = ({ classNm, st = 0, rv = 0 }) => {
  return (
    <>
      <span className={cx('gdsEtc', classNm)}>
        <span className={cx('gdsEtc-st')}>
          <em>
            <b className='ir'>별점</b>
            {st}
          </em>
          <em>
            <b className='ir'>리뷰</b>({rv})
          </em>
        </span>
      </span>
    </>
  );
};

export default GdsEtc;
