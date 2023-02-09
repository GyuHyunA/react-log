import React from "react";
import { Route, Routes } from "react-router-dom";
import Aa1 from "./aa1";
import Aa2 from "./aa2";

const A1 = () => {
  return (
    <div>
      <h1>A1</h1>
      <Routes>
        <Route path="/" element={<Aa1/>}></Route>
        <Route path="aa1" element={<Aa2/>}></Route>
      </Routes>
    </div>
  );
};

export default A1;
