import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h4>feels like 12°C </h4>
      <br />
      <div className="temp-circle">
        <h1 className="temp-result">
          20<strong className="celc-or-faren">°C</strong>
        </h1>
      </div>
      <br />
      <br />
      <img
        className="weather-image"
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="sunny"
      />
      <h2>slightly cloudy</h2>
      <br />
      <hr />
      <br />
      <ul className="bottom-icons">
        <li>༄ 6.2</li>
        <li>🌧 %65 </li>
        <li>☁︎ %0 </li>
      </ul>
    </div>
  );
}
