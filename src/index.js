import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [year, setYear] = useState(2050);
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");
  return (
    <>
      <h1>Year: {year}</h1>
      <button onClick={() => setYear(year + 1)}>New Year!</button>
      <h1>Manager: {manager}</h1>
      <button onClick={() => setManager("Kate")}>New Manager</button>
      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Open")}>Open</button>
      <button onClick={() => setStatus("Back in 5")}>Break</button>
      <button onClick={() => setStatus("Closed")}>Closed</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
