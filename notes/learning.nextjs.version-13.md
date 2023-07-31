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

## Data Fetching in v-13

```j
// This request should be cached until manually invalidated.
// Similar to `getStaticProps`.
// `force-cache` is the default and can be omitted.
fetch(URL, { cache: 'force-cache' });
 
// This request should be refetched on every request.
// Similar to `getServerSideProps`.
fetch(URL, { cache: 'no-store' });
 
// This request should be cached with a lifetime of 10 seconds.
// Similar to `getStaticProps` with the `revalidate` option.
fetch(URL, { next: { revalidate: 10 } });
```