import { React, useEffect, useState } from "react";

function App1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Runs for every render");
  });

  useEffect(() => {
    alert("Runs for 1st render");
  }, []);

  useEffect(() => {
    alert("Runs when count is changed");
  }, [count]);

  return (
    <>
      <h2 style={{ position: "absolute", top: 0 }}>Welcome</h2>
      <div
        onClick={() => setCount(count + 1)}
        style={{ backgroundColor: "red", padding: "10px 30px" }}
      >
        +
      </div>
      <div style={{ background: "red", padding: "10px 30px" }}>{count}</div>
    </>
  );
}

export default App1;
