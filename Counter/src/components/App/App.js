import React, { useState } from "react";
import "../App/App.scss";
import Counter from "../Counter/Counter";
import CounterForm from "../CounterForm/CounterForm";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Counter count={counter} />
      <CounterForm
        onDecrement={() => setCounter(counter - 1)}
        onZero={() => setCounter(0)}
        onIncrement={() => setCounter(counter + 1)}
      />
    </div>
  );
}

export default App;
