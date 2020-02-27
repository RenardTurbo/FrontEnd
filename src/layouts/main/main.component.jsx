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
        {issue.map((issue, index) => (
          <New
            key={index}
            name={issue.name}
            description={issue.description}
            author={issue.customer}
            date={issue.date}
            employee={issue.fulfilling}
          />
        ))}
        <div className="main__addTask">
          <input
            type="text"
            className="main__addTask_name"
            placeholder="Название"
          />
          <input
            type="text"
            className="main__addTask_description"
            placeholder="Описание"
          />
          <input
            type="text"
            className="main__addTask_customer"
            placeholder="Создатель"
          />
          <input
            type="text"
            className="main__addTask_fulfilling"
            placeholder="Работник"
          />
          <button className="main__addTask_button">add</button>
        </div>
      </div>
    </div>
  );
}
