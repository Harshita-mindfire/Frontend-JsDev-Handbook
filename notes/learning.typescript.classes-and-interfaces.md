---
id: 2b35ixagticlchpxb121vfm
title: Classes and Interfaces
desc: ''
updated: 1712134690726
created: 1712134690726
---

## Access modifiers
- **private**: accessible only within the class
    ```ts
    class Department {
        private employees: string[] = [];
    }
    ```
- **public**: default modifier. accessible outside the class
- **readonly**:  Does not allow rewriting.

    ```ts
    class xtz {
        private readonly id: string = 'xyzz';
    }
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