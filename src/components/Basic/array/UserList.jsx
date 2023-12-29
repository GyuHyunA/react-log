import React, { useRef, useState } from "react";

const userset = [
  {
    id: 1,
    username: "Lee",
    email: "Lee@gmail.com",
  },
  {
    id: 2,
    username: "Ahn",
    email: "Ahn@gmail.com",
  },
  {
    id: 3,
    username: "Hong",
    email: "Hong@gmail.com",
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
  const [users, setUsers] = useState(userset);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };
  return (
    <>
      <CreateUser username={username} email={email} onCreate={onCreate} onChange={onChange} />
      <UserListPap users={users} onRemove={onRemove} />
    </>
  );
};

export default UserList;

// UserLsit Section
const User = ({ user, onRemove }) => {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

const UserListPap = ({ users, onRemove }) => {
  return (
    <>
      {users.map((v) => (
        <User key={v.id} user={v} onRemove={onRemove} />
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
