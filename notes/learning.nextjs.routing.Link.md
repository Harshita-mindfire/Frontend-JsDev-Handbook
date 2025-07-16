---
id: o6kk58cac0vvnxzxpfuo3gt
title: Link
desc: ''
updated: 1751453456962
created: 1751453456962
---
- Nextjs provide `<Link>` component for client side navigation.
- inherits HTML's `<a>` tag.
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

- **replace** attribute : replaces overrides the current history entry instead of adding a new one `<Link href="" replace>`.

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

## params

params is a promise that resolves to an ob j containing the dynamic route parameters (like id)

## searchParams:
- promise that resolves to an obj containing query params (like filters and sorting)

Below is an example through server component.


```tsx
import Link from "next/link";
import React from "react";

const ArticleDetails = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: string }>;
}) => {
  const { articleId } = await params;
  const { lang } = await searchParams;
  return (
    <div>
      Title: {articleId} in language {lang}
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>Read in english</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>Read in French</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Read in Spanish</Link>
      </div>
    </div>
  );
};

export default ArticleDetails;
```

- await params and search params is only possible in server components. Next.js Client Components themselves cannot be defined as async functions, meaning you cannot directly use await at the top level of a Client Component's render function. This is a fundamental distinction between Server Components and Client Components in Next.js.
However, this does not mean you cannot use async/await within Client Components at all. You can use async/await within. for example in useEffect/eventhandlers etc.

```tsx
"use client";

import Link from "next/link";
import React from "react";
import { use } from "react";

const ArticleDetails = ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: string }>;
}) => {
  const { articleId } = use(params);
  const { lang } = use(searchParams);
  return (
    <div>
      Title: {articleId} in language {lang}
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>Read in english</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>Read in French</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Read in Spanish</Link>
      </div>
    </div>
  );
};

export default ArticleDetails;
```


## Navigating Programmatically

- **useRouter**
- **redirect**

### useRouter

```tsx
"use client";
import { useRouter, redirect } from "next/navigation";
import React, { use } from "react";

const OrderProduct = ({
  searchParams,
}: {
  searchParams: Promise<{ country: string }>;
}) => {
  const router = useRouter();
  const { country } = use(searchParams);
  console.log("country", country);
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <button onClick={handleClick}>Order Product</button>
      {country === "in" ? redirect("/") : redirect("/about")}
    </div>
  );
};

export default OrderProduct;


```