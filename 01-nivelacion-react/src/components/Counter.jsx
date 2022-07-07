import styled from "@emotion/styled";
import { useState } from "react";
import { handleClick } from "../helpers/handleClick";

import "./Counter.css";

const BtnDiminish = styled.button`
  color: snow;
  padding: 1rem;
  background-color: #4e1313;

  &:hover {
    background-color: #812121;
    font-weight: bold;
  }
`;

const Counter = () => {
  const [counter, setCounter] = useState(5); // [ estado, cabioEstado() ]

  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button
        style={{
          padding: "1rem",
          backgroundColor: "#739122",
        }}
        onClick={() => {
          setCounter(handleClick(counter, 20));
        }}
      >
        Add
      </button>
      <BtnDiminish
        onClick={() => {
          setCounter(handleClick(counter, -5));
        }}
      >
        Diminish
      </BtnDiminish>
    </div>
  );
};

export default Counter;
