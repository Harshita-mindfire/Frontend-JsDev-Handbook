
## default routes
After the application is integrated with Auth0, the library provides default routes for logging in and out. You can test out the routes and we will be monitoring your logs in real-time to display relevant information.

- For login: In your application, visit the /login route provided by the library. If you are running your project on http://localhost:3000 that link would be http://localhost:3000/login.
- For logout: In your application, visit the /logout route provided by the library. If you are running your project on http://localhost:3000 that link would be http://localhost:3000/logout.

## requiresAuth

requiresAuth middleware is for routes that require authentication. Any route using this middleware will check for a valid user session and, if one does not exist, it will redirect the user to log in.