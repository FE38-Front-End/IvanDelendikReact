import React from "react";
import "./Counter.scss";

function Counter({ count }) {
  return (
    <div className="counter">
      <h1>{count}</h1>
    </div>
  );
}

export default Counter;
