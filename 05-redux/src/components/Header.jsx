import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state) => state.counter.value);

  return <h2>Header - Count: {count}</h2>;
};

export default Header;
