import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <br />
      <br />
      <br />
      <h4>{props.data.city}</h4>
      <br />
      <div className="temp-circle">
        <h1 className="temp-result">
          {Math.round(props.data.temperature)}
          <strong className="celc-or-faren">°C</strong>
        </h1>
      </div>
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
        <li>༄ {Math.round(props.data.wind)} kmph</li>
        <li>🌧 %65 </li>
        <li>☁︎ %{Math.round(props.data.humidity)} </li>
      </ul>
    </div>
  );
}
