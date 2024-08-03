import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App name="Melwin" imageName="MyImage1" />
    <App name="Melwin" imageName="MyImage2" />
    <App name="Melwin" imageName="MyImage3" />
    <App name="Melwin" imageName="MyImage4" />
    <App name="Melwin" imageName="MyImage5" />
  </React.StrictMode>
);
