import React from "react";
import "../styles/Login.css";
const Login = () => {
  return (
    <>
      <h3 className="contact__header">admin panel</h3>
      <div className="form">
        <label className="login">
          login
          <input className="login__input" type="text" />
        </label>
        <label className="login password">
          password
          <input className="login__input--password" type="password" />
        </label>
        <button className="login--button">Log in</button>
      </div>
    </>
  );
};

export default Login;
