import { useState } from "react";
import "./App.css";
import pics from "./assets/im.bmp";
import Greeting from "./components/Greeting";
import Profile from "./components/Profile";
function App() {
  const username = prompt("enter your username");

  return (
    <div>
      <Greeting />
      <Profile />
      <p>hello{username || "Anonymous"}</p>
      <p>it looks like you {username ? "have" : "don't have"} a username</p>
      {!username && (
        <form>
          <input type="text" placeholder="enter userName" />
        </form>
      )}
    </div>
  );

  // <div className="app" style={{ textAlign: "center" }}>
  //   {
  //     <img
  //       className="image"
  //       src="https://i.pinimg.com/736x/61/f4/87/61f4877d3eddb40db04e33a6d174d882.jpg"
  //     />
  //   }
  //   {/* <p className="clickMe">
  //     {firstName} {lastName}
  //   </p> */}
  //   {/* <img className="image" src={pics} alt="pics" /> */}
  //   <p className="clickMe">
  //     {firstName} {lastName}
  //   </p>
  //   <div>
  //     {[1, 2, 3, 4, "kelvin"].map((item, index) => (
  //       <div key={index}>{item}</div>
  //     ))}

  //     {["deji", "ola", "stev", "kelvin"].map((item, index) => (
  //       <div key={index}>{item}</div>
  //     ))}

  //   </div>
  // </div>
}

export default App;
