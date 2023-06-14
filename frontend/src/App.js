import React, { useState, useEffect } from "react";

import Card from "../src/components/Card/Card";

import "./App.css";

const App = () => {
  const [location, setLocation] = useState("Hupari");
  const [weathersData, setWeathersData] = useState([]);

  // const cityName = "Pune";

  const searchWeather = async () => {
    await fetch(`http://localhost:5000/weather/forecast`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ location: location }),
    })
      .then((res) => res.json())
      .then((res) => {
        const data = res;
        console.log(data);
        setWeathersData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    searchWeather();
  }, []);

  return (
    <div className="container">
      <h1 className="heading-primary">Weather App</h1>
      <div className="grid grid--7--cols">
        {weathersData.map((data) => {
          return <Card key={data.date} weatherData={data} />;
        })}
      </div>
    </div>
  );
};

export default App;
