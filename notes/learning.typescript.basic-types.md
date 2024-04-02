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
- **number**: All numbers, no differentiation b/w integers and floats.
- **string**
- **boolean**
- **object**
- **array**
- **tuple**: (added by TS) fix length array.
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

- **enum**: Automatically enumerated global constant identifiers. 
    ```ts
    enum Role {ADMIN, READ_ONLY, AUTHOR};
    ```
    by default here Role.ADMIN will have value 0, READ_ONLY: 1 and AUTHOR 2. We can change this by
    ```ts
    enum Role {
        ADMIN = "ADMINISTRATOR", 
        READ_ONLY =" Read only users", 
        AUTHOR = "Author"};
    ```

- **any**

**Note**: The core primitive types in TypeScript are all lowercase!

## Other Types
- **union**: 
    ```ts 
    let x: number | string;
    ```

- **literal types**: 
    ```ts
    let result: 'value1' | 'value2'; // now result cannot be assigned any value other than value1 or value 2. 
    result = "ok"; // results in compile time error
    ```

- **unknown**: we don't know yet what's the type. It is similar to any but more restrictive.

- **never**: never returns anything. eg: error functions

- **symbol**: 
There is a primitive in JavaScript used to create a globally unique reference via the function Symbol():

```ts
    const firstName = Symbol("name");
    const secondName = Symbol("name");
    
    if (firstName === secondName) { //This comparison appears to be unintentional because the types 'typeof firstName' and 'typeof secondName' have no overlap.
    // Can't ever happen
    }
```

## Type Aliases

Type aliases can be used to "create" your own types. 

```ts
type NumStringType = number | string;
type CustomLiteralType = "value1" | "value2";

// now these can be used as below:

let variable1: NumStringType;
```

You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

For example:
```ts
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
```
This allows you to avoid unnecessary repetition and manage types centrally.

## Function return types & void
return type in func is specified after ":"

```ts
function add(a: number, b: number) : string {
    const sum = a+b;
    return `Result is ${sum}`;
}
```

The function that does not have a return statement is of return type void.
```ts
function add(a: number, b: number) // this is internally :void
{
    console.log(a+b); 
}

```

The function that has a return statement but returns nothing, is of return type undefined
```ts
function add(a: number, b: number) // this is internally : undefined . You can also use : void here if required. won't throw any error.
{
    console.log(a+b); 
    return;
}

```

## Functions as type

```ts
let combinedResult : (a: number, b: number) => number;
```

## Function Type && Callbacks

```ts
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
```
**NOTE: ** callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.

for example: the below code will compile just fine. even though the return type of cb is void and we are returning boolean.

```ts
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({data: 'Hi there!'});
}
 
sendRequest('Send this!', (response) => { 
  console.log(response);
  return true;
 });
```

