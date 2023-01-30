import React from "react";
import { Route, Routes } from "react-router-dom";
import BasicHome from "./basic/home";
import PraNavi from "./navi";

const PraApp = () => {
  return (
    <>
      <PraNavi />
      <Routes>
        <Route path="/basic/*" element={<BasicHome />} />
      </Routes>
    </>
  );
};

export default PraApp;
