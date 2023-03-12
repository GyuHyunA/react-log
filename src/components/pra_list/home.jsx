import React from "react";
import { Outlet } from "react-router-dom";
import PraNavi from "./navi";

const PraApp = () => {
  return (
    <>
      <PraNavi />
      <Outlet />
    </>
  );
};

export default PraApp;
