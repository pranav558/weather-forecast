import React from "react";

import "./Weather.css";

const Weather = (props) => {
  return (
    <div className="weather">
      <div className="weather-container-1">
        <p className="weather-text-high">
          High: <strong>{props.high}</strong>
        </p>
        <p className="weather-text-low">
          Low: <strong>{props.low}</strong>
        </p>
      </div>
      <div className="weather-container-2">
        <p className="weather-text">{props.conditions}</p>
      </div>
    </div>
  );
};

export default Weather;
