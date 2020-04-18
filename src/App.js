import React from "react";
import logo from "./logo.svg";
import Counter from "./components/Counter";
import Buttons from "./components/Buttons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <Buttons />
    </div>
  );
}

export default App;