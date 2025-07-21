---
id: bissfxn4ra3hsnuvit2fzl6
title: Layouts
desc: ''
updated: 1751290471741
created: 1751290471741
---

- Pages are route specific UI components
- Layouts is a UI that is shared between multiple pages in your app like header, footer etc.

## Creation
- default export a react component from `layout.tsx` file.
- takes a children prop populated with page content.

eg: root layout. any structure in here goes to all the pages.
The children prop changes based on the route accessed.
```tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "#f4f9f7",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          Header
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          Footer
        </footer>
      </body>
    </html>
  );
}


```

## Nested Layout
layout.tsx inside a route is specific for that route.

## Multiple root layout.
If we want let say 2 of our route to have one layout and all the others to have another, we would require multiple root layouts,
for this, we take help of router groups.

Eg: we need only footer for login and register route, for customers, we want both header and footer.

```figma
- app
  - (auth)
    - login
      - page.tsx
    - register
      - page.tsx
    layout.tsx //AuthRootLayout
  - (marketing)
    - customers
      - page.tsx
    - suppliers
      - page.tsx
    - page.tsx //global entry page
    - layout.tsx //MarketingRootLayout
```



## Handling errors
- ![[learning.nextjs.routing.error-handling#handling-errors-in-layouts]]


