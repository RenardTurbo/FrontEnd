import React, { useState } from "react";

import { MainRepository } from "../../layouts/main/main.repository";
import "./new.style.sass";

export function New(props) {
  const { name, id, description, customer, fulfilling } = props;
  const [isId, setIsId] = useState(false);
  const mainRepository = new MainRepository();
  const [issueId, setIssueId] = React.useState([]);

  function handleClickGetId($id) {
    setIsId(!isId);
    mainRepository.getIssueById(id).then(setIssueId);
    console.log(issueId);
  }

  function handleClickDeleteNew($id) {
    return fetch({
      url: "https://localhost:5001/api/delete",
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        id: id
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

      {isId && (
        <div>
          <div className="new__description">{issueId.description}</div>
          <div className="new__footer">
            <div className="new__author">
              заказчик: {issueId.customer ? issueId.customer.fullname : ""}
            </div>
            <div className="new__fullfiling">
              Исполнитель:
              {issueId.fulfilling ? issueId.fulfilling.fullname : ""}
            </div>
            <div className="new__button">
              <button onClick={handleClickDeleteNew}>Удалить</button>
              <button>Редактировать</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
