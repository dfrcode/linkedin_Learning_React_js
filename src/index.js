import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Lake({ name }) {
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

function SkiResort({ name }) {
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

function App({ season }) {
  if (season === "summer") {
    return <Lake name="Jenny Lake" />;
  } else if (season === "winter") {
    return <SkiResort name="JHMR" />;
  }
}

ReactDOM.render(<App season="winter" />, document.getElementById("root"));
