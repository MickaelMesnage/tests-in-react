import { useState } from "react";

export type CounterProps = {
  initialValue?: number;
  min?: number;
  max?: number;
};

export const Counter = ({ initialValue = 0, max, min }: CounterProps) => {
  const [count, setCount] = useState<number>(initialValue);

  const handleIncrement = () => {
    if (max && count >= max) return;
    setCount((currentCount) => currentCount + 1);
  };
  const handleDecrement = () => {
    if (min && count <= min) return;
    setCount((currentCount) => currentCount - 1);
  };

  return (
    <>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <span>Count is {count}</span>
    </>
  );
};
