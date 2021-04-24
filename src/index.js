import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  React.createElement(
    "ul",
    { style: { color: "red" } },
    React.createElement("li", null, "Hot Dogs"),
    React.createElement("li", null, "Hamburgers"),
    React.createElement("li", null, "Pizza")
  ),
  document.getElementById("root")
);
