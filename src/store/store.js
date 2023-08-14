import { createStore } from "@reduxjs/toolkit";

const reducerFunc = (state = { counter: 0 }, action) => {
  //synchronous Function
  //we should not mutate the original state

  if(action.type === "INC"){
    return{counter:state.counter + 1}
  }
  if(action.type === "DNC"){
    return{counter:state.counter - 1}
  }
  if(action.type === "ADD"){
    return{counter:state.counter + action.payload}
  }
  if(action.type === "DEL"){
    return{counter:state.counter - action.payload}
  }

  return state;
};

const store = createStore(reducerFunc);

export default store;
