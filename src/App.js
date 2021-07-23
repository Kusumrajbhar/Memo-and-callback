import react, { useState, useCallback, useMemo } from "react";
import "./App.css";

import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

function App() {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);
  const [childTwoNumber, setChildTwoNumber] = useState(0);

  const memoizedCallback = useCallback(
    (number) => changeChildNumber(number),
    []
  );

  const memoizedTwoCallback = useCallback(
    (number) => changeChildTwoNumber(number),
    []
  );

  function incrementLocal() {
    setLocalNumber((state) => state + 1);
  }

  function changeChildNumber() {
    setChildNumber((state) => state + 1);
  }
  function changeChildTwoNumber() {
    setChildTwoNumber((state) => state + 1);
  }

  return (
    <div className="App">
      {/* <ChildOne changeNumber={changeChildNumber} number={childNumber} /> */}

      <ChildOne changeNumber={memoizedCallback} number={childNumber} />

      <button onClick={incrementLocal}> increment Local </button>
      <h1> local : {localNumber}</h1>

      <ChildTwo changeTwoNumber={memoizedTwoCallback} number={childTwoNumber} />
    </div>
  );
}

export default App;

//memo not compare change in props value but change in its references
//as we run this code every time new object created hence child memo consider different references hence doing re rendering
// memoizedCallback this stores a function in a same memory location so now memo will not get different props from different location
//hence stops unnecessary re-rendering

// useCallback vs useMemo:
// useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
