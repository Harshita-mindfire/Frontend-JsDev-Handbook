
## Uncontrolled component

These components manage their state independently of React's state management, and rely on the DOM to handle interactions.

```jsx
const Form = () => {
  const nameRef = useRef();
  const nameRef = useRef();

  const onSubmit = () => {
    console.log("Name: " + nameRef.current.value);
    console.log("Email: " + emailRef.current.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" ref={nameRef} required />
      <input type="email" name="email" ref={emailRef} required />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form
```

## controlled component
React manages the state of these components, so any changes to the state are immediately reflected in the UI.

**Pros**
- These are a good choice for forms where you need tight control over the data, such as dynamic forms or when performing immediate input validation


```jsx
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    console.log("Name: " + name);
    console.log("Email: " + email);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email" 
        name="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form
```