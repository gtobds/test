import classname from "classnames/bind";
import css from "./Header.module.scss";
const cn = classname.bind(css);

import Button from "@/components/common/Button/Button.module.jsx";
import logo_ak from "@/assets/images/common/logo_ak.svg";

const Header = ({ name = "삼성", sub = "플라자" }) => {
  return (
    <>
      <div className={cn("header")} role="banner">
        <div className={cn("head")}>
          <h1 className={cn("head_logo")}>
            <a href="#" style={{ width: "auto", height: "50px" }}>
              <img src={logo_ak} alt={name + " " + sub} />
            </a>
            <Button text="버튼11" />
            <Button size="sd" text="버튼22" />
            <Button type="ln" text="버튼33" />
            <Button type="ln" add="wish" text="버튼addClass" />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
