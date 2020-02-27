import React from "react";

import "./new.style.sass";

export function New(props) {
  const { name, description, customer, fulfilling } = props;
  return (
    <div className="new">
      <div className="new__header">
        <div className="new__title">{name}</div>
      </div>
      <div className="new__description">{description}</div>
      <div className="new__footer">
        <div className="new__author">{customer}</div>
        <div className="new__employee">{fulfilling}</div>
      </div>
    </div>
  );
}
