---
id: 3uby22vvqaqekxnnpmi3kiw
title: Re Rendering
desc: ''
updated: 1737111058377
created: 1736830119518
---

- each re-render begins with a state update in a component. 
- Re-render cascade down the components(if parent state change, its nested components will re-render)
- Re-rendering all components unnecessary can cause performance issues.


There are several ways to tackle re-rendering based on the code structure. Try to look for Separation of concern(moving state up/creating a separate stateful component) in components before actually utilizing React.memo or usecallback/memo hooks. They are perfectly valid solutions but sometimes unnecessary. For example:

```jsx
export default function App() {
      const [visible, setVisible] = useState(false);

  return (
    <>
        <Button onClick={() => setVisible(true)}>Show dialog</Button>
        {visible && <ModalDialog onClose={() => setVisible(false)} />}      <SlowComponent />
        <BlaBla />
        <AdditionalComplexThings />
    </>
  );
}
```
This can be solved by separation of concern. Just by moving state in a separate stateful component
```jsx
export default function App() {
  return (
    <>
      <ToggleButtonWithDialog />
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </>
  );
}
```