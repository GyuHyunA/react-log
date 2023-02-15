import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import About from "./about";
import Counter from "./counter";
import Hello from "./hello";
import InputSample from "./inputSample";
import UserMain from "./userlist";

const BasicHome = () => {
  return (
    <div>
      <BasicLink />
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path="/input" element={<InputSample />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/userMain/*" element={<UserMain />}/>
      </Routes>
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