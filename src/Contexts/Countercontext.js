import { useState, createContext, useContext } from "react";

const Countercontext = createContext();
export const useCounter = () => useContext(Countercontext);

function CounterContextProvider(props) {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    setCount(count - 1);
  }
  function emptyCount() {
    setCount(0);
  }

  const value = { count, increaseCount, decreaseCount, emptyCount };

  return (
    <Countercontext.Provider value={value}>
      {props.children}
    </Countercontext.Provider>
  );
}

export default CounterContextProvider;
