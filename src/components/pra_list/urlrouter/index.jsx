import React from "react";
import { Link, useRoutes } from "react-router-dom";
import styled from "styled-components";
import { A1 } from "./a";
import { B1 } from "./b";
import UrlRouterMain from "./home";
import Home2 from "./home/home2";
import UrlWrapper from "./urlwrapper";

const UrlRouterStyle = styled.section`
  h2 {
    margin-bottom: 10px;
  }
  a {
    margin-right: 10px;
  }
`;

const urlList = [
  {
    path: "/",
    element: <UrlRouterMain />,
    children: [{ path: "home2", element: <Home2 /> }],
  },

  {
    path: "a1/*",
    element: <A1 />,
  },

  {
    path: "b1",
    element: <B1 />,
  },
];

const UrlRouter = () => {
  const route = useRoutes(urlList);

  return (
    <UrlRouterStyle>
      <UrlWrapper>
        <h2>RouterTest</h2>
        <Link to={""}>HOME</Link>
        <Link to={"./home2"}>HOME2</Link>
        <Link to={"a1"}>A1</Link>
        <Link to={"a1/aa1"}>Aa1</Link>
        <Link to={"a1/aa2"}>Aa2</Link>
        <Link to={"b1"}>b1</Link>
        {route}
      </UrlWrapper>
    </UrlRouterStyle>
  );
};

export default UrlRouter;
