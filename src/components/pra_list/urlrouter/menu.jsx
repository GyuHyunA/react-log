import React, { useState } from "react";
import HealthFood from "./healthFood";
import MediInfo from "./mediInfo";

export const style = {
  menu: {
    backgroundColor: "lightgray",
    borderRadius: "10px",
    padding: "15px 30px",
  },
  ml: {
    marginLeft: "10px",
  },  
};

const RouterMenu = () => {
  const [comp, setComp] = useState();
  return (
    <div style={style.menu}>
      <h2>RouterMenu</h2>
      <button onClick={() => setComp(MediInfo)}>MediInfo</button>
      <button onClick={() => setComp(HealthFood)} style={style.ml}>
        HealthFood
      </button>
      <div children={comp} />
    </div>
  );
};

export default RouterMenu;
