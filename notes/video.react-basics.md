---
id: 4rnho25vyoh1wk6nwhsogfy
title: React Basics
desc: ''
updated: 1669642547417
created: 1669642265913
---


## Creating and nesting components
- Create a simple React Component
```js
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```
- Now that you’ve declared MyButton, you can nest it into another component:
```js
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

### JSX
- Your component also can’t return multiple JSX tags.
- JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:
```js
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
```

## Reference
- https://beta.reactjs.org/learn