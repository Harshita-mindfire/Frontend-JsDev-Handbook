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

