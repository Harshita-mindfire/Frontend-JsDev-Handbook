---
id: 8k7fj3knfjs2vz42yxldbzk
title: JavaScript
desc: ''
updated: 1662226133532
created: 1648190780500
---

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

```js
var obj = {
 // does not create a new scope
 i: 10,
 b: () => console.log(this.i, this),
 c: function() {
 console.log(this.i, this);
 }
};
obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}```
```

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
	fname: "Jo",
	lname: "Joshi",
}
function fullName(city,state) {
	console.log(this.fname + " " + this.lname + " " + city + " " + state)
}
Function.prototype.myBind2 = function(...args) {
	const fun = this;
	const param = args.slice(1)
	return function(...arg) {
		fun.apply(args[0], [...param,...arg])
	}
}

const test = fullName.myBind2(uname2,"hld")
test("UK");
```

## Currying

- by bind method
```js
let multiply = function(x,y) {
	console.log(x*y)
}

const multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(9)
```

- by closures
```js
 function multiply(x) {
	return function(y) {
		return x*y
	}
 }
 const multiplyBy2 = multiply(2);
 console.log(multiplyBy2(4))
```

### imp interview ques
https://javascriptinterviewquestions.com/2020/04/add123-in-javascript-currying-interview.html

## Debounce

- limiting the rate of execution of a particular function

## this

Free function invocations in javascript have `this` bound to the global scope.


## Event Propagation
happens in 3 phases
- Capturing phase: event goes down from root element to the target element
- target phase: event reaches the target elem
- bubbling phase: When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
To stop bubbling: event.stopPropagation()
```html
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```

## Async vs defer

### Defer
The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, which makes it non-blocking and then runs when the DOM is fully built.

Here’s the same example as above, but with defer:

```html
<p>...content before script...</p>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- visible immediately -->
<p>...content after script...</p>
```

- DOMContentLoadedEvent
Both solves two problems
Scripts can’t see DOM elements below them, so they can’t add handlers etc.
If there’s a bulky script at the top of the page, it “blocks the page”. Users can’t see the page content till it downloads and runs:


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

```js
Array.prototype.myArray = function(cb) {
    const obj = this;
    const returnArr=[];
    for(var i=0; i<obj.length;i++){
        returnArr.push(cb(obj[i],i,obj))
    }
    return returnArr;
}
```


## Promise
- a JS Object which may produce a value in future either a resolved value or a reason it is not reselved
- can be in one of the three states
	- pending
	- fullfilled or
	- rejected
```js
const promise = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve("done")
	}, 3000)
})

async function x(val) {
return new Promise((resolve,reject) => {
	setTimeout(() => {if(val%2===0) {
		resolve("even")
	} else {
		reject("odd")
	}
	}, 1000)
})
}
```

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
  let a = args.reduce((a, b) => a + b, 0)
  return function(...args){
    let b = args.reduce((a, b) => a + b, 0)
    if(b){
      return add(a+b)
    }
    return a
  }
}
```


## Prototypical Ineritence