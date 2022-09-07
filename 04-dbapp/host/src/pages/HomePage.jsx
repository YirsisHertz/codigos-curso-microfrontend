import React from "react";

import { Error } from "../components/Error";
import Counter from "mf_counter/Counter";

const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-lg">Counter MF</h1>
      <Error>
        <Counter initialCounter={10} />
      </Error>
    </div>
  );
};

export default HomePage;
