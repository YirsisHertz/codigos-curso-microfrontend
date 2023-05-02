import React from "react";
import ReactDOM from "react-dom/client";

import { StoreProvider, useCounterStore } from "store/store";

import Navbar from "nav/Navbar";
import Counter from "counter/Counter";

import "./index.css";

const App = () => {
  const { counter } = useCounterStore();

  return (
    <div className="container">
      <Navbar />

      <div>Name: host - {counter.value}</div>

      <Counter />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
