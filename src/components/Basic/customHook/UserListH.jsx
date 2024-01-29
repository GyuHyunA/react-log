import React, { useCallback, useMemo, useReducer, useRef } from "react";
import UseInputs from "./useInputs";

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

function countActiveUsers(users) {
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: userset,
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        // inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        // ...state,
        users: state.users.map((user) => (user.id === action.id ? { ...user, active: !user.active } : user)),
      };
    case "REMOVE_USER":
      return {
        // ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
}

// App 부분
const UserListH = () => {
  const [{ username, email }, onChange, reset] = UseInputs({
    username: "",
    email: "",
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;

  // onCreate
  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    reset();
    nextId.current += 1;
  }, [username, email, reset]);

  //onToggle
  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
  }, []);

  //onRemove
  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserListPap users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
};

export default UserListH;

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
