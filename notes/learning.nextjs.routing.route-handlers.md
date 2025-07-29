---
id: 0bvpfpbl0mfb06jdccaiqao
title: Route Handlers
desc: ''
updated: 1753204420955
created: 1753204420955
---
- app router also let us create **custom request handlers for your routes**.
- unlike page routes, which returns HTML content, Route handlers let us build RESTFUL endpoints with complete control over response.
- Just like Node + express app.
- good for making external API request
- runs server side, hence the secret keys are also secured and never reaches browser
- supports **GET, POST, PUT, PATCH DELETE, HEAD, OPTIONS.**
- returns 405 method not allowed response for unsupported method.

- we are studing app router here, but if you remember page router, route handlers are equivalent to /api routes.

## Conventions
- create  `route.ts` file inside app directory.
- **the route.ts file in the same route segment level as page.tsx will result in a conflict and page.tsx will not be served. Instead the route handler handles the request**

- the Handler functions takes 2 parameters
    - request object => request: NextRequest 
    - context object containing route params => {params} : {params: Promise<{id: string}>}


## Dynamic route handlers

```graphql

- app
    |___comments
         |_____route.ts
                 |_____[id]
                        |______route.ts
```

### Examples
- **contents of /app/comments/route.ts:**

```ts
// route handler
import { comments } from "./data";
// Get method
export async function GET() {
  return Response.json(comments);
}

// post method
export async function POST(request: Request) {
  const content = await request.json();
  // similar to DB call
  const newComment = {
    id: comments.length + 1,
    text: content.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
```

- **contents of /app/comments/[id]/route.ts**

```ts
import { NextRequest } from "next/server";

// dynamic route handle, get comment with a specific id
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}

// patch
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await request.json();
  const { id } = await params;
  const { text } = body;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  const deletedData = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedData);
}
```

## URL Query Params

Fetching the params after ?

```ts
import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredComments);
}
```

## Headers
- HTTP headers represents the metadata associated with req and response
  - **Request Headers**: sent by client(like web browser) to server. Sends essential info about request to servers. eg: accept, user-agent, authorization etc.

  - **Response Headers**: sent back from server to client. 
      provide info about the server and the data being sent in response.
      eg: "Content-Type",

### Examples

```ts
import { headers } from "next/headers"
export async function GET(request: NextRequest) {
  const headerData = await headers();
  const token = headerData.get("Authorization");
  console.log("token", token);
  const query = searchParams.get("query");
  return new Response("<h1> Hi</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
```

## Cookies
- small piece of data that server sends to user's web browser.
- browser can store cookies and send it back to server with future request.

3 main purpose
- managing user session (like user login and shopping cart)
- handling personalizations(such user preferences and themes)
- tracking (like recording and analyzing user behaviour)

### Example: Setting and retrieving via headers and request

```tsx
//setting a cookie
return new Response(JSON.stringify(comment), {
    headers: {
      "Set-Cookie": "theme=dark",
    },
  });
```

```tsx
//retrieving cookie
export async function GET(
  request: NextRequest,
) {
  const cookies = request.cookies.get("theme");
  console.log(cookies); // { name: 'theme', value: 'dark' }
```

### Example: setting using cookies from next/headers

```tsx
import { cookies } from "next/headers";

cookieStore.set("resultsPerPage", "20");
console.log(cookieStore.get("resultsPerPage"));
```

## redirect in route handlers

```ts
import {redirect} from "next-navigation"
export async function GET() {
 redirect('/api/v2/users')
}
```

## Caching

route handlers are not cached by default but you can opt for caching when using **GET** method.
- Caching **only** works with **GET** methods. Other HTTP methods are never cached.
