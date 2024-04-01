---
id: e85c7nd0rt2fnlb7zu3xnz3
title: Basic Types
desc: ''
updated: 1709628024801
created: 1709628024801
---
Typescript's type system helps us during development.
The key difference b/w JS and TS type system is JS uses dynamic types(resolves during runtime) and TS uses static types(set during development)

## Core Types
- number: All numbers, no differentiation b/w integers and floats.
- string
- boolean
- object
- array
- tuple: (added by TS) fix length array.
    eg: In below example, role is tuple. It is a fixed length(2) array with first index value as number and second has string. `person.role[1] = 10; person.role = [1, "abcd", "def"]` will result in compile time errors. 
    ```js
    const person:
    {
        name: string;
        role: [number, string] // tuple
    } = {
        name: "John",
        role: [2, "author"]
    }
    ```
    **Note** : `person.role.push("heeloo")` will not result in a compile time error. This is an exception. TS cannot catch this error.



**Note**: The core primitive types in TypeScript are all lowercase!