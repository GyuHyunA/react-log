import React from "react";

const Wrapper = ({ children }) => {
  const style = {
    borderTop: "2px solid #c0c0c0",
    borderRadius: "5px",
    padding: "16px",
    overflow: "hidden",
    margin: "20px 0",
    background: "rgba(209, 211, 224, 0.25)",
  };
  return <div style={style}>{children}</div>;
};

export default Wrapper;
