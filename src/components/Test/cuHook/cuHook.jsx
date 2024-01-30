import { useState } from "react";

const CuHook = () => {
  const [counter, setCounter] = useState(0);

  const isIncrease = () => {
    setCounter((v) => v + 1);
  };

  const isDecrease = () => {
    setCounter((v) => v - 1);
  };
  return [counter, isIncrease, isDecrease]
};

export default CuHook;
