---
id: yesj05qpt4higyxwmcii776
title: Fundamentals
desc: ''
updated: 1690026500527
created: 1690026500527
---

- Next.js is a framework for building web applications.
- Next.js uses file-system routing, which means how you structure your files determines the routes in your application.

## Fundamentals

- _app.js allows you to customize everything that would be rendered as a body of an html document.
- _documents.js allows you to customize your entire html document. You need to define a special `class` component inside it.
    - this is required if you want to add some elements outside your application or add html level customizations like <html lang="en>

```js
import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDoc extends Document {
render() {
    return(
        <Html lang="en">
            <Head />
            <body>
                <div id="overlay" />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
}
```

### installation
```bash
npx create-next-app@latest
```



### Why Server Components?
- better leverage server infrastructure. 
eg: you can move data fetching to the server, closer to your database, and keep large dependencies that previously would impact the client JS bundle size on the server, leading to improved performance.
- client-side JavaScript bundle size is reduced.



### Difference b/w nextjs file base routing and React-Code based routing

- no boiler plate code for adding routes in nextjs page based routing. The pages folder structure in itself are routes. Files and folder structure(in /pages folder) influences routes.

### use client directive

The "use client" directive is a convention to declare a boundary between a Server and Client Component module graph.