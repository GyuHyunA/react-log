import React, { useState } from "react";

let btnStyle = {
  padding: "3px 20px",
  marginRight: "10px",
  cursor: "pointer",
};
let { ...a } = btnStyle;

const Counter = () => {
  const [counter, setCounter] = useState(0);
  function upCount() {
    setCounter((e) => (e += 1));
  }
  function downCount() {
    setCounter((e) => (e -= 1));
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

export default Counter;
