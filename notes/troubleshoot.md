---
id: urj8q1uq98o3upmgbt2qxns
title: Troubleshoot
desc: ''
updated: 1671014275336
created: 1671014275336
---

## kill a port in windows

```bash

netstat -ano | findstr :3000

taskkill /PID <PID> /F
```

## npm connection refused error

```
npm config set proxy null
npm config set https-proxy null
npm config set registry http://registry.npmjs.org/
```

## prettier not working on save?

- go to settings: > cmd+shidt+P/Ctrl + Shift+P > Preferences: Open Settings (UI) > write on save in search bar, check Editor: Format on Save


## kill a port in mac

- Find: `sudo lsof -i :3000`

- Kill: `kill -9 <PID>`
