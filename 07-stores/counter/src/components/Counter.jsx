import React from "react";

import Swal from "sweetalert2";

import { useCounterStore } from "store/store";

import "./counter.css";

const Counter = () => {
  const { increment, decrement, counter } = useCounterStore();

  const handleIncrementClick = () => {
    if (counter.value < 10) {
      increment();
      return;
    }

    Swal.fire(
      "No puedes incrementar",
      "No puedes incrementar mas de 10",
      "error"
    );
  };

  return (
    <>
      <h3>Counter: {counter.value}</h3>

      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
