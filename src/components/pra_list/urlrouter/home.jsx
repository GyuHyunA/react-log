import React from "react";
import { Outlet } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
// import Home1 from "./home/home1";
// import Home2 from "./home/home2";

const UrlRouterMain = () => {
  return (
    <div>
      {/* hihi */}
      <Outlet />
    </div>
  );
};

export default UrlRouterMain;
