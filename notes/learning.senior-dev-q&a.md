---
id: wcnq8v8lx85s853mqbfwoen
title: Senior Dev Q&a
desc: ''
updated: 1713761828763
created: 1713761828764
---
### GraphQL vs Rest

- REST is a mature technology that has been widely used for building APIs for many years. It’s based on the principles of HTTP and uses HTTP verbs like GET, POST, PUT, and DELETE to interact with resources. REST APIs usually return JSON or XML data.
- GraphQL is a relatively newer technology. It allows clients to specify the data they need and returns only the requested data in a single response. 

Here are some considerations for React developers who need to choose between GraphQL and REST:

- **Data requirements**: If your application requires a lot of different data from different endpoints, GraphQL can be a good option because it allows you to specify exactly what you need. With REST, you might have to make multiple requests to different endpoints to get all the data you need.
- **Caching**: REST APIs can be more easily cached, which can improve performance. GraphQL has its own caching mechanisms, but they can be more complex to implement.
- **Learning curve**: GraphQL can have a steeper learning curve for developers who are not familiar with it. REST is a more straightforward technology that many developers are already comfortable with.


### virtualization
- https://blog.logrocket.com/rendering-large-lists-react-virtualized/