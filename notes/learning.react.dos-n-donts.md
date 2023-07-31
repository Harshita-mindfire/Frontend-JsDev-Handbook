---
id: g3ml7qhsqgbi0itgx8fjp4e
title: Dos N Donts
desc: ''
updated: 1690789833094
created: 1690789833094
---
## Reference 
- https://www.youtube.com/watch?v=4FhJkX18fS8

## Do's n dont's
1. use functional components
    - much better state management
    - easy to build components with functional
    - hooks are like an ecosystem now.
    - there's so much we can do with hooks that wouldn't be possible if we used class based.

2. Do use Typescript
    - Component.propTypes in React only run at build time, to check types at compile time, use ts. 

    ```ts
    const MyList: React.FC<{
        list: Person[],
        onClick: (person: Person) => void
    }> = ({list, onClick}) => (...);
    ```

3. Don't worry about react re-rendering (too much).
    - don't try to over optimize before it is actually needed.

4. Manage the useEffect or any dependency array.
    - Rule 1: Add anything you READ FROM to the array
    ```js
    useEffect(() => {
        fetch(`something/${id}`).then(...)
    }, [id])
    ```
    - Rule 2: Check ehat you WRITE TO in the dependency array.
       ```js
        useEffect(() => {
            if(!user) {
            fetch(`something/${id}`).then(data => setUser(data))
            }
        }, [id, user, setUser])
        ```

    - Rule 3: Don't disable lint rules.

    - React doesn't do deep comparision for arrays, objects and functions. It does a referential comparision for them. Make sure the refernce doesnot change if the data does not change(by using useMemo). 

5. Don't ignore useCallback and useMemo.
They can be used to maintain referential identity of non-primitive types.

    We can use useMemo for majorly 2 reasons:
    1. when you are computing an array or an object because those 2 are maintained by reference and you might want to maintain referential identity.
    2. you are doing a task that is expensive.

6. Learn to make custom hooks

7. use a query library. eg: react query, swr