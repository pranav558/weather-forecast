import React from "react";

import Card from "../src/components/Card/Card";

import "./App.css";

const App = () => {
  const dummyWeatherData = [
    {
      day: "Monday",
      month: "January",
      date: 10,
      temp_min: 32.94,
      temp_max: 32.99,
      conditions: "Sunny",
      color: "red",
    },

    {
      day: "Tuesday",
      month: "January",
      date: 11,
      temp_min: 25.94,
      temp_max: 28.99,
      conditions: "broken clouds",
      color: "pink",
    },
    {
      day: "Wednesday",
      month: "January",
      date: 12,
      temp_min: 28.94,
      temp_max: 30.99,
      conditions: "few clouds",
      color: "grey",
    },
    {
      day: "Thursday",
      month: "January",
      date: 13,
      temp_min: 32.94,
      temp_max: 32.99,
      conditions: "Sunny",
      color: "yellow",
    },
    {
      day: "Friday",
      month: "January",
      date: 14,
      temp_min: 24.94,
      temp_max: 28.99,
      conditions: "rain",
      color: "blue",
    },
    {
      day: "Saturday",
      month: "January",
      date: 16,
      temp_min: 24.94,
      temp_max: 28.99,
      conditions: "rain",
      color: "black",
    },
    {
      day: "Sunday",
      month: "January",
      date: 17,
      temp_min: 24.94,
      temp_max: 28.99,
      conditions: "rain",
      color: "yellow",
    },
  ];

  return (
    <div className="container">
      <h1 className="heading-primary">Weather App</h1>
      <div className="grid grid--7--cols">
        {dummyWeatherData.map((data) => {
          return <Card weatherData={data} />;
        })}
      </div>
    </div>
  );
};

export default App;
