import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let color = count > 0 ? "green" : count < 0 ? "red" : "black";
  function decrease() {
    setCount(count - 1);
  }
  function increase() {
    setCount(count + 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div className="container">
      <h1>Counter</h1>
      <span id="value" style={{ color: color }}>
        {count}
      </span>
      <div>
        <button onClick={decrease} className="btn btn-decrease">
          Decrease
        </button>
        <button onClick={reset} className="btn btn-reset">
          Reset
        </button>
        <button onClick={increase} className="btn btn-increase">
          Increase
        </button>
      </div>
    </div>
  );
}
export default App;
