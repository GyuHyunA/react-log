import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return
    setUser({name:name, email:email})
    navigate('/router/dashboard')
    console.log(name, email);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">login</button>
      </form>
    </> 
  );
};

export default Login;
