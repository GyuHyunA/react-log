import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Plus":
      return state + 1;
    case "Minus":
      return state - 1;
    case "Reset":
      return (state = 0);
    default:
      return state;
  }
};

const TestReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  function plus(e) {
    let inText = e.target.innerText;
    if (inText === "Plus") {
      dispatch({ type: "Plus" });
    } else if (inText === "Minus") {
      dispatch({ type: "Minus" });
    } else if (inText === "Reset") {
      dispatch({ type: "Reset" });
    } else if (inText === "Alert") {
      alert("HELLO");
    } else if (inText === "Log") {
      console.log("HELLO");
    }
  }

  return (
    <>
      <h2> Reducer 테스트 </h2>
      <button onClick={plus}>Plus</button>
      <button onClick={plus}>Minus</button>
      <button onClick={plus}>Reset</button>
      <button onClick={plus}>Alert</button>
      <button onClick={plus}>Log</button>
      <h3>{state}</h3>
    </>
  );
};

export default TestReducer;
