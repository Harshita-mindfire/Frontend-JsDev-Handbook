
## Github questions

- https://github.com/sudheerj/javascript-interview-questions

# JS

JS is a synchronous, single threaded language.
Single treaded means runs one command at a time and in a specific order.
JS is loosely typed language. This means any variable is not strictly bind to a data type.

## Execution context

Execution context is simply the environment within which your code is ran.
It has 2 components

- Memory Component(Variable environment): variable and funcs are stored in key: value pairs.
- Code Component(Thread of execution): place where code is executed one line at a time.

### Two stages of Execution context

- **creation**(memory creation) and
- **executing**(code execution) phase.

### Two types of execution context

- Global and Function

As the JavaScript engine starts to read your code, it creates something called the Global Execution Context.

## Lexical environment

- A lexical environment is basically the scope or environment the engine is currently
  reading code in.
- A new lexical environment is created when curly brackets {} are used,
  even nested brackets {{...}} create a new lexical environment.
- The execution context tells the engine which lexical environment it is currently working in and the lexical scope determines the available variables.
- lexical env of a func: local memory of function + refrence to lexical parents's lexical env(closure) + lexical env of parent's parent until global scope.

## Scope chain

Each environment context that is created has a link outside of its lexical environment
called the scope chain. The scope chain gives us access to variables in the parent
environment.

## FOR in vs FOR of

```js
let list = [4, 5, 6];

for (let i in list) {
  console.log(i); // "0", "1", "2",
}

for (let i of list) {
  console.log(i); // "4", "5", "6"
}
```

## Block

- defined by `{}`. It groups together multiple js statements and use it where js syntax is expecting single statement
- let/const are `block scoped`.
- a new `{}` does not create a new scope for `var`, var is a `function` scope

## let and const

- are hoiseted, but are in `temporal dead zone`(the time between a let/const is hoisted and initialized with a value) for the time being.
- accessing a variable in temporal dead zone throws reference error
- cannot redeclare let and const within the same scope unlike `var`. let will throw syntax error and const will throw Type error, since const is of `constant` type.
- `const` needs to be declare and initialization at the same time, unlike `let` which can be initialized later in the code.
- unlinke `var` let/const are block scoped. Each `{}` creates a new scope for let/const

## closure

function along with its lexical scope bundled together forms a closure.
Uses: currying

## Hoisting

- Hoisting is the process of puting all variable and function declarations into memory
  during the compile phase.
- var are hoisted(allocated memory) and initialized with a value of `undefined`
- function declarations are fully hoisted eg: function a() {}
- function expression are hoisted as undefined. (eg: var a = function () {})
- let and const are hoisted but are not initialized with any initial value. Using them before initialization throws reference error

### Takeaways

Avoid hoisting when possible. It can cause memory leaks and hard to catch
bugs in your code. Use let and const as your go to variables.

## Difference between arrow function and normal function

- arrow funcs are not just a syntactic sugar to normal functions
- They are a compact alternative to a regular function, but also without its own bindings to `this`, `arguments`, `super`, or `new.target` keywords.
- Arrow func cannot be used as constructors and are not the best option for methods.

````js
var obj = {
  // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this);
  },
};
obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}```
````

## Call, bind, apply

### Call

- invoke a function with passed references and arguments.
- used function borrowing
- 1st param of call is a reference, i.e what should call bind this to? rest are the arguments to the function

### bind

returns you a copy of method which can be called later.

- function borrowing
- When a function is used as a callback, `this` is lost. The bind() method solves this problem.
  eg: https://www.w3schools.com/js/js_function_bind.asp

polyfill for bind:

```js
const uname2 = {
  fname: 'Jo',
  lname: 'Joshi',
};
function fullName(city, state) {
  console.log(this.fname + ' ' + this.lname + ' ' + city + ' ' + state);
}
Function.prototype.myBind2 = function (...args) {
  const fun = this;
  const param = args.slice(1);
  return function (...arg) {
    fun.apply(args[0], [...param, ...arg]);
  };
};

const test = fullName.myBind2(uname2, 'hld');
test('UK');
```

## Currying

- by bind method

```js
let multiply = function (x, y) {
  console.log(x * y);
};

const multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(9);
```

- by closures

```js
function multiply(x) {
  return function (y) {
    return x * y;
  };
}
const multiplyBy2 = multiply(2);
console.log(multiplyBy2(4));
```

### imp interview ques

https://javascriptinterviewquestions.com/2020/04/add123-in-javascript-currying-interview.html

## Debounce

- limiting the rate of execution of a particular function

## this

Free function invocations in javascript have `this` bound to the global scope.

## Event Propagation

- [Bubbling and capturing](https://javascript.info/bubbling-and-capturing)

happens in 3 phases

- Capturing phase: event goes down from root element to the target element
- target phase: event reaches the target elem
- bubbling phase: the event bubbles up from the element.

```html
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form>
  FORM
  <div>
    DIV
    <p>P</p>
  </div>
</form>

