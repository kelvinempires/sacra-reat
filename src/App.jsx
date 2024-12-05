import { useState } from "react";
import "./App.css";
import pics from "./assets/im.bmp"

function App() {
const firstName = "kelvin"
const lastName = "doe"


  return (
    <div className="app" style={{ textAlign: "center" }}>
      {
        <img
          className="image"
          src="https://i.pinimg.com/736x/61/f4/87/61f4877d3eddb40db04e33a6d174d882.jpg"
        />
      }
      <p className="clickMe">
        {firstName} {lastName}
      </p>
      <img className="image" src={pics} alt="pics" />
      <p className="clickMe">
        {firstName} {lastName}
      </p>
    </div>
  );
}

export default App;
