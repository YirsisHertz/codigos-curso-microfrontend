import React, { useState } from "react";
import styled from "@emotion/styled";

import Button from "./Button";

import "./Counter.css";

const Success = styled.span`
  color: lime;
`;

const Error = styled.span`
  color: tomato;
`;

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="Counter-container">
      <h2>
        Counter:{" "}
        {counter < 0 ? <Error>{counter}</Error> : <Success>{counter}</Success>}
      </h2>

      <Button onClick={() => setCounter(counter + 1)} text="+1" />
      <Button onClick={() => setCounter(counter - 1)} text="-1" />
    </div>
  );
};

export default Counter;
