import React, { useState } from "react";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            Sat
            <div className="WeatherForecast-image-cont">
              <img
                className="WeatherForecast-image"
                src="https://openweathermap.org/img/wn/10d.png"
              />
            </div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">20° |</span>
              <span className="WeatherForecast-temperature-min">19°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "8944afa6845bd7c413a687258d3211ef";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    Axios.get(apiUrl).then(handleResponse);
  }
}
