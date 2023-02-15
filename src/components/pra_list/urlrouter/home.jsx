import React from "react";
import { Route, Routes } from "react-router-dom";
import Home1 from "./home/home1";
import Home2 from "./home/home2";

const UrlRouterMain = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home1 />}></Route>
        <Route path="home1" element={<Home2 />}></Route>
      </Routes>
    </div>
  );
};

export default UrlRouterMain;
