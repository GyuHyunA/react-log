import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Veincostyle } from "./veincostyle";

const VeInControl = () => {
  const [inputs, setInputs] = useState({ logname: "", logaccount: "" });
  const { logname, logaccount } = inputs;

  const [logUser, setLogUser] = useState(logUserList);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(4);
  const onCreate = () => {
    const logu = {
      id: nextId.current,
      logname,
      logaccount,
    };

    setLogUser(logUser.concat(logu));

    setInputs({
      logname: "",
      logaccount: "",
    });

    nextId.current += 1;
  };

  const onRemove = (id) => {
    setLogUser(logUser.filter((u) => u.id !== id));
  };

  return (
    <Veincostyle>
      <div className="inna">
        <span>이름 : </span>
        <input type="text" name="logname" onChange={onChange} />
      </div>
      <div className="inac">
        <span>계정 : </span>
        <input type="text" name="logaccount" onChange={onChange} />
        <button onClick={onCreate}>제출</button>
      </div>
      <Contain loguser={logUser} onRemove={onRemove} />
    </Veincostyle>
  );
};

export default VeInControl;

const Contain = ({ loguser, onRemove }) => {
  return (
    <>
      {loguser.map((v, i) => {
        return <Loglist user={v} key={i} onRemove={onRemove} />;
      })}
    </>
  );
};

const Loglist = ({ user, onRemove }) => {
  useEffect(() => {
    console.log("user 값이 설정됨");
    console.log(user);
    return () => {
      console.log("user가 바뀌기 전");
      console.log(user);
    };
  }, [user]);

  return (
    <>
      <p className="na">
        <span className="nt">
          {user.id}. {user.logname}
        </span>
        ({user.logaccount}) <button onClick={() => onRemove(user.id)}>삭제</button>
      </p>
    </>
  );
};

const logUserList = [
  { id: 1, logname: "Gyun", logaccount: "le" },
  { id: 2, logname: "Byun", logaccount: "be" },
  { id: 3, logname: "Cyun", logaccount: "ce" },
];
