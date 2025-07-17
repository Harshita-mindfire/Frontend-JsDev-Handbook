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

- Every page in app router receives route parameters through [[params | learning.nextjs.routing.Link#params]] prop. The type of params is a promise that resolves to an obj containing dynamic segments as key value pairs.


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

- Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...segmentName].

```figma
- shop
  - [...slug]
    - page.tsx
```



For example, /shop/[...slug].js will match /shop/clothes, but also /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.

Route	Example URL	params
/shop/[...slug].js	/shop/a	{ slug: ['a'] }
/shop/[...slug].js	/shop/a/b	{ slug: ['a', 'b'] }
/shop/[...slug].js	/shop/a/b/c	{ slug: ['a', 'b', 'c'] }

- To make the slugs optional, wrap the slug in double square brackets "[[]]"

/shop/[[...slug]].js	/shop	{ slug: undefined }

For example if you would try to access just the /shop, it would result in 404. To use the same page.tsx inside slug and also to make slugs optional, we can do the following:
```figma
- shop
  - [[...slug]]
    - page.tsx
```

## custom 404
- not-found.tsx
```tsx 
export default function NotFound() {
  return <h1> custom 404 page <>/h1>
}
```
The file with this route gets called automatically on 404. We can also explicitally call this as a func as well.

**NOTE**: **NotFound component does not accept any props**
Use `usePathname` from `next/navigation` hook to access the url segments.

```tsx
const pathname = usePathname()

```

**NOTE** _To use usePathname() hook, the component must be a client component, hence add "use-client" directive at the top of the page._



Let's say we want to call 404 page if the review id is > 100 (eg: /products/1/reviews/1000 )

```tsx
import {notFound } from "next/navigation;

export default async function ProductReview({params} : {params: Promise<{productId: string; reviewId: string}>}) {
  const { reviewId} = await params;
  if(parseInt(reviewId) > 100) {
    notFound()
  }
  return <h1> Review no {reviewId} of {productId} </h1>
} 
```


## Private folders

- starts with underscore _
- the folder and its sub folders are excluded from routing.

### uses
- separating UI logic from routing logic
- consistent way to organize internal files.

## Route groups
- logically organize our routes and project files without impacting the URL structure.
- only way to share layouts between routes without affecting the URL.
- also helps us to apply routes selectively to specific parts of app(multiple root layout)

_the folder wrapped in () tells nextjs to use this as an organizational tool only and exclude it from the url. Now the urls inside it are still accessed with http://localhost:3000/register and not /auth/register_

```figma
- (auth) 
  - register
    - page.tsx
  - login
    - page.tsx
  - forgotpassword
    - page.tsx
```