import { useState } from "react";

function CounterCode() {
  let [count, setCount] = useState(15);
  // let count = 10;

  const addValue = () => {
    console.log("Value Add", count);
    count = count + 1;
    setCount(count);
  };

  const subtractValue = () => {
    try {
      if (count > 0) {
        console.log("Value Add", count);
        count = count - 1;
        setCount(count);
      }else{
        setCount(0)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1> Counter Application in React </h1>
      <h2>Current Count: {count}</h2>
      <br></br>
      <button onClick={addValue}>Increament </button> &nbsp;
      <button onClick={subtractValue}> Decrement </button>
    </>
  );
}

export default CounterCode;
