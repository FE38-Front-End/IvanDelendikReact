import React, { useState } from "react";
import "./Counter.scss";
import CounterVar from "./CounterVar/CounterVar";
import CounterForm from "./CounterForm/CounterForm";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="Counter">
      <CounterVar count={counter} />
      <CounterForm
        onDecrement={() => setCounter(counter - 1)}
        onZero={() => setCounter(0)}
        onIncrement={() => setCounter(counter + 1)}
      />
    </div>
  );
}

export default Counter;
