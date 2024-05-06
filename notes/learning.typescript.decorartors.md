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

