---
id: oca8al9dg5b5wstqa8xcz7b
title: Performance
desc: ''
updated: 1649614685015
created: 1648993685432
---

# Performance
For every state update, React component re-renders. When the parent component re-renders, all its children are re-rendered. This causes a performance issue. To minimize re-rendering of Components which are unaffected by the state change, we use advance concepts like memoization.

## Memoisation
- If the props of Child Component does not change, it will not rerender along with the Parent.

### React.memo
Memoizes a component.

#### Functional Component
Wrap component in React.memo() while exporting for functional component.
```js
export default React.memo(Card); // Card is name of component
```
#### Class Component
Extend React.PureComponent instead of React.Component

### useCallback hook
It returns a memoized version of the callback that only changes if one of the dependencies has changed. This is necessary when App sends callback as a Prop to child.
- Rule of Thumb: always wrap _the function in useCallback_ which is passed as a prop if the __component is memoized__.

```js
  const handleChange = useCallback((e) => {
    setSearchKey(e.target.value);
  },[])
```

### useMemo hook
useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.


## Code splitting

```jsx
import OtherComponent from './OtherComponent';
After:
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

## Suspense

```jsx
  <Suspense fallback={<div>Loading...</div>}></Suspense>

```