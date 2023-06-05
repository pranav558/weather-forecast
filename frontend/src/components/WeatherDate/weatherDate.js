import React from "react";

import "./weatherDate.css";

const weatherDate = (props) => {
  return (
    <div className="date">
      <p className="date-text">{props.day}</p>
      <h1 className="date-heading">{props.month}</h1>
      <p className="date-num">{props.date}</p>
    </div>
  );
};

export default weatherDate;
