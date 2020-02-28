import React, { useState } from "react";

import { MainRepository } from "../../layouts/main/main.repository";
import "./new.style.sass";

export function New(props) {
  const { name, id, description, customer, fulfilling } = props;
  const [isId, setIsId] = useState(false);
  const mainRepository = new MainRepository();
  const setId = { id };
  const [issueId, setIssueId] = React.useState([]);

  function handleClickGetId(setId) {
    setIsId(!isId);
    mainRepository.getIssueById(id).then(setIssueId);
    console.log(issueId);
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
            <div className="new__author">{customer}</div>
            <div className="new__employee">{fulfilling}</div>
            <button>Удалить</button>
            <button>Редактировать</button>
          </div>
        </div>
      )}
    </div>
  );
}
