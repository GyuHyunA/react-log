import React from "react";
import BasicApp from "./Basic/BasicApp";
import StateApp from "./Basic/useState/StateApp";
import InputApp from "./Basic/input/InputApp";

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
