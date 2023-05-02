import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    clear: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, clear } = counterSlice.actions;
