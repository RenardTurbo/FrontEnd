import React from "react";
import { Link } from "react-router-dom";
import "./header.style.sass";

export function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">Task Manager</div>
      </Link>
      <Link to="/login">
        <div className="header__user">LogIn</div>
      </Link>
    </div>
  );
}
