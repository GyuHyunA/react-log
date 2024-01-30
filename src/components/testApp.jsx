import React from "react";
import TcallBackApp from "./Test/useCallback/TcallBackApp";
import TcustomHookApp from "./Test/cuHook/TcustomHookApp";

const TestApp = () => {
  return (
    <>
      <TcallBackApp />
      <br />
      <TcustomHookApp />
    </>
  );
};

export default TestApp;
