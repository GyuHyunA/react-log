import React, { useCallback, useMemo, useRef, useState } from "react";

const userset = [
  {
    id: 1,
    username: "Lee",
    email: "Lee@gmail.com",
    active: true,
  },
  {
    id: 2,
    username: "Ahn",
    email: "Ahn@gmail.com",
    active: false,
  },
  {
    id: 3,
    username: "Hong",
    email: "Hong@gmail.com",
    active: false,
  },
];

// App 부분
const UserListC = () => {
  const countActiveUser = (users) => {
    console.log("활성 사용자를 세는 중...");
    return users.filter((u) => u.active).length;
  };

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);
  // userSet 관리
  const [users, setUsers] = useState(userset);
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers((users) => users.concat(user));
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((u) => u.id !== id));
  }, []);
  const onToggle = useCallback((id) => {
    setUsers((users) => users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
  }, []);

  const count = useMemo(() => countActiveUser(users), [users]);
  return (
    <>
      <CreateUser username={username} email={email} onCreate={onCreate} onChange={onChange} />
      <UserListPap users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자수 : {count}</div>
    </>
  );
};

export default UserListC;

// UserLsit Section
const User = ({ user, onRemove, onToggle }) => {
  return (
    <div>
      <b style={{ cursor: "pointer", color: user.active ? "green" : "black" }} onClick={() => onToggle(user.id)}>
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

const UserListPap = ({ users, onRemove, onToggle }) => {
  return (
    <>
      {users.map((v) => (
        <User key={v.id} user={v} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </>
  );
};

// CreateUser부분
const CreateUser = ({ username, email, onChange, onCreate }) => {
  return (
    <>
      <input type="text" name="username" placeholder="계정명" onChange={onChange} value={username} />
      <input type="text" name="email" placeholder="이메일" onChange={onChange} value={email} />
      <button onClick={onCreate}>등록</button>
    </>
  );
};
