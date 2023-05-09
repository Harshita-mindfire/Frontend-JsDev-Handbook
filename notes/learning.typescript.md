---
id: w5l9zvdha3es8jaxge5e4lu
title: TypeScript
desc: ""
updated: 1683533919973
created: 1683533919973
---

## Creating nodejs application with typescript config

1. npm init -y
1. save typescript as dev dependency: `npm i -D typescript`
1. Create tsconfig.json: `npx tsc --init`.
1. Mark `"esModuleInterop": true` in tsconfig.json to support import syntax
1. `tsc` will compile typescript files to js, you can configure tsconfig.json's `outDir` property to provide path for transpiled files.
1. `tsc -w` will watch for changes.
1. use [[ts-node|learning.typescript#ts-node]] and nodemon in dev environment.

## ts-node

The ts-node library is a TypeScript execution and REPL (Read-Eval-Print Loop) for Node.js. It allows you to directly run TypeScript code without explicitly compiling it to JavaScript.

When you run a TypeScript file using the ts-node library, it dynamically compiles the TypeScript code on-the-fly and executes it in the Node.js runtime environment. This eliminates the need to manually compile the TypeScript code before running it with Node.js.
