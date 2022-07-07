import React from "react";
import ReactDOM from "react-dom";

import Navbar from "navbar/Navbar";
import CounterReact from "counterReact/CounterReact";

import "./index.css";

const App = () => (
  <>
    <Navbar />
    <div className="App-container">
      <h1>Counter React</h1>
      <CounterReact />
    </div>
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
