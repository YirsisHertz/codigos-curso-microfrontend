import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: store</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
