
## Memoization

- Memoization is a way to cache a return value of a function based on its parameters.
- This makes the func that takes a long time to run, much faster after one execution.
- If the parameter changes, it will still have to reevaluate the function.

# Rate Limiting

## Debouncing

- limiting the rate of execution of a particular function
- most suitable for control events like typing or button clicks
- used in search bars etc.
- I have normally used lodash Debouncing

### Create debounce fun from scratch

```js
const handleChange = (e) => {
  console.log(e.target.value);
};
const debounce = (fn, wait) => {
  let timer;
  return function (...args) {
    const context = this; // maintains the context, so that the fn is called within the same lexical environment with same arguments as it was running before wrapping it around a debounce function.
    clearTimeout(timer); // clear timer in subsequent keystrokes.
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
};
const optiminzedFn = debounce(handleChange);
```

## Throttling

- also used for rate limiting
- Throttle is most suitable for continuous user events like resizing and scrolling.

### Create throttle fun from scratch

```js
const handleScroll = () => {
  console.log("sample method to throttle");
};
const throttle = (fn, wait) => {
  let flag = true;
  return function (...args) {
    const context = this; // maintains the context, so that the fn is called within the same lexical environment with same arguments as it was running before wrapping it around a throttle function.
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, wait);
    }
  };
};
const optiminzedFn = throttle(handleScroll);
```
