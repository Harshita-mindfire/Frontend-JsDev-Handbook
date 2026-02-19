
- a react component has type `React.ReactNode`;
- can use `type` and `interface` interchangebly. Generally we use interface while building a library and type while building an application.

### Event props
- HTML `onClick` event: 
```js
const handleClick = (event: React.MouseEvent<HTMLButtonElement>)
```

- HTML `onChange` event:
```js
const handleChange = (event: React.ChangeEvent<HTMLInputElement>)
```

### Style props

Will allow us to type css styles correctly.
```js
type ContainerProps = {
    style: React.CSSProperties
}
...

<Container styles={{border: '1px solid black', padding: '1rem'}} />

const Container = (props: ContainerProps) => {
    return <div style={props.style}> Hello</div>
}
```

