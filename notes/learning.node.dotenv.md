---
id: hfg36vfiasgeg48e0rn0ei3
title: Dotenv
desc: ''
updated: 1671456392572
created: 1671456392572
---
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
