import React from "react";

//isActive 속성 사용가능, aria-current="page" 자동설정해줌
import { NavLink } from "react-router";

import classname from "classnames/bind";
import css from "./Header.module.scss";
const cx = classname.bind(css);

const Gnb = () => {
  const ctg = [
    { id: 0, name: "main", link: "/" },
    { id: 1, name: "disp", link: "/disp" },
    { id: 2, name: "gds", link: "/gds" },
  ];
  const ctgItem = ctg.map((ctg) => (
    <li key={ctg.id}>
      <NavLink
        className={({ isActive }) => (isActive ? cx("active") : undefined)}
        to={ctg.link}
      >
        {ctg.name}
      </NavLink>
    </li>
  ));
  return (
    <>
      <div className={cx("head-gnb")}>
        <ul>{ctgItem}</ul>
      </div>
    </>
  );
};

export default Gnb;
