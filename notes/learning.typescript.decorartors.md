---
id: acgxmxarkrk4damtk0dz3we
title: Decorartors
desc: ''
updated: 1714976863187
created: 1714976863187
---
- set `experimentalDecorators`: true in tsconfig.json to use the new decorators.
- decorators are called when the class is defined(before initialization of a class).

eg:

```ts
/**  This is a decorator. target receives the constructor of class. */
function Logger(target: Function) {
    console.log("logging....")
}

@Logger
class Person {
    name="Max";
    constructor() {
        console.log("creating person...")
    }
}

const pers = new Person()
```

### Decortor factory function

- decorator function that returns a func.
 the above example will be modified as:

```ts
 /**  This is a decorator factory. target receives the constructor of class. */
function Logger(arg1: string) {
    return function(target: Function) {
        console.log(arg1)
    }
}

@Logger("Logging Person") // now we can pass args to decorator
class Person {
    name="Max";
    constructor() {
        console.log("creating person...")
    }
}

const pers = new Person()
```

### Multiple decorators.

- The creation happens sequentially but the execution happens bottom up.

- the o/p for below would be 

    - LOGGER FACTORY
    - TEMPLATE FACTORY
    - Rendering template
    - Creating person object...
    - LOGGING


```ts

function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  return function(constructor: Function) {
    console.log(logString);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  return function(constructor: any) {
    console.log('Rendering template');
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}
const pers = new Person();

console.log(pers);
```