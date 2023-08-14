import React from "react";
import { Route, Routes } from "react-router-dom";
import ReduxNav from "./reduxNav";
import Home from "./comp/Home";

const ReduxHome = () => {
  return (
    <>
      <ReduxNav />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
};

export default ReduxHome;
