import React from "react";
import { useState } from "react";
import styled from "styled-components";

const TestPageStyled = styled.div`
  h1 {
    margin: 10px 0;
  }
  .input {
    margin-bottom: 10px;
  }
`;

const TestPage = () => {
  // JS 테스트
  const [change, setChange] = useState("");
  const [onbtn, setOnbtn] = useState("");

  function onChange(e) {
    setChange(e.target.value);
  }

  function onSubmit() {
    setOnbtn(change);
  }

  const fruit = onbtn;
  const bag = {
    [fruit]: 5,
  };

  const result = bag.apple;
  //HTML테스트
  return (
    <TestPageStyled>
      <h1>테스트 페이지</h1>
      <div className="input">
        <p>값 입력</p>
        <input type="text" placeholder="값 입력" onChange={onChange} />
        <button onClick={onSubmit}>제출</button>
      </div>
      <div className="result">
        <h3>{result}</h3>
      </div>
    </TestPageStyled>
  );
};

export default TestPage;
