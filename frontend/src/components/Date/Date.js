import React from "react";

import "./Date.css";

const Date = (props) => {
  return (
    <div className="date">
      <p className="date-text">{props.day}</p>
      <h1 className="date-heading">{props.month}</h1>
      <p className="date-num">{props.date}</p>
    </div>
  );
};

export default Date;
