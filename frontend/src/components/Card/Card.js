import React from "react";

import WeatherDate from "../WeatherDate/weatherDate";
import Weather from "../Weather/Weather";

import "./Card.css";

const Card = (props) => {
  const date = new Date(props.weatherData.date);
  // const options = { weekday: "long" };
  const dayString = date.toLocaleDateString(undefined, { weekday: "long" });
  // const options = { month: "long" };
  const monthString = date.toLocaleDateString(undefined, { month: "long" });

  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(to top left, ${props.weatherData.color}, rgba(255, 255, 255, 0.8))`,
      }}
    >
      <WeatherDate day={dayString} month={monthString} date={date.getDate()} />
      <Weather
        high={props.weatherData.max_temp_c}
        low={props.weatherData.min_temp_c}
        conditions={props.weatherData.condition}
      />
    </div>
  );
};

export default Card;
