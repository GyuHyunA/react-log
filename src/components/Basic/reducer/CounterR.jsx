import React, { useReducer } from "react";

let btnStyle = {
  padding: "3px 20px",
  marginRight: "10px",
  cursor: "pointer",
};
let { ...a } = btnStyle;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const CounterR = () => {
  const [counter, dispatch] = useReducer(reducer, 0);

  function upCount() {
    dispatch({ type: "INCREMENT" });
  }
  function downCount() {
    dispatch({ type: "DECREMENT" });
  }
  return (
    <>
      <h3>Number</h3>
      <h4>{counter}</h4>
      <button style={a} onClick={upCount}>
        +1
      </button>
      <button style={a} onClick={downCount}>
        -1
      </button>
    </>
  );
};

export default CounterR;
