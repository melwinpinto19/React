import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
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
    </>
  );
}

export default App;
