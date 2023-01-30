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
    &:active{
      color: lightcoral;
    }
  }
`;

const RouHome = () => {
  return (
    <RouHomeStyle>
      <h2>RouHome</h2>
      <Link to="roua">roua</Link>
      <Link to="roub">roub</Link>
      <Routes>
        <Route path="/roua" element={<Roua />} />
        <Route path="/roub" element={<Roub />} />
      </Routes>
    </RouHomeStyle>
  );
};

export default RouHome;

export { default as Roua } from "./roua";
export { default as Roub } from "./roub";
