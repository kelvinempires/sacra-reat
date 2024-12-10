import { useState } from "react";
import "./App.css";
import pics from "./assets/im.bmp";
import Greeting from "./components/Greeting";
// import Profile from "./components/Profile";
function App() {
  const alertUser = (name) => {
    alert(`Hello ${name}`);
  };
  return (
    <div>
      <Greeting alertUser={alertUser} name="kelvin" gender="male" />
      <Greeting name="deji" gender="male" />
      <Greeting alertUser={alertUser}name="rihanna" gender="female" />
      {/* <Profile /> */}
    </div>
  );
}

export default App;
