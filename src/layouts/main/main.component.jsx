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
  const [fulfilling, setFulfilling] = useState("");
  const [status, setStatus] = useState("");
  const [issue, setIssue] = useState([]);
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    mainRepository.getIssue().then(setIssue);
  }, []);
  console.log(issue);

  React.useEffect(() => {
    mainRepository.getUsers().then(setUsers);
  }, []);
  console.log(users);

  function handleClickAddNew() {
    fetch("https://localhost:5001/api/issue", {
      method: "POST",
      headers: {
        "XMLHttpRequest.withCredentials": "true",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        description: description,
        fulfilling: {
          id: fulfilling
        },
        customer: {
          id: customer
        },
        status: status
      })
    });
  }

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
          Заказчик:
          <select onChange={e => setCustomer(e.target.value)}>
            {users.map((u, i) => (
              <option value={u.id} key={i}>
                {u.fullname}
              </option>
            ))}
          </select>
          Исполнитель:
          <select onChange={e => setFulfilling(e.target.value)}>
            {users.map((u, i) => (
              <option value={u.id} key={i}>
                {u.fullname}
              </option>
            ))}
          </select>
          Статус:
          <select onChange={e => setStatus(e.target.value)}>
            <option value="готов">готов</option>
            <option value="исправлен">исправлен</option>
            <option value="в обработке">в обработке</option>
            <option value="открыт">открыт</option>
          </select>
          <button onClick={handleClickAddNew} className="main__addTask_button">
            add task
          </button>
        </div>
      </div>
    </div>
  );
}
