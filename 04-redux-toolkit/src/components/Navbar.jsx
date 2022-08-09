import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../slices/counterSlice";

const Navbar = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <nav>
      <strong>Global State: {count}</strong>
      <button onClick={() => dispatch(clear())} style={{ margin: "0px 2rem" }}>
        Clear
      </button>
    </nav>
  );
};

export default Navbar;
