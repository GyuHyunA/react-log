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
      <Link to="/velo/basic/hello">Hello</Link>
      <Link to="/velo/basic/about">About</Link>
      <Link to="/velo/basic/counter">Counter</Link>
      <Link to="/velo/basic/input">Input</Link>
      <Link to="/velo/basic/usermain">UserList</Link>
    </BasicLinkStyle>
  );
};
