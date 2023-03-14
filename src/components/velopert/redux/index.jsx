import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Reduxmain from "./component/reduxmain";

const ReduxHomeStyle = styled.div``;

const ReduxHome = () => {
  return (
    <ReduxHomeStyle>
      <Routes>
        <Route path="" element={<Reduxmain />}></Route>
      </Routes>
    </ReduxHomeStyle>
  );
};

export default ReduxHome;
