import React from "react";
import { Link, Redirect } from "react-router-dom";

import { Header } from "../../components/header/header.component";

import "./login.style.sass";

export function Login(props) {
  const { setUser, user } = props;
  const [state, setState] = React.useState({ login: "", password: "" });
  const onLoginChange = e => {
    setState({ login: e.target.value, password: state.password });
  };
  const onPasswordChange = e => {
    setState({ login: state.login, password: e.target.value });
  };
  const onSubmitLogin = () => {
    console.log("LOGIN:", state);
    fetch(`http://localhost/api/users/${state.login}`).then(res => {
      return res.json();
    });
  };

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
              value={state.login}
              onChange={onLoginChange}
              placeholder="Login"
            />
          </div>
          <div className="auth-form__password">
            <label className="auth-form__label">Password</label>
            <input
              className="auth-form__input"
              type="password"
              placeholder="password"
              onChange={onPasswordChange}
              value={state.password}
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
