import React from "react";
import ReactDOM from "react-dom/client";
// adding JSX Way 1: (by importing the function)
import App from "./App.jsx";

// adding JSX Way 2:
const ele1 = (
  <>
    <a href="#">Click Here (ele1) </a>
    <h2>Hello From ele1</h2>
  </>
);

// adding JSX Way 3:
const ele2 = React.createElement(
  "p",
  { className: "abc", style: { color: "red" } },
  "Click inside P"
);

// adding JSX Way 4: (by calling the function)
function Ele3() {
  return (
    <>
      <h2>Hello From ele3</h2>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {ele1}
    <App />
    {ele2}
    <Ele3 />
    {Ele3()}
  </React.StrictMode>
);
