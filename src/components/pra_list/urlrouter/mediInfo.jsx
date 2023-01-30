import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Contnets from "./contnets";
import MediList from "./mediList";
import { style } from "./menu";

const MediInfo = () => {
  return (
    <div>
      <h2>MediIfo</h2>
      <Link to="/medi-list">약품리스트</Link>
      <Link to="/medi-search" style={style.ml}>
        약품검색
      </Link>
      {/* <Contnets /> */}
      <Routes>
        <Route path="/medi-list" element={<MediList />} />
        {/* <Route path="/medi-search" element={<MediList />} /> */}
      </Routes>
    </div>
  );
};

export default MediInfo;
