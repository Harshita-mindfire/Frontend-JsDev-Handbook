---
id: oj1cwazkncn3i7wbs36pcqx
title: Promises Exercise
desc: ''
updated: 1679507725721
created: 1679507725721
---


- 1

```js
Promise.resolve(1) // fulfilled : 1
  .then(() => 2) // function is passed, return value is 2 => fulfilled : 2
  .then(3) // non-function is passed, previous fulfillment value 2 is used => fulfilled : 2
  .then((value) => value * 3) // function is passed, value is 2, return value is 6 => fulfilled: 6
  .then(Promise.resolve(4)) // Promise object is not function, previous fulfillment value 6 is used => fulfilled : 6
  .then(console.log); // 6 gets logged
```

Result: 6

- 2

```js
Promise.resolve(1)
  .then((val) => {
    console.log(val);
    return val + 1;
  })
  .then((val) => {
    console.log(val);
  })
  .then((val) => {
    console.log(val);
    return Promise.resolve(3).then((val) => {
      console.log(val);
    });
  })
  .then((val) => {
    console.log(val);
    return Promise.reject(4);
  })
  .catch((val) => {
    console.log(val);
  })
  .finally((val) => {
    // finally doesn't receive param from .then chain. always gets undefined as param
    console.log(val);
    return 10;
  })
  .then((val) => {
    console.log(val);
  });
```

Result
1
2
undefined
3
undefined
4
undefined
undefined

- 3

```js
console.log(1);
const promise = new Promise((resolve) => {
  console.log(2);
  resolve();
  console.log(3);
});

console.log(4);

promise
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

console.log(7);

setTimeout(() => {
  console.log(8);
}, 10);

setTimeout(() => {
  console.log(9);
}, 0);
```

result:
1 2 3 4 7 5 6 9 8