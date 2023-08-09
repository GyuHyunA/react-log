import React, { useEffect, useState } from "react";
import { ApiConnetStyle } from "./apiStyle";
import axios from "axios";

const ApiConnectHome = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
        const respons = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(respons.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  return (
    <ApiConnetStyle>
      {users.map((v, i) => {
        return (
          <li key={v.id}>
            {v.username} ({v.name})
          </li>
        );
      })}
    </ApiConnetStyle>
  );
};
// Link
// https://jsonplaceholder.typicode.com/users

export default ApiConnectHome;
