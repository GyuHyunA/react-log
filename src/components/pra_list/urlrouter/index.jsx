import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { A1 } from "./a";
import { B1 } from "./b";
import UrlRouterMain from "./home";
import UrlWrapper from "./urlwrapper";

const UrlRouterStyle = styled.section`
  h2 {
    margin-bottom: 10px;
  }
  a {
    margin-right: 10px;
  }
`;

const UrlRouter = () => {
  return (
    <UrlRouterStyle>
      <UrlWrapper>
        <h2>RouterTest</h2>
        <Link to={""}>HOME</Link>
        <Link to={"home1"}>HOME1</Link>
        <Link to={"a1"}>A1</Link>
        <Link to={"a1/aa1"}>Aa1</Link>
        <Link to={"a1/aa2"}>Aa2</Link>
        <Link to={"b1"}>b1</Link>
        <Routes>
          <Route path="" element={<UrlRouterMain />} />
          <Route path="/a1/*" element={<A1 />} />
          <Route path="/b1" element={<B1 />} />
        </Routes>
      </UrlWrapper>
    </UrlRouterStyle>
  );
};

export default UrlRouter;
