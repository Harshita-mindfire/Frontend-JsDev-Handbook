---
id: 2b35ixagticlchpxb121vfm
title: Classes and Interfaces
desc: ''
updated: 1712134690726
created: 1712134690726
---

## Access modifiers
- **private**: accessible only within the class. They are not even inherited.
    ```ts
    class Department {
        private employees: string[] = [];
    }
    ```
- **public**: default modifier. accessible outside the class.
- **protected**: accessible to class and its children(i.e can be inherited).
- **readonly**: This prevents assignments to the field outside of the constructor.

    ```ts
    class Greeter {
    readonly name: string = "world";
    
    constructor(otherName?: string) {
        if (otherName !== undefined) {
        this.name = otherName;
        }
    }
    
    err() {
        this.name = "not ok"; //Cannot assign to 'name' because it is a read-only property.
    }
    }
    const g = new Greeter();
    g.name = "also not ok"; //Cannot assign to 'name' because it is a read-only property.
    ```

## Shorthand notation
When we want to initialize the member variables in constructor, **instead of**
```ts
   class Product {
    title: string;
    price: number;
    private isListed: boolean;
    
    constructor(name: string, pr: number) {
        this.title = name;
        this.price = pr;
        this.isListed = true;
    }
}
```
**we can do**

```ts
      class Product {
        private isListed: boolean;
        constructor(public title: string, public price: number) {
            this.isListed = true;
        }
}
```


## Inheritance

- utilizing base class methods and properties. They are automatically passed on to the child class via inheritance.
- can inherit one class ata time.
- use `extends` to inherit.
- eg:

    ```ts
    class ITDept extends Dept {

    }
    ```

### overriding methods
- TS allows to override methods of base class in child class.
- It calls the child method when invoked from child reference.

### super keyword
- calls the constructor of the base class.
- if you have a base class, you’ll need to call super(); in your child constructor body before using any `this.` members:
```ts 
class Base {
  k = 4;
}
 
class Derived extends Base {
  constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
    console.log(this.k);
'super' must be called before accessing 'this' in the constructor of a derived class.
    super();
  }
}
```


## Getters and Setters

```ts
class Dept {
    private id:string;
    constructor(private name: string){}
    get DeptId() {
        if(this.id)
        return this.id;
    }

    set DeptId(value: string) {
        this.id = value;
    }
}
```
`DeptId` is a getter that is publicly accessible. Now we can get the value of dept by creating reference of Dept.

```ts
// Note how getters/setters are accessed without ()

const IT = new Dept('IT');
console.log(IT.DeptId) // getting value
IT.DeptId = '1234' // setting value
```

## Static Methods

- Classes may have static members. These members aren’t associated with a particular instance of the class. They can be accessed through the class constructor object itself:
- often used for utility functions that you want to group into a class or for global constants.
- the static methods are decoupled from instances and **cannot** be referenced with `this`.
- Static members are also inherited.


eg: `Math.pi`, `Math.pow()`

```ts
class Test {
    static year = 2024;
    static testFunc() {
        return "xyz";
    }
}
// above func can be used as: 
const a = Test.testFunc();
console.log(Test.year) //2024
```

## Abstract Classes
- An abstract class typically includes one or more abstract methods or property declarations. 
- The class which extends the abstract class must define all the abstract methods. 
- We **cannot** create an instance of an abstract class.

## Private Constructors and Singletons

The singleton pattern is a creational pattern that allows you to make sure that only one instance of a class is created.


```ts
    class Singleton {
    private static instance: Singleton;
    private constructor() {
        // do something construct...
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
            // ... any one time initialization goes here ...
        }
        return Singleton.instance;
    }
    someMethod() { }
}

let something = new Singleton() // Error: constructor of 'Singleton' is private.

let instance = Singleton.getInstance() // do something with the instance...
```

- [Canvas editor singleton example](https://github.com/mindfiredigital/canvas-editor/commit/b09d98dea3a38caba041bab35736bfd2712c068c#diff-ce60497e4a1a947c474a38c5959a2d9499b9531666b1df509ac4305518a93095R11)