<script>
  for (let elem of document.querySelectorAll('*')) {
    elem.addEventListener(
      'click',
      (e) => alert(`Capturing: ${elem.tagName}`),
      true
    );
    elem.addEventListener('click', (e) => alert(`Bubbling: ${elem.tagName}`));
  }
</script>
```

In bubbling, When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

- To stop bubbling: event.stopPropagation()

```html
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```

NOTE: Almost all events bubble.
The key word in this phrase is “almost”.

For instance, a focus event does not bubble. There are other examples too, we’ll meet them. But still it’s an exception, rather than a rule, most events do bubble

## Scripts: async, defer

### Problem

When the browser loads HTML and comes across a "script" tag, it can’t continue building the DOM. It must execute the script right now. The same happens for external scripts "script src='...': the browser must wait for the script to download, execute the downloaded script, and only then can it process the rest of the page.

That leads to two important issues:

- Scripts can’t see DOM elements below them, so they can’t add handlers etc.
- If there’s a bulky script at the top of the page, it “blocks the page”. Users can’t see the page content till it downloads and runs:

```html
<p>...content before script...</p>

<script src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- This isn't visible until the script loads -->
<p>...content after script...</p>
```

![](/assets/images/2023-04-11-11-43-22.png)

### Defer

- The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, which makes it non-blocking and then runs when the DOM is fully built.
- Scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event). .DOMContentLoaded event handler waits for the deferred script. It only triggers when the script is downloaded and executed.

- Deferred scripts keep their relative order, just like regular scripts.
- The defer attribute is only for external scripts.
  The defer attribute is ignored if the script tag has no src.

```html
<p>...content before script...</p>

<script
  defer
  src="https://javascript.info/article/script-async-defer/long.js?speed=1"
></script>

<!-- visible immediately -->
<p>...content after script...</p>
```

### Async

- The async attribute is only for external scripts
  Just like defer, the async attribute is ignored if the
  ```html
  <script>
    ...
  </script>
  ```
  tag has no src.
- The browser doesn’t block on async scripts (just like defer).
- Other scripts don’t wait for async scripts, and async scripts don’t wait for them, hence does not maintain order of scripts like defer
- DOMContentLoaded and async scripts don’t wait for each other:

## Folder structure

- package.json: app metadata and configuration
- manifest.json: app metadata that makes application progressive web app.
  - provides metadata used when your web app is installed on a
    user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
- `defer` in <script>

## Fundamentals

- browser
- v8 engine

## Array Methods

### reduce

[[Reduce pollyfill | learning.javascript.handson.pollyfill#array.reduce]]


- This method has the following syntax — reduce(callbackFn, initialValue) where initialValue is an optional initial value used. If this parameter is skipped, it's assumed to be the first value of the array.
- if we are not returning anything from the callback functions here, the function returns undefined implicitly.
- if the initial value is not supplied it defaults to the first item of the array

```js
[1, 2, 3].reduce((a, b) => {
  console.log(a, b);
});
// 1, 2
// undefined, 3

[1, 2, 3].reduce((a, b) => {
  console.log(a, b);
}, 0);
// 0,1
// undefined, 2
// undefined, 3
```

#### Edge cases
```js
const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax); // 100

// callback is not invoked
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

[].reduce(getMax); // TypeError
```

```JS
const arr = [{
	firstname: "john", lastName: "Doe", age: 12
},
{
	firstname: "Martha", lastName: "Stewart", age: 22
},
{
	firstname: "Scar", lastName: "Jo", age: 82
}]

const data = arr.reduce((acc, curr) => {
if(curr.age<30) acc.push(curr.firstname);
return acc;
},[])
```

### polyfill for map

[[Map pollyfill | learning.javascript.handson.pollyfill#array.map]]

## Promise

- a JS Object which may produce a value in future either a resolved value or a reason it is not reselved
- can be in one of the three states
  - pending
  - fullfilled or
  - rejected

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('done');
  }, 3000);
});

async function x(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (val % 2 === 0) {
        resolve('even');
      } else {
        reject('odd');
      }
    }, 1000);
  });
}
```

### Promise.prototype.then

For Promise.prototype.then():

- if function is passed as callback, the return value of the function is used as the fulfillment value
- for non-function values, previous fulfillment value is used.

![[Promises Exercise|learning.javascript.promises-exercise]]

### Promise.all

- The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
- fail-fast behavior

## Callback hell

- Callback hell is a antipattern when there are nested callbacks leading to unlegibale code.
  Can be fixed by:
- async awaits
- writing promises

## Ariety

sum(1)(2)....(5) = //

```js
function add(...args) {
  let a = args.reduce((a, b) => a + b, 0);
  return function (...args) {
    let b = args.reduce((a, b) => a + b, 0);
    if (b) {
      return add(a + b);
    }
    return a;
  };
}
```

## Polyfill for Promise.all
[[Promise.all pollyfill | learning.javascript.handson.pollyfill#promise.all]]

## Prototypical Ineritence

-

