import React from "react";
import { Link } from "react-router-dom";

const Routest = () => {
  return (
    <div>
        <Link to={"roua"}>라우터</Link>
        <Link to={"roub"}>라우터b</Link>
        <Link to={"roubb"}>라우터bb</Link>
        <h2>라우터테스트</h2>
        {/* <Outlet /> */}
    </div>
  );
};

export default Routest;
