---
id: k6wrzwjtyopzxbnj2m4is2z
title: Redux
desc: ''
updated: 1692768810752
created: 1678452458467
---

## Redux

- predictable state container for js apps.
- predictable because in redux, a pattern is enforced to ensure all transitions are explicit and can be tracked.

![](/assets/images/2023-08-22-22-28-35.png)

![](/assets/images/2023-08-22-22-29-07.png)

## Three core concepts

- store
- action: js object that has a type and payload property. The type value is usually defined as constants.
- redux

![](/assets/images/2023-08-22-22-37-23.png)

![](/assets/images/2023-08-22-22-44-19.png)

## Principles

1. ![](/assets/images/2023-08-22-22-39-33.png)

2. ![](/assets/images/2023-08-22-22-41-03.png)

   The state is read only and the only way to change the state is dispatch an action

3. ![](/assets/images/2023-08-22-22-43-13.png)

## Redux store

![](/assets/images/2023-08-23-07-16-10.png)

imp methods

- createStore
- bindActionCreators
- combineReducers

### Example

```js
const redux = require('redux');
const createStore = redux.createStore;

//action types
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCK = 'CAKE_RESTOCK';

//action  creators
function orderCake() {
  return {
    type: CAKE_ORDERED,
  };
}
function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCK,
    payload: qty,
  };
}

// init state
const initState = {
  noOfCakes: 10,
};

//reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    case CAKE_RESTOCK: {
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.payload,
      };
    }
    default:
      return state;
  }
};

//state
const store = createStore(reducer);
console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() =>
  console.log('Update State', store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(2));

unsubscribe();
```

### bindActionCreators

- `bindActionCreators` : a helper method that turns an object whose values are action creators, into an object with the same keys, but with every function wrapped into a dispatch call so they may be invoked directly.

```js
const actions = redux.bindActionCreators(
  { orderCake, restockCake },
  store.dispatch
);
actions.orderCake();
actions.restockCake(1);
```

### Combine Reducers

```js
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = redux.createStore(rootReducer);
```

### Apply Middleware

```js
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const store = redux.createStore(rootReducer, applyMiddleware(logger));
```

### Redux Thunk

[[learning.redux.thunk]]

