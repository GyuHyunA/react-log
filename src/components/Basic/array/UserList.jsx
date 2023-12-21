import React from "react";

const users = [
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

const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
};

const UserList = () => {
  return (
    <>
      {users.map((v) => (
        <User key={v.id} user={v} />
      ))}
    </>
  );
};

export default UserList;
