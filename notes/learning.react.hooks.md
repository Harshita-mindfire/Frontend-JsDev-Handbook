---
id: 9w4z8axj4a9j88semd4xbs2
title: Hooks
desc: ''
updated: 1687755199201
created: 1687755199201
---

## Cheatsheet
- https://react-hooks-cheatsheet.com/

## useRef
- returns an object {current: <initialValuePassedToUseRef>}
- You can store information between re-renders (unlike regular variables, which reset on every render).
- mutating ref.current does not re-render component since it is a plain js object.


## useLayoutEffect

- useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
- is synchronous. Hurts performance, prefer useEffect whereever possible

- After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. Before your component is removed from the DOM, React will run your cleanup function.

- [Difference between useeffect and useLayoutEffect with examples](https://blog.logrocket.com/useeffect-vs-uselayouteffect-examples/)

## useState
- https://jser.dev/2023-06-19-how-does-usestate-work/

# All kinds of effects
Rule:

- Rendering (high to low): main thread -> useInsertionEffect -> useLayoutEffect -> useEffect

- re- Rendering (high to low): main thread -> useInsertionEffect cleanup, then immediately executed -> useLayoutEffect clean up then immediately executed. -> useEffect ALL cleanup -> useEffect executed one by one by order

- a child's useEffect is ran first then its parent's

```js
// This is a React Quiz from BFE.dev 

import React, { useState, useEffect, useLayoutEffect, useInsertionEffect} from 'react'
import ReactDOM from 'react-dom'

function App() {
  console.log(1)
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])

  useEffect(() => {
    console.log(2)
    return () => {
      console.log(3)
    }
  }, [state])

  useEffect(() => {
    console.log(4)
    return () => {
      console.log(5)
    }
  }, [state])

  useLayoutEffect(() => {
    console.log(6)
    return () => {
      console.log(7)
    }
  }, [state])

  useInsertionEffect(() => {
    console.log(8)
    return () => {
      console.log(9)
    }
  }, [state])
  console.log(10)
  return null
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

```
> 1
10
8
6
2
4
1
10
9
8
7
6
3
5
2
4