---
id: urj8q1uq98o3upmgbt2qxns
title: Troubleshoot
desc: ''
updated: 1671014275336
created: 1671014275336
---

## kill a port

```bash

netstat -ano | findstr : 3000

taskkill /PID <PID> /F
```

## npm connection refused error

```
npm config set proxy null
npm config set https-proxy null
npm config set registry http://registry.npmjs.org/
```