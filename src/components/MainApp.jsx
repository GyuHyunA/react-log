import React from "react";
import BasicApp from "./Basic/BasicApp";
import StateApp from "./Basic/useState/StateApp";
import InputApp from "./Basic/input/InputApp";
import ArrayApp from "./Basic/array/arrayApp";
import EffectApp from "./Basic/useEffect/EffectApp";
import MemoApp from "./Basic/useMemo/MemoApp";

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
      <br />
      <hr />
      <br />
      <EffectApp />
      <br />
      <hr />
      <br />
      <MemoApp />
      <br />
    </>
  );
};

export default MainApp;
