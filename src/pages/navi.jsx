import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NaviStyle = styled.div`
  margin: 20px 0;
  h1 {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
  }
  a {
    margin-right: 10px;
  }
`;

const Navi = () => {
  return (
    <NaviStyle>
      <h1>Link</h1>
      <Link to="/">Main</Link>
      <Link to="prahome">Prahome</Link>
      <Link to="todolist">PostMain</Link>
    </NaviStyle>
  );
};

export default Navi;
