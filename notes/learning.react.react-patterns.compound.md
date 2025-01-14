---
id: dv1l5xhkn1iaeker7ik3ea3
title: Compound
desc: ''
updated: 1736825979971
created: 1736825932368
---


## Example
- Card.jsx
```jsx
import { createContext, useContext } from "react";

const Context = createContext(null);

const Body = ({ children }) => {
  return <div style={{ padding: ".5rem" }}>{children}</div>;
};

const Header = ({ children }) => {
  const { test } = useContext(Context);
  return (
    <div
      style={{
        borderBottom: "1px solid black",
        padding: ".5rem",
        marginBottom: ".5rem",
      }}
    >
      {children}
      {test}
    </div>
  );
};
const Footer = ({ children }) => {
  return (
    <div
      style={{
        borderTop: "1px solid black",
        padding: ".5rem",
        marginTop: ".5rem",
      }}
    >
      {children}
    </div>
  );
};

const Card = ({ test, children }) => {
  return (
    <Context.Provider value={{ test }}>
      <div style={{ border: "1px solid black" }}>{children}</div>
    </Context.Provider>
  );
};

export default Card;

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

```

- App.jsx
```jsx

import Card from "./components/card";

function App() {
  return (
    <Card test="Value">
      <Card.Header>
        <h1 style={{ margin: "0" }}>Header</h1>
      </Card.Header>
      <Card.Body>
        He hid under the covers hoping that nobody would notice him there. 
      </Card.Body>
      <Card.Footer>
        <button>Ok</button>
        <button>Cancel</button>
      </Card.Footer>
    </Card>
  );
}

export default App;

```