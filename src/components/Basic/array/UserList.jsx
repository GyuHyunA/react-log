import React, { useRef, useState } from "react";

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
const UserList = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  // userSet 관리
  const [users, setUsers] = useState(userset);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user));
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };
  const onToggle = (id) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)))
  };
  return (
    <>
      <CreateUser username={username} email={email} onCreate={onCreate} onChange={onChange} />
      <UserListPap users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
};

export default UserList;

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
