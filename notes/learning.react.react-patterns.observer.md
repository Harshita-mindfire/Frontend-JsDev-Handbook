---
id: umv1qlgcft10gzj348d0ou0
title: Observer Pattern with events
desc: ''
updated: 1736778548128
created: 1736778101536
---

Event emitters

## Example

- Button.jsx
```jsx
import { emitter } from "../App";

const Buttons = (props) => {
  const onIncrementCounter = () => {
    emitter.emit("increment");
  };
  const onDecrementCounter = () => {
    emitter.emit("decrement");
  };
  return (
    <div>
      <button onClick={onIncrementCounter}>➕</button>
      <button onClick={onDecrementCounter}>➖</button>
    </div>
  );
};
export default Buttons;

```
- Counter.jsx


```jsx
import { useEffect, useState } from "react";
import { emitter } from "../App";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const onIncrement = () => {
      setCount((count) => count + 1);
    };
    const onDecrement = () => {
      setCount((count) => count - 1);
    };
    emitter.on("increment", onIncrement);
    emitter.on("decrement", onDecrement);
    return () => {
      emitter.off("increment", onIncrement);
      emitter.off("decrement", onDecrement);
    };
  }, []);
  return <div>#: {count}</div>;
};
export default Counter;

```