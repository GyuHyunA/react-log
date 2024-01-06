import React from "react";
import CounterR from "./CounterR";
import TestReducer from "./testReducer";
import UserListR from "./UserListR";

const ReducerApp = () => {
  return (
    <>
      <CounterR />
      <div>-----------------------</div>
      <TestReducer />
      <div>----------2------------</div>
      <UserListR />
    </>
  );
};

export default ReducerApp;
