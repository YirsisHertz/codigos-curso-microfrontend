import React from "react";

import { Provider } from "react-redux";
import { store } from "./store/index";

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
