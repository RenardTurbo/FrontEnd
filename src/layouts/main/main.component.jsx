import React, { useState } from "react";

import { Header } from "../../components/header/header.component";
import { New } from "../../components/new/new.component";

import { MainRepository } from "./main.repository";
import "./main.style.sass";

const mainRepository = new MainRepository();

export function Main(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [customer, setCustomer] = useState("");
  const [fullfiling, setFullfiling] = useState("");

  const [issue, setIssue] = React.useState([]);
  React.useEffect(() => {
    mainRepository.getIssue().then(setIssue);
  }, []);
  console.log(issue);

  function handleClickAddNew() {
    return fetch("https://localhost:5001/api/issue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        description: description,
        customer: {
          fullname: customer
        },
        fullfiling: {
          fullname: fullfiling
        }
      })
    });
  }

  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
    mainRepository.getUser().then(setUser);
  }, []);
  console.log(user);

  return (
    <div className="main">
      <Header user={props.user} />
      <div className="main__content">
        <div className="main__title">
          {!issue.length ? (
            <div className="main__title_top">К сожалению заданий нет</div>
          ) : (
            <div className="main__title_top">Задания </div>
          )}
        </div>
        {issue.map(issue => (
          <New id={issue.id} name={issue.name} />
        ))}
        <div className="main__addTask">
          <input
            value={name}
            type="text"
            className="main__addTask_name"
            placeholder="Название"
            onChange={e => setName(e.target.value)}
          />
          <input
            value={description}
            type="text"
            className="main__addTask_description"
            placeholder="Описание"
            onChange={e => setDescription(e.target.value)}
          />
          <select onChange={e => setCustomer(e.target.value)}>
            <option value="">213</option>
            <option>{user.id}</option>
            <option value="">12321</option>
            <option value="">213213</option>
          </select>
          <select
            value={fullfiling}
            onChange={e => setFullfiling(e.target.value)}
          >
            <option value=""></option>
          </select>
          <button onClick={handleClickAddNew} className="main__addTask_button">
            add
          </button>
        </div>
      </div>
    </div>
  );
}
