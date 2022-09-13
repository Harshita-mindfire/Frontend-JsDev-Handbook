---
id: ni4mv17f04ieqk6sxn02o77
title: Fundamentals
desc: ''
updated: 1649609418446
created: 1648899620451
---

## React

A JS library for building User interfaces.

- uses Virtual DOM
- unindirectional data flow
- reusable UI components

## Functional components over Class
- use functional comp over class, after 16.8 hooks can be used as lifecycle events.
- use class component when you want a react functionality that is not availabke for functions yet, eg: error boundries
- Only class components can be error boundaries. To make class component an error boundary we define a new lifecycle method called componentDidCatch(error, info).


ReactDOM.render function: takes 2 i/p
- App
- document.getElementById("root")

## React State vs Props
- State of a component is an object that holds some information that may change over the lifetime of the component.
- props are inputs to a component, They are data passed down from a parent component to a child component.

Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.

## TODO
- React.StrictMode #learn
