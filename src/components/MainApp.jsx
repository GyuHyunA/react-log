import React from "react";
import BasicApp from "./Basic/BasicApp";
import StateApp from "./Basic/useState/StateApp";
import InputApp from "./Basic/input/InputApp";
import ArrayApp from "./Basic/array/arrayApp";
import EffectApp from "./Basic/useEffect/EffectApp";
import MemoApp from "./Basic/useMemo/MemoApp";
import CallBackApp from "./Basic/useCallback/CallBackApp";
import ReducerApp from "./Basic/reducer/ReducerApp";
import { Link } from "react-router-dom";
import HookApp from "./Basic/customHook/hookApp";

const MainApp = () => {
  return (
    <>
      <Link to="testApp">TestAppLink</Link>
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
      <hr />
      <br />
      <CallBackApp />
      <br />
      <hr />
      <br />
      <ReducerApp />
      <br />
      <hr />
      <br />
      <HookApp />
    </>
  );
};

export default MainApp;
