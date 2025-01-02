---
id: sojbzhwx1losfnysmamz42a
title: Render Prop
desc: ''
updated: 1735834369250
created: 1735807935603
---

## reference
- [Render Props Pattern](https://www.patterns.dev/react/render-props-pattern)
- [cloneElement – React](https://react.dev/reference/react/cloneElement#passing-data-with-a-render-prop)

## overview

A render prop is a prop on a component, whose value is a function that returns a JSX element. The component itself does not render anything besides the render prop. Instead, the component simply calls the render prop, instead of implementing its own rendering logic.

- **NOTE**: a render prop doesn’t have to be called render. Any prop that renders JSX is considered a render prop

## Example

To the Component element, we have to pass a prop called render, which is a function that returns a React element.

```jsx
<Title render={() => <h1>I am a render prop!</h1>} />
const Title = (props) => props.render();

```

## Key feature

- **Reusability**: the component that receives the prop is very reusable. We can use it multiple times, passing different values to the render prop each time.
    ```jsx
    <Title render={() => <h1>✨ First render prop! ✨</h1>} />
    <Title render={() => <h2>🔥 Second render prop! 🔥</h2>} />
    ```


##  Why would you want to use this?

A component that takes a render prop usually does a lot more than simply invoking the render prop. Instead, we usually want to pass data from the component that takes the render prop, to the element that we pass as a render prop!

```jsx
function Component(props) {
  const data = { ... }

  return props.render(data)
}

//The render prop can now receive this value that we passed as its argument.
<Component render={(data) => <ChildComponent data={data} />}

```


### additing addiional props to an exising element (replacing clone elemenet)

[[Cloning | learning.react.legacy.clone-element]]
 children makes it hard to tell how the data flows through your app. Hence we use other alternaives like render prop pattern.

 Instead of using cloneElement, consider accepting a render prop like renderItem. Here, List receives renderItem as a prop. List calls renderItem for every item and passes isHighlighted as an argument:

```jsx
export default function List({ items, renderItem }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="List">
      {items.map((item, index) => {
        const isHighlighted = index === selectedIndex;
        return renderItem(item, isHighlighted);
      })}
  )
 ```

 The renderItem prop is called a “render prop” because it’s a prop that specifies how to render something. For example, you can pass a renderItem implementation that renders a <Row> with the given isHighlighted value:
 
```jsx
<List
  items={products}
  renderItem={(product, isHighlighted) =>
    <Row
      key={product.id}
      title={product.title}
      isHighlighted={isHighlighted}
    />
  }
/>
```