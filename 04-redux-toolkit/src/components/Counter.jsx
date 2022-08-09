import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, incrementByAmount } from "../slices/counterSlice";

import reactLogo from "../assets/react.svg";
import Navbar from "./Navbar";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />

      <div className="App">
        <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <h1>Counter: {count}</h1>
        <hr />
        <h3>Redux Toolkit Example</h3>
        <div className="card">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>
            Increment +5
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
