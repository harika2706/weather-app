import React, { useEffect, useState } from "react";
import moon from "../images/moon.webp";
import icon from "../images/weather_icon.png";
import background from "../images/background.png";
import "./weather.css";
export const Weather = (props) => {
  const [city, setCity] = useState("");

  useEffect(() => {
    if (props && props.weatherData) {
      console.log(props.weatherData);
    }
  }, [city]);

  return (
    <div className="weatherMainDiv">
      <div className="row header">
        <div className="col-4">
          <img title="icon" src={icon} width="50px" />
        </div>
        <div className="col-4">
          <p className="weather_heading">Weather forecasting</p>
        </div>
        <div className="col-4">
          <div>
            <img title="weather_mode" src={moon} />
          </div>
        </div>
      </div>
      <div
        className="row weather_section"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
    </div>
  );
};
