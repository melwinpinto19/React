<!-- React Hooks -->

## useState() : (App.jsx)

- ### useState() re renders the component whenever its state is changed . so we dont have to manually change the values in the interface of the state.

## useEffect() : (App1.jsx)

- ### The useEffect() takes callback as a parameter and runs every time when the staes specifed in the dependecy array change
- ### There are two variations
    - ### 1. [] array (Runs only once)
    - ### 2. no dependency (Runs each time)


## useRef() : (App2.jsx)
- ###   useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.(i.e its value is not initialized again for every render)