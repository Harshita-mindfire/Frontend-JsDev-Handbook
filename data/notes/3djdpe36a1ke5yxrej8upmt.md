- a library that allows you to write fully typesave API without any schema or code generation.

### When a good choice
- when typescript in both fe and be
- for fast pace project

### when a bad choice
- your teams already working on graphQL
if backend and fe uses different languages or teams are different

## RPC
- RPC is short for "Remote Procedure Call".
- It is a way of calling functions on one computer (the server) from another computer (the client). With traditional HTTP/REST APIs, you call a URL and get a response. With RPC, you call a function and get a response.

```js
// HTTP/REST
const res = await fetch('/api/users/1');
const user = await res.json();

// RPC
const user = await api.users.getById({ id: 1 });
```