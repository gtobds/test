import React from "react";

import classname from "classnames/bind";
import css from "./Disp.module.scss";
const cx = classname.bind(css);

const DispMain = () => {
  return <div className={cx("disp-outlet")}>DispMain</div>;
};

export default DispMain;
