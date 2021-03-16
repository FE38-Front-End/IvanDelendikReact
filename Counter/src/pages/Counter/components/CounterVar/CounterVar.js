import React from "react";
import "./CounterVar.scss";

function CounterVar({ count }) {
  return (
    <div className="counterVar">
      <h1>{count}</h1>
    </div>
  );
}

export default CounterVar;
