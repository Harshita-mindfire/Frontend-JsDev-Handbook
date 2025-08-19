---
id: fq3hkpwfr9vkg8prtpofbrp
title: Server Rendering Strategies
desc: ''
updated: 1755609370708
created: 1755609370708
---
- Static rendering
- dynamic rendering
- streaming

# Static rendering
 
Static rendering is a server rendering strategy where we generate HTML pages when building our application
 
Think of it as preparing all your content in advance - before any user visits your site
 
Once built, these pages can be cached by CDNs and served instantly to users
 
With this approach, the same pre-rendered page can be shared among different users, giving your app a significant performance boost

**Usage**: blog post, e-commerce product listings, documentation(like the one you are currently reading, it is statically rendered.) 

## How to statically render
- default strategy in app router. all routes are automatically prepared at build time without any additional help.

## Summary
 
Static rendering is a server rendering strategy where we generate HTML pages when building our application
 
Think of it as preparing all your content in advance - before any user visits your site
 
Once built, these pages can be cached by CDNs and served instantly to users
 
With this approach, the same pre-rendered page can be shared among different users, giving your app a significant performance boost

# Dynamic rendering

- Dynamic rendering is a strategy where the HTML is generated at request time
 
- Next.js automatically enables it when it encounters dynamic functions like **cookies, headers, connection, draftMode, after or searchParams** prop
 
- Dynamic rendering is great for personalized content like social media feeds
 
- You don't have to stress about choosing between static and dynamic rendering
 
- Next.js automatically selects the optimal rendering strategy for each route based on the features and APIs you're using
 
- if you want to force a route to be dynamically rendered, you can use the 
```jsx
export const dynamic = 'force-dynamic" config at the top of your page
```

## generateStaticParams

let you to pre-render static routes for dynamic segments. Runs at build time. Hnadles multiple dynamic segments.
- returns an array of objects where the keys are dynamic route parameters. 
- givings us a nice performance boost.


- app/products/[id]/page.tsx
```tsx
export default async function ProductPage({params}: {params: Promise<{id: string}>}) {

    const {id} = await params
    return <h1> Product {id} details
}
```

building this, the product details page is dynamically rendered, since nextjs doesn't know what id value it would need until someone requests a specific url.

**To generate a few pages statically, we can use `generateStaticParams` function. It helps with frequently accessed pages, they are pre-rendered and ready to be served instantly.** 

- app/products/[id]/page.tsx
```tsx

// we are statically passing these 3 params, now these 3 pages will be statically generated.

export async generateStaticParams() {
    return [{id: "1"}, {id: "2"}, {id: "3"}]
}

export default async function ProductPage({params}: {params: Promise<{id: string}>}) {

    const {id} = await params
    return <h1> Product {id} details
}
```

- for routes with multiple dynamic route segments:
Suppose we have a product catalog with categories and products
 
/products/[category]/[product]/page.tsx

```tsx 
export async function generateStaticParams() {
 
return [
    { category: "electronics", product: "smartphone" },
    
    { category: "electronics", product: "laptop" },
    
    { category: "books", product: "science-fiction" },
    
    { category: "books", product: "biography" },
]; 
}
```

## dynamicParams

### Without dynamicParams defined (default: true) or With dynamicParams = true

- **Behavior**: If you don’t define dynamicParams, Next.js assumes dynamicParams = true.

- **Effect**:
If a user requests a dynamic route (e.g. /blog/123) that wasn’t returned by generateStaticParams, Next.js will try to dynamically generate the page at runtime.

This is useful if you expect routes outside the pre-generated list to still work.

✅ Example: // app/blog/[id]/page.tsx


```tsx
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }]; // prebuilds /blog/1 and /blog/2
}
// dynamicParams not defined → defaults to true

```

Visiting /blog/3 → Page still works (fetched at runtime).

### With dynamicParams = false

- **Behavior**: You are telling Next.js that only the params returned from generateStaticParams are valid.

- **Effect**: If a user requests a route not in generateStaticParams, they’ll get a 404 instead of dynamic generation.
This is useful when your routes are fixed/finite (e.g. product categories, locales).

✅ Example:

```tsx
// app/blog/[id]/page.tsx
export const dynamicParams = false; // 🚫 no runtime params
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}
```
- Visiting /blog/1 or /blog/2 → Works (prebuilt).
- Visiting /blog/3 → 404 (no fallback)


**🔑 Summary**

- **generateStaticParams + dynamicParams=false** → ✅ only prebuilt routes, ❌ strict 404 for missing ones.

- **generateStaticParams + dynamicParams=true** → ✅ prebuilt routes, but missing ones will render dynamically or statically depending on presence of dynamic functions in the page.

- **No generateStaticParams at all** → (by default is true)

# Streaming
