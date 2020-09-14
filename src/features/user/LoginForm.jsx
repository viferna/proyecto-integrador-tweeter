import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./userSlice";

function LoginForm({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.userLoginError);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loginUser(
        {
          username,
          password,
        },
        history
      )
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        required
        placeholder="Enter email o username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Enter password"
      ></input>
      <br />

      <button type="submit">Submit</button>
      <br />
      <Link to="/signup">Don´t have an account?</Link>
      {error && <div style={{ color: "red" }}>{error.message}</div>}
      <br />
    </form>
  );
}

export default LoginForm;
