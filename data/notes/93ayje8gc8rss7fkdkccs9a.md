
## Blog post
- [Vite Crash Course Blog](https://www.traversymedia.com/blog/vite-crash-course)

- npx create-vite-app my-app --template react-ts
- dev server
- when we build, vite uses `Rollup` (module bundler) to bundle files for production.
- fast
- Sass support is built into Vite
## Start
npm init vite@latest vite-project

## Configure port
We can also change some settings, including the port that the development server runs on. By default, it runs on port 5173. I prefer port 3000, so I'm going to change it to that.
```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
```

## Env variables
Just like CRA, Vite supports environment variables. We can create a .env file in the root of our project. We can then add environment variables to this file. They must begin with VITE_. Let's create one called VITE_API_KEY and set it to 123456789.
```.env
VITE_API_KEY=123456789
```
Now, let's go into the header and try to access this environment variable. We can do this by using the import.meta.env object.
```js
const Header = () => {
  return <div>{import.meta.env.VITE_API_KEY}</div>;
};
```

export default Header;

## Vite vs traditional module bundlers
![vite vs other module bundlers](/assets/images/vite-vs-others.png)


- in development, it doesnot rebundle everything everytime you make a change. instead, it takes advantage of native ES modules in the browser. In modern browsers you can use the ES modules(import/export syntax)
It add scripts as 
```
<script type="module" src="main.js">
```

