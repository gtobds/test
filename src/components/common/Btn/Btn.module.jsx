import classname from "classnames/bind";
import css from "./Btn.module.scss";
const cn = classname.bind(css);

const Btn = ({ size = "", type = "", add = "", text = "" }) => {
  return (
    <button
      type="button"
      className={cn("btn", size, type, add, { noIns: add == "in" })}
    >
      <em>{text}</em>
    </button>
  );
};

export default Btn;
