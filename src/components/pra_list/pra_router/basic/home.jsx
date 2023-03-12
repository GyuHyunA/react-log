import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const BasicHome = () => {
  return (
    <div>
      <BasicLink />
      <Outlet />
    </div>
  );
};

export default BasicHome;

const BasicLinkStyle = styled.div`
  margin: 10px 0;
  a {
    margin-right: 10px;
  }
`;

const BasicLink = () => {
  return (
    <BasicLinkStyle>
      <Link to="/prahome/basic/hello">Hello</Link>
      <Link to="/prahome/basic/about">About</Link>
      <Link to="/prahome/basic/counter">Counter</Link>
      <Link to="/prahome/basic/input">Input</Link>
      <Link to="/prahome/basic/usermain">UserList</Link>
    </BasicLinkStyle>
  );
};
