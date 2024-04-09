---
id: nman3njbtx3ty2ghrjyy822
title: Interfaces
desc: ''
updated: 1712645754684
created: 1712645754684
---
- pure ts feature.
- describes the structure of an object. There are no concrete values.
- in TS it is almost equivalent to a custom type.
- can't be instantiated and are not compiled.
- Classes can implement an interface by `implements` keyword. More than one interfaces can be implemented by comman separated implements.
- interface **does not have** public, private, protected access modifiers, but **can have** readonly modifier.
- one interface can `extend` another interface using `extends` keyword.

eg: 
```ts
interface Person {
    name: string;
    age: number;
    greet(message: string): void 
}
```
### interface and type

- interface and type can often be use interchangebly. 
For example the type equivalent of Person interface above will be:

```ts
type Person = {
    name: string;
    age: number;
    greet(message: string): void 
    lastname?: string // optional property
}
```

we generally use `type` when we want to store a union type. `interfaces` are used when we want to define a structure of an object.