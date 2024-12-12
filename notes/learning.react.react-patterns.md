---
id: ug5b9frm3w0fz4400egy5wi
title: React Patterns
desc: ''
updated: 1734004474638
created: 1733912458137
---

## Layout components
- design pattern used to structure the layout of a React application
- focus on organizing other components within a web page. like split screen, lists, modal
-  promotes code reusability, separation of concerns, and a clean, organized codebase.

### key concepts
the core components of our page should be unaffected by its placement.
- reusability
- separation of concerns: separating layout logic from business logic, you can focus on the specific responsibilities of each component. 

### example

- for split screen type of layouts we should try to keep the stylings in the parent components and not the individual left and right.

- for lists: example of reusability 

```jsx

//RegularList.jsx
export const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};

//SmallAuthorListItem.jsx

export const SmallAuthorListItem = ({author}) => {
  const {name, age} = author;
  return(
    <p> Name: {name}, Age: {age}</p>
  )
}

// App.jsx

<RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />

      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallAuthorListItem}
      />

```

