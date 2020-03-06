import React, { useState } from "react";

import { MainRepository } from "../../layouts/main/main.repository";
import "./new.style.sass";

export function New(props) {
  const { name, id } = props;
  const [hideIssue, setHideIssue] = useState(false);
  const mainRepository = new MainRepository();
  const [issueById, setIssueById] = useState({});
  const [description, setDescription] = useState(
    "" ? issueById.description : "333"
  );
  const [customer, setCustomer] = useState("");
  const [fulfilling, setFulfilling] = useState("");
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState([]);

  function handleClickGetId() {
    setHideIssue(!hideIssue);
    mainRepository.getIssueById(id).then(res => {
      setIssueById(res);
      setDescription(res.description);
    });
    mainRepository.getUsers().then(setUsers);
    console.log(users);
    console.log(issueById);
  }

  function handleClickDeleteNew($id) {
    fetch("https://localhost:5001/api/issue/" + id, {
      method: "DELETE",
      mode: "cors",
      cache: "default",
      credentails: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id
      })
    });
  }

  function handleClickRedactNew($id) {
    fetch("https://localhost:5001/api/issue/" + id, {
      method: "PUT",
      mode: "cors",
      cache: "default",
      credentails: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
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
    <div className="new">
      <div className="new__header">
        <div className="new__title" onClick={handleClickGetId}>
          {name}
        </div>
      </div>

      {hideIssue && (
        <div>
          <div className="new__description">
            Описание:
            <input
              onChange={e => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="new__footer">
            <div className="new__author">
              заказчик:
              <select onChange={e => setCustomer(e.target.value)}>
                <option
                  selected
                  value={issueById.customer ? issueById.customer.fullname : ""}
                >
                  {issueById.customer ? issueById.customer.fullname : ""}
                </option>
                {users.map((u, i) => (
                  <option value={u.id} key={i}>
                    {u.fullname}
                  </option>
                ))}
              </select>
            </div>
            <div className="new__fullfiling">
              Исполнитель:
              <select onChange={e => setFulfilling(e.target.value)}>
                <option
                  selected
                  value={
                    issueById.fulfilling ? issueById.fulfilling.fullname : ""
                  }
                >
                  {issueById.fulfilling ? issueById.fulfilling.fullname : ""}
                </option>
                {users.map((u, i) => (
                  <option value={u.id} key={i}>
                    {u.fullname}
                  </option>
                ))}
              </select>
            </div>
            <div className="new__status">
              Статус:
              <select onChange={e => setStatus(e.target.value)}>
                <option selected value={issueById.status}>
                  {issueById.status}
                </option>
                <option value="готов">готов</option>
                <option value="исправлен">исправлен</option>
                <option value="в обработке">в обработке</option>
                <option value="открыт">открыт</option>
              </select>
            </div>
            <div className="new__button">
              <button onClick={handleClickDeleteNew}>Удалить</button>
              <button onClick={handleClickRedactNew}>Редактировать</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
