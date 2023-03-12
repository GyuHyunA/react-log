import React from "react";
import { Outlet } from "react-router-dom";

const A1 = () => {
  return (
    <div>
      <h1>A1</h1>
      {/* <Routes>
        <Route path="/" element={<Aa1/>}></Route>
        <Route path="aa1" element={<Aa2/>}></Route>
      </Routes> */}
      <Outlet />
    </div>
  );
};

export default A1;
