import React, { useState } from "react";

import "./Counter.css";

const CounterReact = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (value = 1) => {
    setCounter(counter + value);
  };

  return (
    <div className="container">
      <h2>Counter React: {counter}</h2>
      <button onClick={() => handleClick()}>+1</button>
      <button onClick={() => handleClick(-1)}>-1</button>
    </div>
  );
};

export default CounterReact;
