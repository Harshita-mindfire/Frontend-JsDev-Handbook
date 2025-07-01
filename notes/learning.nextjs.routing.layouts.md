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


## Multiple root layouts


