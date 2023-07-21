import React from "react";
import axios from "axios";
import backgroundImage from "../Weather/sky.jpg";
import "../Weather/index.scss";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
function Weather() {
  const [weatherData, setWeatherData] = React.useState(null);
  const [searchData, setSearchData] = React.useState("");
  const [cityNames, setCityNames] = React.useState([]);
  const API_KEY = "62d13f98c1d948c2a0e163816232107";
  const fetchWeatherData = async () => {
    console.log("get request");
    const { data } = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchData}`
    );
    console.log(data);
    setWeatherData(data);
  };
  const fetchCityNames = async () => {
    try {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${searchData}`
      );
      setCityNames(data);
      console.log(cityNames);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    console.log("success");
    setSearchData(e.target.value);
    console.log(e.target.value);
    fetchCityNames();
  };
  return (
    <div
      className="container weather-cr"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <h5 className="weather-title">Weather App</h5>
      <div  className="searchArea">
        <input
          type="text"
          className="searchInput"
          placeholder="Enter a City..."
          onChange={handleChange}
          value={searchData}
        />

        {cityNames.map((city) => (
          <span key={city.id} value={city.name}>
            {city.name}
          </span>
        ))}
        <button onClick={fetchWeatherData} className="searchBtn" type="submit">
          Search
        </button>
      </div>
      {weatherData ? (
        <div className="container information-cr">
          <div className="row information-row">
            <div className="weatherInformation">
              <div className="weatherIcon">
                <WbSunnyRoundedIcon htmlColor="orange" sx={{ fontSize: 150 }} />
              </div>
              <div className="information">
                <p className="day">Today</p>
                <h2>{weatherData.location.name}</h2>
                <p className="temparature">
                  Temparature: {weatherData.current.temp_c}{" "}
                </p>
                <span style={{ color: "white" }}>
                  {weatherData.current.condition.text}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container information-cr">
          <div className="row information-row">
            <div className="weatherInformation">
              <div className="weatherIcon">
                <WbSunnyRoundedIcon htmlColor="orange" sx={{ fontSize: 150 }} />
              </div>
              <div className="information">
                <p className="day">Today</p>
                <h2>teyin olunmayib</h2>
                <p className="temparature">Temparature: teyin olunmayib </p>
                <span style={{ color: "white" }}>teyin olunmayib</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
