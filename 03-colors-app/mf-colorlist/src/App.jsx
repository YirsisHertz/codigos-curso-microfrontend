import React from "react";
import ReactDOM from "react-dom";
import ColorList from "./components/ColorList";

const App = () => {
  return (
    <>
      <ColorList colorsList={[]} />
      <ColorList colorsList={["#0fcc7a", "#c90fcc", "#cc480f"]} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
