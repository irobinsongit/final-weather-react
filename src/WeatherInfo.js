import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <br />
      <br />
      <br />
      <h4>{props.data.city}</h4>
      <br />
      <WeatherTemperature celsius={props.data.temperature} />
      <br />
      <br />
      <img className="weather-image" src={props.data.iconUrl} alt="sunny" />
      <h2>{props.data.description}</h2>
      <h3>
        <FormattedDate date={props.data.date} />
      </h3>
      <br />
      <hr />
      <br />
      <ul className="bottom-icons">
        <li>💨 {Math.round(props.data.wind)} kmph</li>
        <li>☁️ %{Math.round(props.data.clouds)}</li>
        <li>🥵 %{Math.round(props.data.humidity)} </li>
      </ul>
      <br />
      <hr />
      <br />
    </div>
  );
}
