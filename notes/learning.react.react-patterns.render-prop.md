---
id: sojbzhwx1losfnysmamz42a
title: Render Prop
desc: ''
updated: 1735832847312
created: 1735807935603
---

## usage

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