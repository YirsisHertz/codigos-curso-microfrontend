import React from "react";
import ReactDOM from "react-dom";
import ColorList from "./components/ColorList";

const App = () => (
  <ColorList colorsList={["#00ff00", "#ffff00", "#ff00ff", "#ff0000"]} />
);

ReactDOM.render(<App />, document.getElementById("app"));
