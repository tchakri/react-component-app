import { useState } from "react";
import { Button } from "../Button/Button";

const Counter = ({ color }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <span style={{ color }}>Counter: {count}</span>
      <Button
        label="+"
        backgroundColor="#2B860B"
        onClick={() => setCount(count + 1)}
      ></Button>
      <Button
        label="-"
        backgroundColor="#2B860B"
        onClick={() => setCount(count - 1)}
      ></Button>
    </>
  );
};

export default Counter;
