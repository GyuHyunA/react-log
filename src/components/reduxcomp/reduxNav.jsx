import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ReduxNavStyle = styled.nav`
a{
    margin-right: 10px;
}
`

const ReduxNav = () => {
  return (
    <ReduxNavStyle>
      <NavLink to="/redux">HOME</NavLink>
    </ReduxNavStyle>
  );
};

export default ReduxNav;
