---
id: o6kk58cac0vvnxzxpfuo3gt
title: Link
desc: ''
updated: 1751453456962
created: 1751453456962
---
- Nextjs provide `<Link>` component for client side navigation.
- inherits HTML's <a> tag.
- imported from "next/link"

```tsx
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      Welcome Home
      <Link href="/about">About</Link>
    </div>
  );
};

export default Home;


```

- **replace** attribute : replaces overrides the current history entry instead of adding a new one. <Link href="" replace>

## Styling Links

```tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "./layout.css";

const linksHref = [
  { href: "/login", title: "Login" },
  { href: "/register", title: "Register" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div>
      {linksHref.map((item, index) => {
        const isActive =
          item.href === pathname ||
          (pathname.startsWith(item.href) && item.href !== "/");
        return (
          <Link
            href={item.href}
            key={index}
            className={isActive ? "active" : ""}
          >
            {item.title}
          </Link>
        );
      })}
      {children}
    </div>
  );
};

export default AuthLayout;


```