import React, {useState} from "react";

const Counter = () => {
/*
* "counter" is our value of the variable
* "setCounter" is a function with can change state of "counter"
*/

  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1 )
  }

  function decrement() {
    setCounter(counter - 1 )
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter