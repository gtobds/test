import classname from "classnames/bind";
import css from "./Button.module.scss";
const cn = classname.bind(css);

const Button = ({ size = "", type = "", add = "", text = "버튼" }) => {
  return (
    <button type="button" className={cn("btn", size, type, add)}>
      <em>{text}</em>
    </button>
  );
};

export default Button;
