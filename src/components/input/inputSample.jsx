import React, { useState } from "react";

const InputSample = () => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={onChange}/>
      <button>초기화</button>
      <div>
        <b>값 : {text} </b>
      </div>
    </>
  );
};

export default InputSample;
