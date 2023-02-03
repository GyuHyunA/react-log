import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counters";
import ReCounter from "./recounter";

const CounterContainer = () => {
  //리덕스 스토어 호출
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return <ReCounter number={number} diff={diff} onIncrease={onIncrease} onDecrease={onDecrease} onSetDiff={onSetDiff} />;
};

export default CounterContainer;
