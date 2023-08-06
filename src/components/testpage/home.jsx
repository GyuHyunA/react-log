import React from "react";
import { Link, Outlet } from "react-router-dom";

const TestHome = () => {
  return (
    <div>
      <Link to="apiconnect">API연결</Link>
      <Outlet />
    </div>
  );
};

export default TestHome;
