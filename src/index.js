import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let city = {
  name: "Madrid",
  country: "Spain",
};

ReactDOM.render(
  <h1 id="heading" className="cool_text">
    {city.name} is in {city.country}
  </h1>,
  document.getElementById("root")
);
