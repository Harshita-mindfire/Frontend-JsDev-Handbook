---
id: ze1zcgam9aozgrup2l8kted
title: Version 13
desc: ''
updated: 1690279442414
created: 1690279442414
---

routes are defined in /app folder

## use client directive

The "use client" directive is a convention to declare a boundary between a Server and Client Component module graph.

## Server and Client Components

- by default all components are server components.
- Can be differenciated via "use client".

### Why Server Components ?

- better leverage server infrastructure. 
eg: you can move data fetching to the server, closer to your database, and keep large dependencies that previously would impact the client JS bundle size on the server, leading to improved performance.
- client-side JavaScript bundle size is reduced.

### Advantages of server components

- loads faster
- smaller client bundles
- SEO friendly
- access to resources that client cannot use(DB, file system etc)

### Disadvantages

- not user friendly
- no component state. Can't use the useState hook. Import will give error.
- no lifecycle methods. Can't use useEffect.

### Client components

Now if you want to use useState in one of your component, write "use client" as the first line of your code, and nextjs will regard it as a client component.