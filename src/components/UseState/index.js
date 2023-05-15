import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  return (
    <div className="state">
      <h1>UseState Component</h1>
      <button>Dark</button>
      <button>Light</button>
      <h2>DISPLAY COUNT HERE</h2>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
};

console.log(UseState("light"));

export default UseState;
