import React from "react";
import "../styles/Login.css";
const Login = () => {
  return (
    <div>
      <label class="login" htmlFor="">
        Podaj login
        <input type="text" />
      </label>
      <label class="login password" htmlFor="">
        Podaj hasło
        <input type="password" />
      </label>
      <button class="login--button">Zaloguj</button>
    </div>
  );
};

export default Login;
