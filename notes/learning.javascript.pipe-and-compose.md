---
id: 51zb91dvu0ckmvmlplqxqil
title: Pipe and Compose
desc: ''
updated: 1692953550390
created: 1692953550390
---

## Pipe
The concept of pipe is simple — it combines n functions. It’s a pipe flowing left-to-right, calling each function with the output of the last one.

In the context of functional programming, "pipe" refers to chaining functions together in a way that the output of one function becomes the input of the next function. 

- To execute functions in left-to-right order, you'd use a pipe.

```js
const pipe = (...funcs) => (x) => funcs.reduce((v, f) => f(v), x);

const getName = (obj) => obj.name;
const uppercase = (str) => str.toUpperCase();
const get6Characters = (str) => str.substring(0, 6);

const processName = pipe(getName, uppercase, get6Characters);

const result = processName({ name: 'Buckethead' });
console.log(result); // Output: 'BUCKET'

```

## Compose
refers to chaining functions together in a way that the output of one function becomes the input of the next function, but the functions are executed from right to left.

```js
const compose = (...funcs) => (x) => funcs.reduceRight((v, f) => f(v), x);

const processName = compose(get6Characters, uppercase, getName);

const result = processName({ name: 'Buckethead' });
console.log(result); // Output: 'BUCKET'

```