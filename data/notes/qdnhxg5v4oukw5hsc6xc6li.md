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
With type guards you avoid runtime errors by checking types before you try to do something with the values.

- instanceOf
- typeOf
- property in object

Reference: https://www.typescriptlang.org/docs/handbook/2/narrowing.html

- in case of interfaces, use [discriminated unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions).

### index properties
 

 - Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.

In those cases you can use an index signature to describe the types of possible values, for example:
```ts
interface User {
    [prop: string]: string
}
```
 Read more [here](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)

 ### optional chaining

ts supports the below code instead of using `if(user && user.job && user.job.name)`
 ```ts
 if(user?.job?.name)
 ```

 ### nullish coalescing

 if **null or undefined** used default value;
 eg:
 ```ts
 const username = response.name; // undefined
 const value = username ?? 'Max'; // stores max


 const lname = '';
 const value2 = xyz ?? 'Smith'; //stores ''.
 ```
if we would have used value2 = xyz || 'Smith', the value2 will be = `Smith`