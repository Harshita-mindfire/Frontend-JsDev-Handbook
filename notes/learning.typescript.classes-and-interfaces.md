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

### overriding methods
- TS allows to override methods of base class in child class.
- It calls the child method when invoked from child reference.

### super keyword
- calls the constructor of the base class.
- used inside child constructor
```ts 
class ITDept extends Dept {
    constructor(id: string) {
        super(id, 'IT') // should always be the first statement in constructor
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

## static Methods