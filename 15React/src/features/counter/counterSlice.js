import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// actions property provides the list of reducers (functions) the slice has
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

console.log(counterSlice.reducer);

export default counterSlice.reducer;
