import React from "react";

import { Header } from "../../components/header/header.component";
import { New } from "../../components/new/new.component";

import { MainRepository } from "./main.repository";
import "./main.style.sass";

const mainRepository = new MainRepository();

export function Main(props) {
  const [issue, setIssue] = React.useState([]);
  React.useEffect(() => {
    mainRepository.getIssue().then(setIssue);
  }, []);
  console.log(issue);

 function handleClickAddNew(){
     let name =$(#name).value()
     let description = $(#description).value()
     let customer = $(#customer).value()
     let fullfiling = $(#fullfiling).value()

     return fetch({
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name,
            "description": description,
            "customer": {
                "id": id,
                "fullname": customer,
            },
            "fullfiling": {
                "id": id,
                "fullname": fullfiling,
            },
        }),
     })
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
            id="name"
            type="text"
            className="main__addTask_name"
            placeholder="Название"
          />
          <input
            type="text"
            id="description"
            className="main__addTask_description"
            placeholder="Описание"
          />
          <select id="customer">
            <option value={setUser}>{setUser}</option>
          </select>
          <select id="fullfiling">
            <option value=""></option>
          </select>
          <button onClick={handleClickAddNew} className="main__addTask_button">add</button>
        </div>
      </div>
    </div>
  );
}
