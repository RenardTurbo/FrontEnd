import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Header } from "../../components/header/header.component";
import "./registration.style.sass";

export function Registration() {
  const [fullname, setFullname] = useState("");

  function handleClickAddUser() {
    fetch("https://localhost:5001/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullname: fullname
      })
    });
  }

  return (
    <div className="registration">
      <Header />
      <div className="registration__content">
        <div className="auth-form">
          <div className="auth-form__title">Регистрация </div>
          <div className="auth-form__description">
            Зарегистрирутесь на сайте
          </div>

          <div className="auth-form__input-label">
            <label className="auth-form__label">ФИО</label>
            <input
              className="auth-form__input"
              value={fullname}
              placeholder="Full name"
              onChange={e => setFullname(e.target.value)}
            />
          </div>

          <div className="auth-form__input-label">
            <label className="auth-form__label">Login</label>
            <input className="auth-form__input" placeholder="Login" />
          </div>

          <div className="auth-form__input-label">
            <label className="auth-form__label">Email</label>
            <input
              className="auth-form__input"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="auth-form__input-label">
            <label className="auth-form__label">Password</label>
            <input
              className="auth-form__input"
              type="password"
              placeholder="password"
            />
          </div>
          <button className="auth-form__button" onClick={handleClickAddUser}>
            Зарегистрироваться
          </button>
          <div className="auth-form__registration">
            <div className="auth-form__text">Уже зарегистрированы?</div>
            <Link to="/login" className="auth-form__link">
              LogIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
