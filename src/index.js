import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`Field1: ${val}`, [val]);
  });

  useEffect(() => {
    console.log(`Field2: ${val2}`, [val, val2]);
  });

  return (
    <>
      <label>
        Favorite Phrase:
        <input value={val} onChange={(e) => setVal(e.target.value)} />
      </label>
      <br />
      <label>
        Second Favorite Phrase:
        <input value={val2} onChange={(e) => setVal2(e.target.value)} />
      </label>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
