
- simple express server

```js
const express = require('express');
const app = express();
app.get("/", (req,res) => {
    res.status(200).json({success: true, data: {id: 1}})
}) //optional
app.listen(3000, console.log('server running...));
```

## Types of requests
- get
```js
app.get("/", (req,res) => {
    res.status(200).json({success: true, data: {id: 1}})
})
```
- get single id

```js
app.get("/:id", (req,res) => {
    res.status(200).json({success: true, data: `receive id ${req.params.id}`})
})
```
///rly post, put and delete routes can be added.

- adding routes in the server.js file will end up populating the entire file with routes. For such cases we use express router to manage different routes. See: [[learning.express.router]]

