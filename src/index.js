import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  React.createElement(
    "div",
    { style: { color: "red" } },
    React.createElement("h1", null, "Hello!")
  ),
  document.getElementById("root")
);
