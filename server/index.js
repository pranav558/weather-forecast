const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.post("/weather/forecast", async (req, res) => {
    // const bearerToken = req.headers.authorization;
    // if (!bearerToken || !bearerToken.startsWith('Bearer ')) {
    //   return res.status(401).json({ error: 'Unauthorized' });
    // }

  const location = req.body.location;
  console.log(location);
  if (!location) {
    return res.status(400).json({ error: "Invalid request" });
  }

  //   const authToken = bearerToken.split(' ')[1];
  const authToken = "Zjg2ZDY4MGUtNzcyNS00MWY1LWI5ZjMtOTU4ZTdmMmNiOTY1";

  try {
    const response = await axios.post(
      "https://api.m3o.com/v1/weather/Forecast",
      {
        days: "7",
        location: location,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    console.log(response.data.forecast);
    return res.json(response.data.forecast);
  } catch (error) {
    console.error("Failed to retrieve weather forecast:", error);
    return res
      .status(500)
      .json({ error: "Failed to retrieve weather forecast" });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
