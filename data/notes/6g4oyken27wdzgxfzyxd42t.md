

clone element
```js
import { cloneElement } from 'react';

// ...
const clonedElement = cloneElement(
  <Row title="Cabbage">
    Hello
  </Row>,
  { isHighlighted: true },
  'Goodbye'
);

console.log(clonedElement); 
```

To override the props of some React element, pass it to cloneElement with the props you want to override:

```jsx

import { cloneElement } from 'react';

// ...
const clonedElement = cloneElement(
  <Row title="Cabbage" />,
  { isHighlighted: true }
);
Here, the resulting cloned element will be <Row title="Cabbage" isHighlighted={true} />.
```