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
      <Link to="/prahome">HOME</Link>
      <Link to="/prahome/basic">Basic</Link>
      <Link to="/prahome/router">Router</Link>
      <Link to="/prahome/redux">Redux</Link>
    </PraNaviStyle>
  );
};

export default PraNavi;
