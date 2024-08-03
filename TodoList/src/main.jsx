import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);
