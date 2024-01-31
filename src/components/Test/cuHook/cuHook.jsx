import { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
    default:
      return state;
  }
};

const CuHook = () => {
  const [counter, dispatch] = useReducer(countReducer, 0);
  const countControl = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "+") {
      dispatch({ type: "UP" });
    } else if (btnText === "-") {
      dispatch({ type: "DOWN" });
    }
  };

  return [counter, countControl];
};

export default CuHook;
