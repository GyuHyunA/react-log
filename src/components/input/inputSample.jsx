import React, { useState } from "react";

const InputSample = () => {
  const [input, setInput] = useState({
    name: "",
    nickname: "",
  });
  const { name, nickname } = input;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onReset = () => {
    setInput({
      name: "",
      nickname: "",
    });
  };
  return (
    <>
      <input name="name" type="text" placeholder="이름" onChange={onChange} />
      <input name="nickname" type="text" placeholder="닉네임" onChange={onChange} />
      <button onClick={onReset}>검색</button>
      <div>
        <b>값 : </b>
        <b>{name}({nickname})</b>
      </div>
    </>
  );
};

export default InputSample;
