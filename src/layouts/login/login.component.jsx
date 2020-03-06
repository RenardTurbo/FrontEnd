import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { Header } from "../../components/header/header.component";

import "./login.style.sass";

export function Login(props) {
  const { user, setUser } = props;
  const [login, setlogin] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitLogin() {
    fetch("https://localhost:5001/api/identity", {
      method: "POST",
      withCredentials: "true",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: login,
        password: password
      })
    });
  }

  return (
    <div className="login">
      {user.isAutorized && <Redirect to="/" />}
      <Header />
      <div className="login__content">
        <div className="auth-form">
          <div className="auth-form__title">Вход </div>
          <div className="auth-form__description">Войдите на сайт</div>
          <div className="auth-form__login">
            <label className="auth-form__label">Login</label>
            <input
              className="auth-form__input"
              value={login}
              onChange={e => setlogin(e.target.value)}
              placeholder="Login"
            />
          </div>
          <div className="auth-form__password">
            <label className="auth-form__label">Password</label>
            <input
              className="auth-form__input"
              type="password"
              placeholder="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button onClick={onSubmitLogin} className="auth-form__button">
            Войти
          </button>
          <div className="auth-form__registration">
            <div className="auth-form__text">Нет аккаунта?</div>
            <Link to="/registration" className="auth-form__link">
              Create
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
