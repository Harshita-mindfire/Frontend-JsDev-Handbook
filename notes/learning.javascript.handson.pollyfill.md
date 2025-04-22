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
```

## Array.filter

```js
```

## Array.reduce

```js
```