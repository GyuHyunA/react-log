import React, { useEffect, useState } from "react";

const Dbtest = () => {
  const [dstate, setDstate] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let xhr = new XMLHttpRequest();

  xhr.open("POST", "https://rcsvr.myds.me/agh/m1.php", true);

  xhr.send();
  useEffect(() => {
    xhr.onload = () => {
      if (xhr.status === 200) {
        let value = JSON.parse(xhr.response);
        setDstate(value);
        console.log(dstate);
      } else {
        //fail
      }
    };
    return () => {
      xhr.onload = () => {
        if (xhr.status === 200) {
          let value = JSON.parse(xhr.response);
          setDstate(value);
          console.log(dstate);
        } else {
          //fail
        }
      };
    };
  }, [dstate, xhr]);

  return <div></div>;
};

export default Dbtest;
