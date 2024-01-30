import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TcallBackApp = () => {
  const [number, setNumber] = useState(0);

  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log(`someFunc: number : ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log(`someFunction이 변경되었습니다`);
  }, [someFunction]);
  return (
    <>
      <Link to={"/"}>HOME</Link>
      <div>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <button onClick={someFunction}>someFunction</button>
      </div>
      <div>
        <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      </div>
    </>
  );
};

export default TcallBackApp;
