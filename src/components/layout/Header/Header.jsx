import classname from "classnames/bind";
import css from "./Header.module.scss";
const cn = classname.bind(css);

import Btn from "@/components/common/Btn/Btn.module.jsx";
import logo_ak from "@/assets/images/common/logo_ak.svg";

let isLog = true;

const Header = ({ name = "삼성", sub = "플라자" }) => {
  return (
    <>
      <div className={cn("header")} role="banner">
        <div className={cn("head")}>
          <h1 className={cn("head_logo")}>
            <a
              href="#"
              style={{ width: "auto", height: "50px" }}
              // onClick={() => toggle()}
            >
              <img src={logo_ak} alt={name + " " + sub} />
            </a>

            <div className="btn-set">
              {isLog ? (
                <>
                  <Btn text="버튼11" />
                  <Btn size="sd" text="버튼22" />
                  <Btn type="ln" text="버튼33" />
                  <Btn type="ln" add="wish" text="addClass" />
                </>
              ) : (
                <Btn add="in" text="조건부클래스" />
              )}

              {isLog && <Btn add="in" text="조건부클래스22" />}
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
