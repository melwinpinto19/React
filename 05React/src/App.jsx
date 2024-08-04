import { useRef } from "react";
import { useState } from "react";
import App2 from "./App2.jsx";

function App() {
  console.log("First Line ", Math.random());

  const [count, setCount] = useState(0);
  // let data = useRef(0);

  // console.log("2nd Line !", count);
  // console.log("3rd Line !", data.current);

  const add = () => {
    setCount(count + 1);
    // data.current++;
  };

  const remove = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return (
    <>
      <div className="box f-c">
        <div className="add f-c" onClick={add}>
          +
        </div>
        <div className="value f-c">{count}</div>
        <div className="remove f-c" onClick={remove}>
          -
        </div>
      </div>
      <div className="f-c">Value is {count}</div>
      <App2 />
    </>
  );
}

export default App;
