import React from "react";
import { useState } from "react";
import styled from "styled-components";

const InputSampleStyle = styled.div`
  input {
    margin: 5px;
    padding: 1px;
  }
  .result {
    margin-left: 5px;
  }
`;

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, //기존의 input을 복사한다
      [name]: value, // name 키를 가진 값을 value로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };

  return (
    <InputSampleStyle>
      <input type="text" name="name" placeholder="이름" onChange={onChange} vlaue={name} />
      <input type="text" name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div className="result">
        <b>값: </b>
        {name} ({nickname})
      </div>
    </InputSampleStyle>
  );
};

export default InputSample;
