import React, { useState, useEffect } from "react";
import axios from "axios";
import { Weather } from "./Components/weather";

export const WeatherApp = () => {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    };
    if (lat && long) {
      let weatherURL = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
      axios.get(weatherURL).then((resp) => {
        setData(resp);
      });
    }
    fetchdata();
  }, [lat, long]);

  return (
    <>
      <Weather weatherData={data} />
    </>
  );
};
