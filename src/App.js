import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/irobinsongit/final-weather-react"
            target="_blank"
            rel="noreferrer"
          >
            This project was created by Izzy and is open sourced.
          </a>
        </footer>
      </div>
    </div>
  );
}
