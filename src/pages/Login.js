import React from "react";
import "../styles/Login.css";
const Login = () => {
  return (
    <div className="form">
      <label className="login" htmlFor="">
        Podaj login
        <input type="text" />
      </label>
      <label className="login password" htmlFor="">
        Podaj hasło
        <input type="password" />
      </label>
      <button className="login--button">Zaloguj</button>
    </div>
  );
};

export default Login;
