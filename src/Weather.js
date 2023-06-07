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
      <h2>feels like 12°C </h2>
      <h1>20°C</h1>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
        alt="slightly cloudy"
      />
      <h2>slightly cloudy</h2>
      <hr />
      <ul>
        <li>༄ 6.2</li>
        <li>🌧 %65 </li>
        <li>☁︎ %0 </li>
      </ul>
    </div>
  );
}
