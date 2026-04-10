import React from "react";
//import { useState } from 'react'

import "@/styles/font.scss";
import "@/styles/reset.scss";

import classname from "classnames/bind";
import css from "@/components/layout/Layout.module.scss";
const cn = classname.bind(css);

import Header from "@/components/layout/Header/Header.jsx";
import Footer from "@/components/layout/Footer/Footer.jsx";
import Contents from "@/components/layout/Contents/Contents.jsx";

const brd_name = "AK";

const App = () => {
  //const [count, setCount] = useState(0)
  return (
    <>
      <div className={cn("wrap")}>
        <div className={cn("container")}>
          <Header name={brd_name} />
          <Contents />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
