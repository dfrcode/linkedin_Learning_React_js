import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function GitHubUser({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);
  if (data) {
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} style={{width: "100px", borderRadius: "50%"}}/>
      </div>
    );
  }
  return null;
}

function App() {
  return (
    <>
      <GitHubUser login="dfr8938" />
      <GitHubUser login="dfrcode" />
      <GitHubUser login="shankshel" />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
