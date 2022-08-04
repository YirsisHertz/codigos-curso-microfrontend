import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 10,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    clear: () => {
      state.count = 0;
    },
  },
});

export const { increment } = counterSlice.actions;
