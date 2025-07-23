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
    - request object => request: Request 
    - context object containing route params => {params} : {params: Promise<{id: string}>}


## Dynamic route handlers

```graphql

- app
    |___comments
         |_____route.ts
                 |_____[id]
                        |______route.ts
```

## Examples
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
// dynamic route handle, get comment with a specific id
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}

// patch
export async function PATCH(
  request: Request,
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
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  const deletedData = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedData);
}
```