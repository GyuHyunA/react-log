import React from "react";
import { Route, Routes } from "react-router-dom";
import MediList from "./mediList";

const Contnets = () => {
  return (
    <div>
      <h2>Contents</h2>
      <Routes>
        <Route path="/medi-list" element={<MediList />} />
        {/* <Route path="/medi-search" element={<MediList />} /> */}
      </Routes>
    </div>
  );
};

export default Contnets;
