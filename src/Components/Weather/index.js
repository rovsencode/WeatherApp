import React from "react";
import backgroundImage from "../Weather/sky.jpg";
import "../Weather/index.scss";
function Weather() {
  return (
    <div
      className="container weather-cr"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <h5 className="weather-title">Weather App</h5>
      <div className="searchArea">
        <input type="text" className="searchInput" placeholder="Enter a City..." />
      </div>
    </div>
  );
}

export default Weather;
