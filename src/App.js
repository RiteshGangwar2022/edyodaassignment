import React from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Left from "./components/left/Left";
import Right from "./components/right/Right";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="bottomcontainer">
        <div className="left">
          <Left />
        </div>
        <div className="right">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default App;
