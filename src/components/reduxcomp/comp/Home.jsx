import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DNC" });
  };
  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  const delBy = () => {
    dispatch({ type: "DEL", payload: 10});
  };
  return (
    <>
      <HomeStyle>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={addBy}>INC + 10</button>
        <button onClick={delBy}>INC - 10</button>
      </HomeStyle>
    </>
  );
};

export default Home;

const HomeStyle = styled.div``;
