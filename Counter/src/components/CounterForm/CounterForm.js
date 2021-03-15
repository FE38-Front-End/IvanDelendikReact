import React from "react";
import "./CounterForm.scss";

function CounterForm(props) {
  return (
    <form className="button" onSubmit={(e) => e.preventDefault()}>
      <button onClick={props.onDecrement}> Minus</button>
      <button onClick={props.onZero}> Zero</button>
      <button onClick={props.onIncrement}> Plus</button>
    </form>
  );
}

export default CounterForm;
