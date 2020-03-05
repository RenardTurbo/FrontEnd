import React from "react";
import "./task.style.sass";
import { Header } from "../../components/header/header.component";

export function Task(props) {
  const { issueId, id } = props;
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
  return (
    <div className="task">
      <Header />
      <div className="task__header">
        <div className="task__header_name">{issueId.name}</div>
        <div className="task__header_button">
          <button onClick={handleClickDeleteNew}>Удалить</button>
          <button>Редактировать</button>
        </div>
      </div>
      <div className="task__description">{issueId.description}</div>
      <div className="task__footer">
        <div className="task__footer_customer">
          {issueId.customer ? issueId.customer.fullname : ""}
        </div>
        <div className="task__footer_fulfilling">
          {issueId.fulfilling ? issueId.fulfilling.fullname : ""}
        </div>
        <div className="task__foote_status">{issueId.status}</div>
      </div>
    </div>
  );
}
