import React from "react";
import { useState } from "react";
import styled from "styled-components";

const CounterStyle = styled.div`
  h1 {
    margin-bottom: 10px;
  }
  button {
    padding: 0 10px;
    margin-right: 10px;
  }
`;

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onIncrese = () => {
    setCounter(v => v + 1);
  };
  const onDecrese = () => {
    setCounter(v => v - 1);
  };

  return (
    <CounterStyle>
      <h1>{counter}</h1>
      <button onClick={onIncrese}>+1</button>
      <button onClick={onDecrese}>-1</button>
    </CounterStyle>
  );
};

export default Counter;
