import React from "react";
import StateApp from "./useState/StateApp";
import BasicApp from "./Basic/BasicApp";
import InputApp from "./input/InputApp";

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
    </>
  );
};

export default MainApp;
