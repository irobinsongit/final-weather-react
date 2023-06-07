import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="→" className="form-submit" />
            </div>
          </div>
        </form>
        <br />
        <br />
        <br />
        <h4>{weatherData.city}</h4>
        <br />
        <div className="temp-circle">
          <h1 className="temp-result">
            {Math.round(weatherData.temperature)}
            <strong className="celc-or-faren">°C</strong>
          </h1>
        </div>
        <br />
        <br />
        <img className="weather-image" src={weatherData.iconUrl} alt="sunny" />
        <h2>{weatherData.description}</h2>
        <h3>
          <FormattedDate date={weatherData.date} />
        </h3>
        <br />
        <hr />
        <br />
        <ul className="bottom-icons">
          <li>༄ {Math.round(weatherData.wind)} kmph</li>
          <li>🌧 %65 </li>
          <li>☁︎ %{Math.round(weatherData.humidity)} </li>
        </ul>
      </div>
    );
  } else {
    const apiKey = "8944afa6845bd7c413a687258d3211ef";
    let city = "Leeds";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
