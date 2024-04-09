---
id: qdnhxg5v4oukw5hsc6xc6li
title: Advance Types
desc: ''
updated: 1712647837717
created: 1712647837717
---
### Intersection types
- For objects, intersection type is combination of both object properties.
```ts
type TypeA = {};
type TypeB = {};
type TypeC = TypeA & TypeB // will have props of both TypeA and TypeB
```
- for union types, intersection type are the types they have in common.

```ts
type Combinable = number | string;
type Numeric = boolean | number;

type Universal = Combinable & Numeric; // intersection would be number
```

### Typeguards

When we combine types, we might require typeguards. 

- instanceOf
- typeOf
- property in object

Reference: https://www.typescriptlang.org/docs/handbook/2/narrowing.html

- in case of interfaces, use [discriminated unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions).
