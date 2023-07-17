import React from "react";
import backgroundImage from "../Weather/sky.jpg";
import "../Weather/index.scss";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
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
        <input
          type="text"
          className="searchInput"
          placeholder="Enter a City..."
        />
      </div>
      <div className="container information-cr">
        <div className="row information-row">
          <div className="weatherInformation">
            <div className="weatherIcon">
              <WbSunnyRoundedIcon htmlColor="orange" sx={{ fontSize: 150 }} />
            </div>
            <div className="information">
              <p className="day">Today</p>
              <h2>Baku</h2>
              <p className="temparature">Temparature: 17 C </p>
              <span style={{ color: "white" }}>clear sky</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
