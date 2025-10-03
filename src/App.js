import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Live Weather App | Developed by{" "}
        <a
          href="https://github.com/KhanFahad1448"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fahad Akhtar
        </a>{" "}
        |
      </div>
    </>
  );
}

export default App;
