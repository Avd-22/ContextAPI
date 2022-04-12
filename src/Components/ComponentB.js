import React from "react";
import { useCounter } from "../Contexts/Countercontext";

const ComponentB = () => {
  const { increaseCount } = useCounter();

  return (
    <div style={{ backgroundColor: "red" }}>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
};

export default ComponentB;
