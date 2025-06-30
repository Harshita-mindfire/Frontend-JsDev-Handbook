---
id: vh28j803j8gmx35nymyloxt
title: Routing
desc: ''
updated: 1750932276890
created: 1750932276890
---

Reference repo: https://github.com/Harshita-mindfire/next-js-learn

- File system based routing.

**Routing conventions:**

1. All routes must be inside app folder.
1. Each folder represents a segment of URL path.
1. Routes files must be named either page.js or page.tsx
1. 404 routes are handled by default.

- Every page in app router receives route parameters through params prop. The type of params is a promise that resolves to an obj containing dynamic segments as key value pairs.


When these conventions are followed, route file automatically becomes available as a route.

- similarly for nested routes: 

![](/assets/images/nested-routes.png)

## Dynamic routes

- folder with name wrapped around with sqaure brackets [ ].

```figma
- app
    - products
        - page.tsx
        - [productId]
            - page.tsx
    - page.tsx

```

- to now get the segment from http://localhost:3000/products/1
```jsx
import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;
  return <div>Product details: {productId}</div>;
};

export default ProductDetails;
```

### Nested dynamic routes

![](/assets/images/routes.png)

### Catch all segments

- [...slug]
    - page.tsx