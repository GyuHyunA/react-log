import React from "react";
import { Route, Routes } from "react-router-dom";
import RouterMenu from "./menu";

const UrlRouter = () => {
  return (
    <>
      <h2>URL Router Home</h2>
      <Routes>
        <Route path="/" element={<RouterMenu />} />
      </Routes>
    </>
  );
};

export default UrlRouter;
