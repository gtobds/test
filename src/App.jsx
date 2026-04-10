import React from "react";
//import { useState } from 'react'

import "@/styles/font.scss";
import "@/styles/reset.scss";
import "@/styles/layout.scss";

import Header from "@/components/layout/Header/Header.jsx";
import Footer from "@/components/layout/Footer/Footer.jsx";
import Contents from "@/components/layout/Contents/Contents.jsx";

const brd_name = "AK";

const App = () => {
  //const [count, setCount] = useState(0)
  return (
    <>
      <div className="wrap">
        <div className="container">
          <Header name={brd_name} />
          <Contents />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
