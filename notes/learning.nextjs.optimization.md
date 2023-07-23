---
id: 66gcanxafeme14qkyj2maxm
title: Optimization
desc: ''
updated: 1690123074753
created: 1690123074753
---

## Head Metadata

- Import Head from next/head and use it for any component;

```js
import { Fragment } from 'react';
import Head from 'next/head';

function Component1() {
  return (
    <Fragment>
      <Head>
        <title>Events Page</title>
      </Head>
      <SomeComponent />
    </Fragment>
  );
}
```
note: next.js automatically merges multiple head elements. if there is tag conflict(like two Head have title property), the latter one will be used.