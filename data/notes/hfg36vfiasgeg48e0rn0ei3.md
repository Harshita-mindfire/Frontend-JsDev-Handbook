## Usage

- env file
```env
PORT=3000
```
- import dependency
```js
const dotenv = require('dotenv')
dotenv.config({path: './conf/dummy.env'})
```
- usage

```js
const port = process.env.PORT || 3000
```
