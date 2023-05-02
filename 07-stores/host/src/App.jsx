import React from "react";
import ReactDOM from "react-dom";

import Navbar from "nav/Navbar";
import Counter from "counter/Counter";

import "./index.css";

const App = () => (
  <div className="container">
    <Navbar />

    <div>Name: host</div>

    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
