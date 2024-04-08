---
id: 2b35ixagticlchpxb121vfm
title: Classes and Interfaces
desc: ''
updated: 1712134690726
created: 1712134690726
---

## Access modifiers
- private: accessible only within the class
    ```ts
    class Department {
        private employees: string[] = [];
    }
    ```
- public: default modifier. accessible outside the class

## Shorthand notation
When we want to initialize the member variables in constructor, **instead of**
```ts
    class Department {
        private name: string;
        private id: string;

        constructor(n: string, i: string) {
            this.name = n;
            this.id = i;
        }

    }
```
**we can do**

```ts
    class Department {
        constructor(private name: string, private id: string) {
        }
    }
```