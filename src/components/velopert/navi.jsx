import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PraNaviStyle = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  a {
    margin-right: 10px;
  }
`;

const PraNavi = () => {
  return (
    <PraNaviStyle>
      <Link to="/velo">HOME</Link>
      <Link to="/velo/basic">Basic</Link>
      <Link to="/velo/router">Router</Link>
      <Link to="/velo/redux">Redux</Link>
      <Link to="/velo/velotest">VeloTest</Link>
    </PraNaviStyle>
  );
};

export default PraNavi;
