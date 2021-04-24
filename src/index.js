import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const lakeList = [
  {
    id: 1,
    name: "Echo",
    trailhead: "Echo",
  },
  {
    id: 2,
    name: "Maud",
    trailhead: "Wrights",
  },
  {
    id: 3,
    name: "Velma",
    trailhead: "Bayview",
  },
];

function App(props) {
  return (
    <div>
      {props.lakes.map((lake) => (
        <div id={lake.id}>
          <h1>{lake.name}</h1>
          <p>{Lake.trailhead}</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App lakes={lakeList} />, document.getElementById("root"));
