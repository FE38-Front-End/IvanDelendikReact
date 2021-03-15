import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App/App";

ReactDOM.render(
  <React.StrictMode>
    <div className="layout">
      <App />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
