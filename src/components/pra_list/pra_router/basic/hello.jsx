import React from "react";
import styled from "styled-components";

const HelloStyle = styled.div`
  h2 {
    margin: 10px 0;
  }
`;

const Hello = ({ name, isSpecial }) => {
  return (
    <HelloStyle>
      <h2>
        {isSpecial ? <b style={{ color: "red" }}>차아암!! </b> : null} 안녕하세요 {name}
      </h2>
    </HelloStyle>
  );
};

export default Hello;

Hello.defaultProps = {
  name: "이름없음"
}
