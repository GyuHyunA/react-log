import React, { useState } from "react";
import CuHook from "./cuHook";

const TcustomHookApp = () => {
  const [counter, isIncrease, isDecrease] = CuHook()

  return (
    <>
      <button onClick={isIncrease}>+</button>
      <button onClick={isDecrease}>-</button>
      <div>{counter}</div>
    </>
  );
};

export default TcustomHookApp;
