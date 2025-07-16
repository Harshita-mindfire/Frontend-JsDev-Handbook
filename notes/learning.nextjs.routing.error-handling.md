---
id: byz0xlauc4njcaf9hmt13b3
title: Error Handling
desc: ''
updated: 1752658195400
created: 1752658195400
---
- are **client components**
- error.tsx file
- receives error and reset prop.
- error is of type Error and reset is a function that attempts to retry rendering the component.
- enables you to attempt to recover from from an error without requirring a full page review.

![](/assets/images/component-hierarchy.png)

```tsx
"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      Error is: {error.message}
      <button onClick={reload}>Try again</button>
    </div>
  );
};

export default ErrorBoundary;


```