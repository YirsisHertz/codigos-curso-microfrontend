import React from "react";
import ReactDOM from "react-dom/client";

import Swal from "sweetalert2";

import Header from "remote/Header";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />

    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>

    <button onClick={() => Swal.fire("Hello World!", "From React!", "success")}>
      Create Order
    </button>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
