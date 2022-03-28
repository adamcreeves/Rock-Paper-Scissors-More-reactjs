import React from "react";
import ReactDOM from "react-dom";
import "./styles/Main.css";
import App from "./app/App";
import { str_019 } from "./resources/strings";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById(str_019)
);
