---
id: uvb8ww8ir11egzwnqkvqiyx
title: Router
desc: ''
updated: 1649609142510
created: 1649591998294
---

Updtaes are done in v6 of react-router-dom: See here: [[React Router v6|learning.react.router#react-router-v6]]
## Browser Router
```jsx
<BrowserRouter>
    // components you'd like to add routing capability
 </BrowserRouter>
```

## Router

Specify the path and component to render for that path. 

NOTE: 
* The below code will render about home and about component for path _/about_.

```jsx
    <Route path= '/' component= {Home} />
    <Route path= '/about' component= {About} />
    <Route path= '/shop/:id' component= {Shop} /> // dynamic route
```

## Switch

Stop rendering after first match. 
NOTE:
* The below code will only render Home component for path _/about_. Since first match is_/_

```jsx
<Switch>
    <Route path= '/' component= {Home} />
    <Route path= '/about' component= {About} />
</Switch>
```
To overcome this, use the Route property: exact.

```jsx
<Switch>
    <Route path= '/' exact component= {Home} />
    <Route path= '/about' component= {About} />
</Switch>
```

## Link

Adding hyperlinks to your component. Thakes only one argument 'to'

```jsx
<Link to='/about'>
 <li>About</li>
</Link>
<Link to={`/shop/${item.id}`}> {item.name} </Link> 
```
The Link passes props to the component that gets rendered. 

## React Router Hooks

### useParams
useParams(): get props passed by Link to the component.

```jsx
<Link to= {`/shop/${item.id}`}>View Details</Link>
...
<Route path='/shop/:id' component={ItemDetails}>
...
const params = useParams() //can now access the param id with params.id
```
### useNavigate
* Before v6, we had <Redirect to='/' /> to redirect from a component. Now <Redirect /> is replaced with <Navigate />. We can also use new hook useNavigate to further redirect. This also replaces the __goBack__ method of react-router-dom. 

```jsx
const navigate = useNavigate();
useEffect(()=> {
    ...
    if(res.error === '404'){
        navigate('/')
    }
},[])
```
* If you want to go back to the most recent page from history you can write
```jsx
<div onClick={() => navigate(-1)}> Go Back </div>
```
### useLocation
The new hook useLocation to get the location of route.
```jsx
const location = useLocation();
const { pathname } = location // path name is the route; /shop/231
```
## React Router v6
The v6 has various backwards incomaptible changes: Here is the changelog of them

## Changes

* <Switch> has been removed from v6. 
* You need to wrap all your Route under <Routes>
* no need to do _exact_ anymore.
* <Redirect /> is repaced with <Navigate />
* __component__ property of <Route> is changed to __element__. It takes JSX as an argument.

Before:
```jsx 
<Route path= '/' component={Home}> 
```
New: 
```jsx
<Routes>
    <Route path='/' element={<About />}>
</Routes> 
```
* can access the params passed to Component only with [[useParams|learning.react.router#useparams]]. The ({match}) prop is no longer valid

* __goBack__ method is no longer valid