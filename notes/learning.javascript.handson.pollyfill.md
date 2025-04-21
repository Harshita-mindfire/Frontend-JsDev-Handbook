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
```

## curry

```js
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