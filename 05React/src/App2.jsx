import React, { useRef, useState } from "react";

function App2() {
  // value is reinitialized for every render
  let count1 = 0;
  //   useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
  const count2 = useRef(0);
  const [state, setState] = useState(0);
  console.log(count1, count2);
  //useRef() can also be used to refer jsx objects
  const refer = useRef();
  console.log(refer);

  return (
    <>
      <h2 style={{ position: "absolute", top: 0 }}>Welcome</h2>
      <div
        onClick={() => {
          count1++;
          count2.current++;
          setState(state + 1);
        }}
        style={{ backgroundColor: "red", padding: "10px 30px" }}
      >
        +
      </div>
      <div style={{ background: "red", padding: "10px 30px" }} ref={refer}>
        {count1} And {count2.current}
      </div>
    </>
  );
}

export default App2;
