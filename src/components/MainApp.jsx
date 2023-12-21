import React from "react";
import BasicApp from "./Basic/BasicApp";
import StateApp from "./Basic/useState/StateApp";
import InputApp from "./Basic/input/InputApp";
import ArrayApp from "./Basic/array/arrayApp";

const MainApp = () => {
  return (
    <>
      <BasicApp />
      <br />
      <hr />
      <br />
      <StateApp />
      <br />
      <hr />
      <br />
      <InputApp />
      <br />
      <hr />
      <br />
      <ArrayApp />
    </>
  );
};

export default MainApp;
