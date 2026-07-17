
Scenarios where we can use client or server components.
## Server components
- fetching data
- accessing backend resources directly
- keeping sensitive information (like access tokens and API keys) secure on the server
- handling large dependencies server-side - which means less JavaScript for your users to download

## Client components
 
- adding interactivity
- handling event listeners (like onClick(), onChange(), etc.)
- managing state and lifecycle effects (using hooks like useState(), useReducer(), useEffect()) 
- working with browser-specific APIs 
- implementing custom hooks
- Using React class components


But the differentiation isn't that black and white always. **Here are some patterns to keep in mind:**

# Server component patterns

## Server-only code
- Some code is specifically designed to run exclusively on the server
 
- Think about modules or functions that work with multiple libraries, handle environment variables, communicate directly with databases, or process sensitive information.
 
- Since JavaScript modules can be shared between Server and Client Components, code meant for the server could accidentally find its way to the client
 
- This is bad news as it can bloat your JavaScript bundle, expose your secret keys, database queries, and sensitive business logic
 
It's super important to keep server-only code separate from client-side code

> use **_server-only_** package. This throws a build time error if a someone accidentally imports server code into Client component.

```tsx
import "server-only";
```

## Third party packages

- Server Components have introduced an exciting new paradigm in React, and the ecosystem is evolving to keep up
 
- Third-party packages are starting to add the "use client" directive to components that need client-side features, making it clear where they should run
 
- Many npm packages haven't made this transition yet
 
- This means while they work fine in Client Components, they might break or fail completely in Server Components
 
- We can wrap the third-party components that need client-side features in our own Client Components: i.e, create a client component "use client" and use the third party package here, import this client component in server component instead of directly writing code of such third party packages in server component.

## Context providers
Context providers typically live near the root of an application to share global state and logic. For example, your application's theme.
 
However, React context isn't supported in Server Components.
 
If you try to create a context at your application's root, you'll run into an error. **The solution is to create your context and render its provider inside a dedicated Client Component**

- Extracting the context provider and wrapping other server components as its children does not turn those server components into client components. We’ll dive deeper into this idea later when discussing client-side patterns.


# Client component patterns

## Client only code
