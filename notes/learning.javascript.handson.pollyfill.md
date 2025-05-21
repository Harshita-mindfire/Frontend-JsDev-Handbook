---
id: 06dxxwewwp67sqivoq59mhs
title: Pollyfill
desc: ''
updated: 1745217937082
created: 1745217937082
---

## Debounce

```js
function debounce(func, wait = 0) {
  let timeoutId = null;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
```

## Throttle

```js
```

## Bind

```js
Function.prototype.myBind = function (thisArg, ...argArray) {
  return (...args2) => this.apply(thisArg, argArray.concat(args2));
};

```

## curry

```js
function add(a, b, c) {
  return a + b + c;
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return curried.bind(this, ...args);
  };
}

const curriedAdd = curry(add);
console.log(curriedAdd(2)(3, 4));
console.log(curriedAdd(2)(4)(4));
console.log(curriedAdd(2,3,4));
```

## curry with toPrimitive

```js
function curry(func) {
  return function interim(...args) {
    const fn = interim.bind(this, ...args);
    fn[Symbol.toPrimitive] = () => func.apply(this, args);
    return fn;
  };
}

function multiply(...numbers) {
  return numbers.reduce((a, b) => a * b, 1);
}
const curriedMultiply = curry(multiply);
const multiplyByThree = curriedMultiply(3);
const multiplyByFifteen = multiplyByThree(5);
console.log(multiplyByFifteen);


```

## curry 4
```js
//add(1)(2)(3)…(n)() or add(1,2....n)(3,4....n)()

function add(...args) {
  return function (...args2) {
    if (args2.length === 0) {
      return args.reduce((a, b) => a + b, 0);
    }
    return add.apply(this, args.concat(args2));
  };
}

console.log(add(1)(2)(3)(4)());

```

- another variant

```js
//curry(add)


function add(...num) {
  return num.reduce((a, b) => a + b, 0);
}

function curry(func) {
  return function curried(...args) {
    return (...args2) => {
      if (args2.length == 0) {
        return func.apply(this, args);
      }
      return curried.apply(this, args.concat(args2));
    };
  };
}

const curriedAdd = curry(add);
console.log(curriedAdd(2, 7)(6, 8, 9)());
```

## Promise.all

Can also be attempted with try catch. I have added in .then below so that I can remember that await is safer than .then when we try to resolve non promise values like 42. 
- promise.then(...)  assumes that promise is already a proper Promise (or at least a thenable). If it’s not, you'll get an error. So if I had not wrapped promise with `Promise.resolve(promise).then` in below code, p1 would end up throwing error: ❌ TypeError: val.then is not a function.

- await automatically wraps non-promises with Promise.resolve()


```js
function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    if (!iterable.length) return resolve([]);
    const result = [];
    let totalResolved = 0;

    iterable.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((val) => {
          result[i] = val;
          totalResolved++;
          if (totalResolved === iterable.length) resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
// Resolved example.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

const func = async () => {
  const resp = await promiseAll([p0, p1, p2]);

  console.log(resp);
};

func();
```

## Promise.race

```js
async function PromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(async (promise, i) => {
      try {
        const res = await promise;
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  });
}
```

## Promise.any

```js
function promiseAny(iterable) {
  let totalRejected = 0;
  const errors = [];
  return new Promise((resolve, reject) => {
    if (iterable.length === 0)
      return reject(new AggregateError([], "empty promises array passed"));
    Array.from(iterable).forEach((promise, i) => {
      Promise.resolve(promise)
        .then((val) => {
          resolve(val);
        })
        .catch((reason) => {
          totalRejected++;
          errors[i] = reason;
          if (totalRejected === iterable.length) {
            reject(new AggregateError(errors, "All promises rejected"));
          }
        });
    });
  });
}
```

## Promise.allSettled
```js
 function promiseAllSettled(iterable) {
  const result = [];
  let settledCount = 0;
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) return resolve([]);
    iterable.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((value) => {
          result[i] = {
            status: "fulfilled",
            value,
          };
          settledCount++;
        })
        .catch((reason) => {
          result[i] = {
            status: "rejected",
            reason,
          };
          settledCount++;
        })
        .finally(() => {
          if (settledCount === iterable.length) {
            resolve(result);
          }
        });
    });
  });
}

```

## Array.map

```js
Array.prototype.myMap = function (cb, thisArg) {
  const len = this.length;
  const results = new Array(len);
  for (let i = 0; i < len; i++) {
    // Ignore index if value is not defined for index (e.g. in sparse arrays).
    if (Object.hasOwn(this, i))
      results[i] = cb.call(thisArg ?? this, this[i], i, this);
  }
  return results;
};

const res = [1, 2, 3, , 4].myMap((i) => i);
console.log(res);


```

## Array.filter

```js
Array.prototype.myFilter = function (cb, thisArg) {
  const length = this.length;
  if (!length) return [];
  const results = [];
  for (let i = 0; i < length; i++) {
    if (Object.hasOwn(this, i) && cb.call(thisArg ?? this, this[i], i, this)) {
      results.push(this[i]);
    }
  }
  return results;
};

[1, 2, 3, 4].myFilter((value) => value % 2 == 0);
const res = [1, 2, 3, 4].myFilter((value) => value < 3);
console.log(res);


```

## Array.reduce
- Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

In reduce the callback fn is called with these args
- accumukator
- current value
- index
- array


```js
Array.prototype.myReduce = function (callbackFn, initialValue) {
  const len = this.length;
  const noInitialValue = initialValue === undefined;
  if (len === 0 && noInitialValue)
    return new TypeError("Reduce of empty array with no initial value");

  let acc = noInitialValue ? this[0] : initialValue;
  const startingIndex = noInitialValue ? 1 : 0;
  for (let i = startingIndex; i < len; i++) {
    if (Object.hasOwn(this, i)) {
      acc = callbackFn(acc, this[i], i, this);
    }
  }
  return acc;
};

[1, 2, 3].myReduce((prev, curr) => prev + curr, 0);
const res = [1, 2, 3].myReduce((prev, curr) => prev + curr, 4);
console.log(res);
```

## lodash get

```js
function get(objectParam, pathParam, defaultValue) {
  const paths = Array.isArray(pathParam) ? pathParam : pathParam.split(".");
  let result = { ...objectParam };
  for (let i = 0; i < paths.length; i++) {
    if (result === undefined) {
      return defaultValue;
    } else {
      result =
        typeof result === "object" &&
        result !== null &&
        result[paths[i]] !== undefined
          ? result[paths[i]]
          : defaultValue;
    }
  }
  return result;
}


```