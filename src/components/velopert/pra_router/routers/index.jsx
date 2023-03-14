import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Roua from "./roua";
import Roub from "./roub";

const RouHomeStyle = styled.div`
  a {
    display: inline-block;
    margin: 10px 0;
    margin-right: 10px;
    &:active {
      color: lightcoral;
    }
  }
`;

const RouHome = () => {
  return (
    <RouHomeStyle>
      <Link to="roua">Roua</Link>
      <Link to="roub">Roub</Link>
      <Routes>
        <Route path="roua" element={<Roua />} />
        <Route path="roub" element={<Roub />} />
      </Routes>
    </RouHomeStyle>
  );
};
export default RouHome;
