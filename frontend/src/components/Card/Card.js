import React from "react";

import Date from "../Date/Date";
import Weather from "../Weather/Weather";

import "./Card.css";

const Card = (props) => {
  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(to top left, ${props.weatherData.color}, rgba(255, 255, 255, 0.8))`,
      }}
    >
      <Date
        day={props.weatherData.day}
        month={props.weatherData.month}
        date={props.weatherData.date}
      />
      <Weather
        high={props.weatherData.temp_max}
        low={props.weatherData.temp_min}
        conditions={props.weatherData.conditions}
      />
    </div>
  );
};

export default Card;
