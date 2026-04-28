import React from "react";

import classname from "classnames/bind";
import css from "./Disp.module.scss";
const cx = classname.bind(css);

const NewList = () => {
  return <div className={cx("disp-outlet")}>NewList</div>;
};

export default NewList;
