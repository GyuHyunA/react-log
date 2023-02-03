import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../modules";
import CounterContainer from "./countercontainer";
import ReTodoContainer from "./retodoscontainer";

const ReduxMain = () => {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <CounterContainer />
      <br />
      <hr />
      <br />
      <ReTodoContainer />
    </Provider>
  );
};
export default ReduxMain;
