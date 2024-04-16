---
id: g8etjorczrqedoptssxdooy
title: Generics
desc: ''
updated: 1712662067151
created: 1712662067151
---
- https://www.typescriptlang.org/docs/handbook/2/generics.html
- const arr: Array<string> = []; //similar to string[]
- Promise<string>


## Type constraints
- use `extends`

    ```ts
    function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
    }

    const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
    console.log(mergedObj);
    ```

- 
    ```ts
    interface Lengthy {
    length: number;
    }

    function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
    }
    ```