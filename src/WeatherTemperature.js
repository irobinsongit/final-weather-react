import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius ");

  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius ");
  }

  if (unit === "celsius ") {
    return (
      <div className="WeatherTemperature">
        <div className="temp-circle">
          <h1 className="temp-result">
            {Math.round(props.celsius)}
            <span className="cels-or-faren">
              °C |{" "}
              <a href="/" onClick={convertToFarenheit}>
                °F
              </a>
            </span>
          </h1>
        </div>
      </div>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <div className="temp-circle">
          <h1 className="temp-result">
            {Math.round(farenheit)}
            <span className="cels-or-faren">
              <a href="/" onClick={convertToCelsius}>
                °C{" "}
              </a>
              | °F
            </span>
          </h1>
        </div>
      </div>
    );
  }
}
