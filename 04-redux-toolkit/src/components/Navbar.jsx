import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <nav>
      <strong>Global State: {count}</strong>
      <button style={{ margin: "0px 2rem" }}>Clear</button>
    </nav>
  );
};

export default Navbar;
