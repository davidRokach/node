import { number } from "prop-types";
import { useState } from "react";

const UseCounter = (initialState = 0) => {
  const [count, setCount] = useState(initialState);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const rest = () => setCount(initialState);
  return [count, increment, decrement, rest];
};
UseCounter.prototype = {
  initialState: number,
};

export default UseCounter;
