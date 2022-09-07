import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";

import "./index.scss";

const App = () => (
  <div className="text-center mt-10">
    <Counter initialCounter={10} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
