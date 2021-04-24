import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function Hello() {
  return (
    <div>
      <h1>Hello!</h1>
      <p>Welcome to React!</p>
    </div>
  );
}

ReactDOM.render(
  <Hello />,
  document.getElementById("root")
);
