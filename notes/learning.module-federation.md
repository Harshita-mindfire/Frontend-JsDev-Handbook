---
id: ohnfdy7pjyhxur8g6kejjcr
title: Module Federation
desc: ""
updated: 1684218812743
created: 1684218812743
---

- way to run time share code bw applications. This gives ability to do a run time dependency.
- way to manage micro fe.

> webpack.config of app 1

```js
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
plugins: [
  new ModuleFederationPlugin({
    name: "counter",
    filename: "remoteEntry.js", // this file is the manifest of all the modules shared by this app
    remotes: {}, // the other application will use this property to access the exposed component
    exposes: {
      "./Counter": "./src/components/Counter", // component that is exposed by one application
    },
    shared: {
      ...deps,
      react: {
        singleton: true,
        requiredVersion: deps.react,
      },
      "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
    },
  }),
];
```

> webpack config of app 2

```js
...
    remotes: {
        counter: "counter@http://localhost:8081/remoteEntry.js"
      },
```

## Resource

- https://github.com/Harshita-mindfire/micro-fe-demo
