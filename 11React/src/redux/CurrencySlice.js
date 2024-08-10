import { createSlice, nanoid } from "@reduxjs/toolkit";

// state :
const initialState = {
  value: 0,
  currencyFromValue: 0,
  currencyToValue: 0,
  currencyFromOption: "USD",
  currencyToOption: "INR",
  currencyOptions: { data: ["INR", "USD", "PKR"] },
};

export const currencySlice = createSlice({
  name: "currency", // it is the name of the reducer
  initialState, // value of the reducer (state)
  //methods to handle the state
  reducers: {
    setCurrencyFromValue: (state, action) => {
      state.currencyFromValue = action.payload;
    },
    setCurrencyToValue: (state, action) => {
      state.currencyToValue = action.payload;
    },
    setCurrencyFromOption: (state, action) => {
      state.currencyFromOption = action.payload;
    },
    setCurrencyToOption: (state, action) => {
      state.currencyToOption = action.payload;
    },
    setCurrencyOptions: (state, action) => {
      state.currencyOptions = action.payload;
    },
  },
});

// actions property provides the list of reducers (functions) the slice has
export const {
  setCurrencyFromOption,
  setCurrencyToOption,
  setCurrencyFromValue,
  setCurrencyToValue,
  setCurrencyOptions,
} = currencySlice.actions;

export default currencySlice.reducer;
