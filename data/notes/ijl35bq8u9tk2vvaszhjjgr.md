
## Context
Context lets a component provide some information to the entire tree below it.


- To pass context:
  - Create and export it with export const MyContext = createContext(defaultValue).
  - Pass it to the useContext(MyContext) Hook to read it in any child component, no matter how deep.
  - Wrap children into <MyContext.Provider value={...}> to provide it from a parent.

Context.ts
```ts
import { createContext } from "react";

const ImageContext = createContext(500);
```

App.ts

```ts
const [isLarge, setIsLarge] = useState(false);
const imageSize = isLarge ? 150 : 100;

<ImageContext.Provider value={imageSize}>
    {props.children}
</ImageContext.Provider>
```
Someapp.ts (considering very low in the tree)
```ts
const imageSize = useContext(ImageContext);
<img width = {imageSize} height = {imageSize}>
```
