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

function App({lakes}) {
  return (
    <div>
      {lakes.map((lake) => (
        <div key={lake.id}>
          <h1>{lake.name}</h1>
          <p>Accessed by: {lake.trailhead}</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App lakes={lakeList} />, document.getElementById("root"));
