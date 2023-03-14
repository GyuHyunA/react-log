import React from "react";
import { Link, Outlet } from "react-router-dom";

const VeTestHome = () => {
  return (
    <>
      <Link to="veloco">Input 컨트롤</Link>
      <Outlet />
    </>
  );
};

export default VeTestHome;
