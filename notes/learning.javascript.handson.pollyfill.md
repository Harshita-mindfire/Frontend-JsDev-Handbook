---
id: 06dxxwewwp67sqivoq59mhs
title: Pollyfill
desc: ''
updated: 1745217937082
created: 1745217937082
---

## Debounce

```js
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

## Promise.all

```js
const p1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve(12), 1000));

Object.prototype.myAll = function (arr) {
    const promiseValues = [];
    return new Promise((resolve, reject) => {
      let totalResolved = 0;
      arr.forEach((promise, index) => {
        return promise
          .then((val) => {
            promiseValues[index] = val;
            totalResolved++;
            if (totalResolved === arr.length) {
              resolve(promiseValues);
            }
          })
          .catch((err) => reject(err));
      });
    });
  };

  Promise.myAll([p1, p2, p3]).then(console.log).catch(console.log);
```

## Promise.race

```js
```

## Promise.any

```js
```

## Promise.allSettled
```js
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