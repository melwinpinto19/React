import { configureStore } from "@reduxjs/toolkit";
// importing the reducer :
import CurrencyReducer from "./CurrencySlice";

// creating a store with reducer :
const store = configureStore({
  reducer: {
    currency: CurrencyReducer,
  },
});

export default store;
