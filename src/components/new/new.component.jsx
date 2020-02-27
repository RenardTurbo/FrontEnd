import React, { useState } from "react";

import { MainRepository } from "../../layouts/main/main.repository";
import "./new.style.sass";

export function New(props) {
  const { name, description, customer, fulfilling, id } = props;
  const [isId, setIsId] = useState(false);
  const mainRepository = new MainRepository();
  const [issue, setIssue] = React.useState([]);

  function handleClickGetId() {
    setIsId(!isId);
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
          <div className="new__description">{description}</div>
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
