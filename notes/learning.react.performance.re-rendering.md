---
id: 3uby22vvqaqekxnnpmi3kiw
title: Re Rendering
desc: ''
updated: 1737116476497
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
        {visible && <ModalDialog onClose={() => setVisible(false)} />}      
        <SlowComponent />
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

### Drawbacks of custom hooks

- Custom hooks are typically not the answer to addressing re-rendering issues. While they can help organize and tidy up code, they do not prevent re-rendering when the state is updated. In fact, if a custom hook includes additional states used by multiple components, updating a single state will cause all components using that custom hook to re-render.


### Passing components as props.
The components which are passed as props to component A and are rendered in it won't re-render if the A re-renders.

```jsx
const DynamicScroll = ({ content }: { content: ReactNode }) => {
  const [position, setPosition] = useState(170);
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const newPosition = calculatePosition(e.currentTarget.scrollTop);
    setPosition(Math.max(113, newPosition));
  };

  const blockColor = calculateColor(position);

  return (
    <ScrollableContainer onScroll={handleScroll}>
      <DynamicBlock top={position === 113 ? 113 : position} color={blockColor}>
        🛒
      </DynamicBlock>
      {content}
    </ScrollableContainer>
  );
};

...
//App component

export default function App() {
  return (
    <DynamicScroll
      content={
        <>
          <SlowComponent />
          <BlaBla />
          <AdditionalComplexThings />
        </>
      }
    />
  );
}
```

Here, update in state of Dynamic scroll will not re-render the 3 components paased as prop to `DynamicScroll`.