## Redux toolkit

- ## Creating store :

```jsx
import { configureStore } from "@reduxjs/toolkit";
// importing the reducer :
import counterReducer from "../features/counter/counterSlice";

// creating a store with reducer :
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

- ## Creating slice (reducers) :

```jsx
import { createSlice } from "@reduxjs/toolkit";

// state :
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter", // it is the name of the reducer
  initialState, // value of the reducer (state)
  //methods to handle the state
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

export default counterSlice.reducer;
```

- ## Applying it to the components :

```jsx
<Provider store={store}>
  <Counter />
</Provider>
```

- ## manipualting & accessing the values :

```jsx
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
dispatch(increment());
```
