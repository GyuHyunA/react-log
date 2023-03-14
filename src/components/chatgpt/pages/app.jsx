import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const MainAppStyle = styled.section`
  .chat-con {
    font-size: 24px;
    font-weight: 700;
    color: lightcoral;
  }
`;

const AppChatgpt = () => {
  const titlename = useLocation();
  useEffect(() => {
    
  }, [titlename])
  
  return (
    <MainAppStyle>
      <div className="chat-con">subscribe Code</div>
    </MainAppStyle>
  );
};

export default AppChatgpt;
