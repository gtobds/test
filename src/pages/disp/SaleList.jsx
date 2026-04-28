import React from "react";

import classname from "classnames/bind";
import css from "./Disp.module.scss";
const cx = classname.bind(css);

const SaleList = () => {
  return <div className={cx("disp-outlet")}>SaleList</div>;
};

export default SaleList;
