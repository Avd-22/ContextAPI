import React from "react";
import { useCounter } from "../Contexts/Countercontext";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const { count } = useCounter();

  return (
    <div style={{ backgroundColor: "wheat" }}>
      <p>count: {count}</p>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
