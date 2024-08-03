import { useState } from "react";

function App() {
  let [color, setColor] = useState("beige");

  return (
    <>
      <div className="box" style={{ backgroundColor: color }}>
        <footer>
          <div
            className="red"
            onClick={() => setColor("red")}
            style={{ background: "linear-gradient(red 0 50%, blue 50% )" }}
          >
            red
          </div>
          <div
            className="green"
            onClick={() => setColor("green")}
            style={{ background: "linear-gradient(green 0 50%, blue 50% )" }}
          >
            green
          </div>
          <div
            className="blue"
            onClick={() => setColor("blue")}
            style={{ background: "linear-gradient(blue 0 50%, blue 50% )" }}
          >
            blue
          </div>
          <div
            className="yellow"
            onClick={() => setColor("yellow")}
            style={{ background: "linear-gradient(yellow 0 50%, blue 50% )" }}
          >
            yellow
          </div>
          <div
            className="brown"
            onClick={() => setColor("brown")}
            style={{ background: "linear-gradient(brown 0 50%, blue 50% )" }}
          >
            brown
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
