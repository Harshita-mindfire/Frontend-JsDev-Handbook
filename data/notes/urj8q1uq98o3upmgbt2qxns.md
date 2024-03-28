
## kill a port

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