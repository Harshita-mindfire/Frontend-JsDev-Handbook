---
id: 9w4z8axj4a9j88semd4xbs2
title: Hooks
desc: ''
updated: 1687755199201
created: 1687755199201
---
## useLayoutEffect

- useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
- is synchronous. Hurts performance, prefer useEffect whereever possible

- After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. Before your component is removed from the DOM, React will run your cleanup function.