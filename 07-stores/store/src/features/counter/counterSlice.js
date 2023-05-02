import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
  },
});

export const { increment } = counterSlice.actions;
