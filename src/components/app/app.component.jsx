import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Main } from "../../layouts/main/main.component";
import { Login } from "../../layouts/login/login.component";
import { Registration } from "../../layouts/registration/registartion.component";
import "./app.style.sass";
import { Task } from "../../layouts/task/task.component";

export function App() {
  const [user, setUser] = React.useState({
    id: "",
    name: "",
    email: "",
    isAdmin: false,
    isAutorized: false
  });
  console.log("USER", user);
  return (
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login setUser={setUser} user={user} />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/" exact>
          <Main user={user} />
        </Route>
        <Route path="/task">
          <Task />
        </Route>
      </Switch>
    </div>
  );
}
