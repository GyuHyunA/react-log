import React from "react";
import CuHook from "./cuHook";

const TcustomHookApp = () => {
  const [counter, countControl] = CuHook()

  return (
    <>
      <button onClick={countControl}>+</button>
      <button onClick={countControl}>-</button>
      <div>{counter}</div>
    </>
  );
};

export default TcustomHookApp;
