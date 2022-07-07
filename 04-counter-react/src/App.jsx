import React from "react";
import ReactDOM from "react-dom";
import CounterReact from "./components/Counter";

const App = () => <CounterReact />;

ReactDOM.render(<App />, document.getElementById("app"));
