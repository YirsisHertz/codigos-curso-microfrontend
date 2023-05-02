import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
