
- add separate routes using express router
```js
const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.status(200).json({success: true, data: {id: 1}})
})

module.exports = router
```

- use middleware in server file to use the express router created in above snippet

```js
const testRoute = require('/path-to-route-file')
...
app.use("/api/v1/test", testRoute)
```

- presently the route methods just return the dummy data in response but eventually in a real app this is gonna get big. We might have db operations etc before sending the response. In express we use controller methods to write the router operation. Each route has its own controller method.