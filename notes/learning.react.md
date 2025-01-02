---
id: 8fp89ktw3fhi2p6bt35b5ju
title: React
desc: ''
updated: 1735803966179
created: 1648190205452
---

## Resources

- [React](https://sapient.udemy.com/course/complete-react-developer-zero-to-mastery/)
- https://kentcdodds.com/blog
- https://overreacted.io/
- [React Examples](https://reactjsexample.com/)

## Core fundamentals
- x jsx, x rerendering, x virtual dom, state, props, components, parent, child, lifecycle, hooks 
## to make framework
- [x] routing
- [x] error handling
- [ ] state management(prop drilling) context api, redux-toolkit
- [ ] data fetching: react query, axios

## Adavenced
- performance and optimatisation: memoization : x useMemo, x useCallback, lazyloading
- PWAs
- configuration: babel, webpack, css preprocessing

## React Children

```jsx
  const Children: {
        map<T, C>(children: C | ReadonlyArray<C>, fn: (child: C, index: number) => T):
            C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
        forEach<C>(children: C | ReadonlyArray<C>, fn: (child: C, index: number) => void): void;
        count(children: any): number;
        only<C>(children: C): C extends any[] ? never : C;
        toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
    };
```

Example:
```js
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (c) => {
        if (React.isValidElement(c)) {
          return React.cloneElement(c, { user });
        }
        return c;
      })}
    </>
  );
};

```