
- React-redux is a lib that provides bindings to use React and redux(toolkit) together in an application.

## Links

- https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK
- https://github.com/gopinav/Redux-Toolkit-Tutorials/blob/master/redux-demo
- library for state management.

## store

- state container that stores the application state.

### createStore

- method that takes 2 arguments
  - reducer
  - applyMiddleware method (optional)

```js
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
```

## reducer

pure function, takes 2 arguments

- initial state
- action
  returns new state

```js
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
  }
};
```

## action

- object
  - type (required)
  - payload (optional)

```js
const succeed = {
  type: FETCH_USERS_SUCCEEDED,
  payload: users,
};
```

## Action creator

Action creator: method that returns an action.

```js
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};
```

## redux thunk

middleware that allows you to write action creators which return a function instead of an object.

```js
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // response.data is the users
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

store.dispatch(fetchUsers());
```
