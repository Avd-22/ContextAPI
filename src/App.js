// import logo from './logo.svg';
// import { useState } from 'react';
import "./App.css";
import ComponentA from "./Components/ComponentA";
import Mycounter from "./Components/Mycounter";
import CounterContextProvider from "./Contexts/Countercontext";

function App() {
  // const [name , setName] = useState('Anuvab');

  return (
    <CounterContextProvider>
      <div className="App">
        <h1>Context API</h1>
        <Mycounter />
        <ComponentA />
      </div>
    </CounterContextProvider>
  );
}

export default App;
