---
id: sojbzhwx1losfnysmamz42a
title: Render Prop
desc: ''
updated: 1735835707912
created: 1735807935603
---

## reference
- [Render Props Pattern](https://www.patterns.dev/react/render-props-pattern)
- [cloneElement – React](https://react.dev/reference/react/cloneElement#passing-data-with-a-render-prop)

## overview

A render prop is a prop on a component, whose value is a function that returns a JSX element. The component itself does not render anything besides the render prop. Instead, the component simply calls the render prop, instead of implementing its own rendering logic.

- **NOTE**: a render prop doesn’t have to be called render. Any prop that renders JSX is considered a render prop

**props.children is also technically a render prop**

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


### example

Input value in °F and °K 

```jsx
function Input(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.render(value)}
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  );
}

function Kelvin({ value = 0 }) {
  return <div className="temp">{value + 273.15}K</div>;
}

function Fahrenheit({ value = 0 }) {
  return <div className="temp">{(value * 9) / 5 + 32}°F</div>;
}
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


## Cons

- The issues that we tried to solve with render props, have largely been replaced by React Hooks. As Hooks changed the way we can add reusability and data sharing to components, they can replace the render props pattern in many cases.

- Since we can’t add lifecycle methods to a render prop, we can only use it on components that don’t need to alter the data they receive.

### example of custom hooks

```jsx
import React, { useState, useEffect } from 'react';

// Render Prop Component implemented with a functional component
const DataFetcher = ({ url, children }) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (isMounted) setState({ loading: false, data });
      } catch (error) {
        if (isMounted) setState({ loading: false, error });
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup to prevent setting state on unmounted component
    };
  }, [url]);

  return children(state);
};

// Usage of Render Prop
const ComponentUsingRenderProp = () => (
  <DataFetcher url="https://api.example.com/data">
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;
      return <div>Data: {JSON.stringify(data)}</div>;
    }}
  </DataFetcher>
);

// custom hook: The custom hook approach remains largely the same, emphasizing code reuse and readability:

import React, { useState, useEffect } from 'react';

// Custom Hook
function useDataFetcher(url) {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (isMounted) setState({ loading: false, data });
      } catch (error) {
        if (isMounted) setState({ loading: false, error });
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
}

// Usage of Custom Hook
const ComponentUsingHooks = () => {
  const { loading, error, data } = useDataFetcher('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <div>Data: {JSON.stringify(data)}</div>;
};
```