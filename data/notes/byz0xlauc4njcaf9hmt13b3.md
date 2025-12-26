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

## Handling errors in layouts
- The error boundary won't catch error thrown in layout.tsx within the same segment(in the same folder) because of the component rendering hierarchy.
- layout sits above the error boundry in the component tree.
- to resolve, move the error boundry at the parent of layout.

So how do we handle errors that are thrown from root layout? Since it does not have a parent, how do we catch it?

via **global-error.tsx** that sits in the root directory. 

## Global error boundry
- global-error.tsx
**NOTE: IT only works in production mode.**
- It needs its own html and body tags to be rendered since it replaces our root layout.
