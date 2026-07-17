
- advanced routing mechanism that allows you to load a route from another part of application within current layout.
- particularly useful when you want to display new content while keeping ypur user in same context.
- let you show alternate UI by preserving context but defaults to the standard UI on direct page loads.
- **intercepting routes are created in source folder**
- these routes **require a specific prefix** based on below conventions.


## Conventions

- use (.) to match segments at same level
- use (..) to match one level above 
    > similar to how we relative import files ./file.tsx for same level, ../file.tsx on level above
- use (..)(..) to match 2 level above
- use (...) to match segments from root app directory.

```graphql

app/
├── layout.js
├── folder1
│   └── page.js
|   |
|   └── (..)f3 // intercepting route for f3
|   |      └── page.js 
|   |
|   └── (.)f2 // dest. route(f2) is present at same level with intercepting here
|   |      └── page.js // intercepted UI
|   |
|   └── f2
|       └── page.js // Original f2 UI
|       |
|       └── (..)(..)f4 // intercepting f4 present at 2 level above.
|
├── f3 // original f3 UI
│   └── page.js
|
├── f4 // original f4 UI
│   └── page.js

```

From this above structure the intercepted UI is displayed if we try to load UI of f2 or f3 from f1
eg:
```tsx
<Link href={"/f1/f2"}>F2 </Link>
<Link href={"/f3"}>F3 </Link>
```

example:
![intercepting routes](/assets/images/intercepting-routes.png)
