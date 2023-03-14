import React, { useRef, useState } from "react";
import styled from "styled-components";
import CreateUser from "./createuser";
import userList from "./dummy/user";

const UserMainStyle = styled.div`
  input {
    margin: 5px 0;
    margin-right: 5px;
  }
`;

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
  return (
    <>
      {users.map((v, i) => {
        return <User user={v} key={v.id} />;
      })}
    </>
  );
}

const UserMain = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;

  const [users, setUsers] = useState(userList);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user))

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  };

  return (
    <UserMainStyle>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} />
    </UserMainStyle>
  );
};

export default UserMain;
