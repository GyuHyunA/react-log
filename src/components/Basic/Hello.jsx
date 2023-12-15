import React from "react";

const Hello = (e) => {
  let obj = [1, 2, 3, "c"];
  let [a, ...etc] = obj;

  return (
    <div>
      <p>안녕하세요</p>
      <p>{e.name}님</p>
      <br />
      <h3>비구조화 할당 테스트</h3>
      <p>{a}</p>
      <p>{etc}</p>
    </div>
  );
};

export default Hello;
