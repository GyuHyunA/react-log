import React from "react";
import { Link, Outlet} from "react-router-dom";
import styled from "styled-components";

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
        <Link to={"a1"}>A1</Link>
        <Link to={"a1/aa1"}>Aa1</Link>
        <Link to={"b1"}>b1</Link>
        <Outlet/>
      </UrlWrapper>
    </UrlRouterStyle>
  );
};

export default UrlRouter;

export {default as A1} from "./a/a1"
export {default as B1} from "./b/b1"
export {default as Home2} from "./home"
export {default as Aa1} from "./a/aa1"
export {default as Aa2} from "./a/aa2"

