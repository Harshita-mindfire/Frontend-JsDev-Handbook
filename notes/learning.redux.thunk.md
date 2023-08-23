---
id: s6qvndijnh01d8cuioxy7zw
title: Thunk
desc: ''
updated: 1692768901742
created: 1692768755844
---

- a middleware that allows an action creator function to return a function instead of an action.
- the returned function gets dispatch as an argument
- the function can introduce side effects and also dispatch actions

```js
const redux = require('redux');
const reduxLogger = require('redux-logger');
const reduxThunk = require('redux-thunk').default;

// action types
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILED = 'FETCH_FAILED';

//action creators

const fetchUsersReq = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUserSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

const fetchFailed = (err) => {
  return {
    type: FETCH_FAILED,
    payload: err,
  };
};

//initstate

const initState = {
  loading: true,
  data: [],
  error: '',
};

//reducer

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    }
    case FETCH_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
  }
};

//store

const store = redux.createStore(
  userReducer,
  redux.applyMiddleware(reduxLogger.createLogger(), reduxThunk)
);

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersReq());
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => dispatch(fetchUserSuccess(json.slice(0, 4))))
      .catch((err) => dispatch(fetchFailed(err.message)));
  };
};
store.dispatch(fetchUsers());
```

