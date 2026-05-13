import classname from 'classnames/bind';
import scss from './GdsTag.module.scss';
const cx = classname.bind(scss);

const GdsTag = ({ classNm, lst }) => {
  return (
    <>
      {lst.length > 0 && (
        <div className={cx('gdsTags', classNm)}>
          {lst.map((tg) => (
            <em key={tg.id}>{tg.name}</em>
          ))}
        </div>
      )}
    </>
  );
};

export default GdsTag;
