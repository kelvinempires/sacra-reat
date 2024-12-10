import { useState } from "react";
import "./App.css";
import pics from "./assets/im.bmp";
import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
// import Profile from "./components/Profile";
function App() {
  const alertUser = (name) => {
    alert(`Hello ${name}`);
  };
  return (
    <div>
      <NavBar />
      <main className="mt-16">
        <Greeting alertUser={alertUser} name="kelvin" gender="male" />
        <Greeting alertUser={alertUser} name="deji" gender="male" />
        <Greeting alertUser={alertUser} name="rihanna" gender="female" />
        <Welcome>kelvin</Welcome>
      </main>
      {/* <Profile /> */}
    </div>
  );
}

export default App;
