import React from "react";
import styled from "styled-components";

const UrlWrapperStyle = styled.div`
  h1 {
    margin: 0;
    margin-top: 10px;
  }
`;

const UrlWrapper = ({ children }) => {
  return <UrlWrapperStyle>{children}</UrlWrapperStyle>;
};

export default UrlWrapper;
