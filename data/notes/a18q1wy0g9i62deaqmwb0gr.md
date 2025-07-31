
- a javascript process that runs in the bg of a web page
- by default js is single threaded called (main thread). It is responsible for executing entire js of a web page
- web worker is separate js thread that allows to run multiple js threads that runs in parallel.
- it offload main thread from running heavy computational(CPU intensive) work.
- it cannot do DOM manipulation

### Implementation

1. create a worker script(worker.js)
2. Create instance of Worker in main thread.

```js
const worker = new Worker('worker.js)
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    worker.postMessage('CALCULATE')
})
worker.onmessage = function(message) => {
alert(message.data)
}
```

in worker.js

```js
self.onmessage = function (message) {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) sum = sum + i;
  self.postMessage(sum);
};
```

