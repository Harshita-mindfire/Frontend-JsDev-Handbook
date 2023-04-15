---
id: ni4mv17f04ieqk6sxn02o77
title: Fundamentals
desc: ""
updated: 1649609418446
created: 1648899620451
---

## React

A JS library for building User interfaces.

- uses Virtual DOM
- unindirectional data flow
- reusable UI components

## component

a fuction that returns markup

## Functional components over Class

- use functional comp over class, after 16.8 hooks can be used as lifecycle events.
- use class component when you want a react functionality that is not availabke for functions yet, eg: error boundries
- Only class components can be error boundaries. To make class component an error boundary we define a new lifecycle method called componentDidCatch(error, info).

ReactDOM.render function: takes 2 i/p

- App
- document.getElementById("root")

## JSX

you can use the conditional ? operator. it works inside JSX:

```js
<div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>
```

When you don’t need the else branch, you can also use a shorter logical && syntax:

```js
<div>{isLoggedIn && <AdminPanel />}</div>
```

## Pure components

Some JavaScript functions are pure. A pure function:

- Minds its own business. It does not change any objects or variables that existed before it was called.
- Same inputs, same output. Given the same inputs, a pure function should always return the same result.

## React State vs Props

- State of a component is an object that holds some information that may change over the lifetime of the component.
- props are inputs to a component, They are data passed down from a parent component to a child component.

Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.

## controlled and uncontrolled components

In Controlled components the form data s handled by react and with un-c comp. form data is handled by DOM itself.

### Controlled Compoenets

In React, controlled and uncontrolled components are two different approaches to managing the state of a form component.

A controlled component is a component that takes its current value through props and notifies changes through callbacks, like onChange. When a user enters data into a form element, the component's state is updated and the UI is re-rendered with the new values. In other words, the state of the component is controlled by React.

Here's an example of a controlled component for an input field:

```js
import React, { useState } from "react";

function InputField() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return <input type="text" value={value} onChange={handleChange} />;
}
```

In this example, the value of the input field is controlled by the value state variable. The handleChange function updates the value state when the input field changes, and the new value is passed down to the input element as a prop.

### Uncontrolled component

an uncontrolled component is a component that manages its own state internally. In an uncontrolled component, the form data is handled by the DOM itself, instead of being managed by React.

Here's an example of an uncontrolled component for an input field:

```js
import React from "react";

function InputField() {
  function handleSubmit(event) {
    console.log("Input value:", event.target.elements.inputField.value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="inputField" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

In this example, the form data is handled by the DOM. When the user submits the form, the handleSubmit function accesses the value of the input field directly from the DOM using event.target.elements.inputField.value.

## Lifecycle phases

- Mounting
- updating
- unmounting

### Detail

- **Mounting**: The component is ready to mount in the browser DOM. This phase covers initialization from
  `constructor(), getDerivedStateFromProps(), render(), and componentDidMount()` lifecycle methods.

- **Updating**: In this phase, the component gets updated in two ways, **sending the new props** and **updating the state** either from setState() or forceUpdate(). This phase covers `getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() and componentDidUpdate()` lifecycle methods.

- **Unmounting**: In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes `componentWillUnmount()` lifecycle method.

![Lifecycle of component](/assets/images/2023-04-14-19-35-20.png)

## Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.

```js
const { Provider, Consumer } = React.createContext(defaultValue);
```

## TODO

- React.StrictMode #learn
