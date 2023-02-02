import React from "react";
import { Route, Routes } from "react-router-dom";
import BasicHome from "./pra_router/basic/home";
import PraNavi from "./navi";
import RouHome from "./pra_router/routers";
import ReduxHome from "./redux";

const PraApp = () => {
  return (
    <>
      <PraNavi />
      <Routes>
        <Route path="/basic/*" element={<BasicHome />} />
        <Route path="/router/*" element={<RouHome />} />
        <Route path="/redux/*" element={<ReduxHome />} />
      </Routes>
    </>
  );
};

export default PraApp;
