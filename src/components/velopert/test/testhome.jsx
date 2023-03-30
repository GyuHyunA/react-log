import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const VeTestHomeStyle = styled.div`
  a{
    margin-right: 10px;
  }
`

const VeTestHome = () => {
  return (
    <VeTestHomeStyle>
      <Link to="veloco">Input 컨트롤</Link>
      <Link to="adcote">콘텐츠 추가</Link>
      <Link to="classComp">클래스 컴포넌트</Link>
      <Outlet />
    </VeTestHomeStyle>
  );
};

export default VeTestHome;
