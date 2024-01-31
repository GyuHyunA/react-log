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
import ContextApp from "./Basic/contextAPI/ContextApp";

const MainApp = () => {
  return (
    <>
      <Link to="testApp">TestAppLink</Link>
      <BasicApp />
      <br />
      <hr />
      <br />
      <p>useState</p>
      <StateApp />
      <br />
      <hr />
      <br />
      <InputApp />
      <br />
      <hr />
      <br />
      <p>Array State</p>
      <ArrayApp />
      <br />
      <hr />
      <br />
      <p>useEffect</p>
      <EffectApp />
      <br />
      <hr />
      <br />
      <p>useMemo</p>
      <MemoApp />
      <br />
      <hr />
      <br />
      <p>useCallback</p>
      <CallBackApp />
      <br />
      <hr />
      <br />
      <p>useReducer</p>
      <ReducerApp />
      <br />
      <hr />
      <br />
      <p>CustomHook</p>
      <HookApp />
      <br />
      <hr />
      <br />
      <p>ContextAPI</p>
      <ContextApp />
    </>
  );
};

export default MainApp;