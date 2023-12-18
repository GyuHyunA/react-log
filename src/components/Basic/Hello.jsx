import React from "react";

const Hello = ({ name, age, color, isSpecial }) => {
  let obj = [1, 2, 3, "c"];
  let [a, ...etc] = obj;


  return (
    <div>
      <p>안녕하세요</p>
      <p>{name}님</p>
      <br />
      <h3>비구조화 할당 테스트</h3>
      <p>{a}</p>
      <p>{etc}</p>
      <br />
      <h3>조건부 렌더링</h3>
      <p>
        {isSpecial ? "Wow" : "Sorry"}완벽하네요 <span style={{ color: color }}>{name}</span>
      </p>
    </div>
  );
};

export default Hello;
