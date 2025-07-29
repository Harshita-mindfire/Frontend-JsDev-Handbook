---
id: kgx3khbrerpazr8go9comf8
title: Rendering
desc: ''
updated: 1753789040778
created: 1753789040778
---
- CSR
- SSR
- RSR
- SSG

## Client side rendering
- The approach where browser(client) transforms react components into what you see on screen.

![alt text](/assets/images/CSR.png)

### Drawbacks of CSR
- **SEO**: When SEs crawl your site, they are looking for HTMl content to understand what the page is about. But with CSR, the page source is basically an empty div. Since content relies on JS to render on Client site, SE struggles to index it properly.

- **Performance and UX**: users can suffer from slow load times, as their browser download, parse and execute JS before seeing any meaningful content.





## Server side solutions

![alt text](/assets/images/SSR.png)

1. Static Site Generation (SSG)
 
2. Server-Side Rendering (SSR)
 
SSG happens during build time when you deploy your application to the server. This results in pages that are already rendered and ready to serve. It's perfect for content that stays relatively stable, like blog posts
 
SSR, on the other hand, renders pages on-demand when users request them. It's ideal for personalized content like social media feeds where the HTML changes based on who's logged in.

### Hydration
(react adding interactivity to the server rendered HTML)
 
During hydration, React takes control in the browser and reconstructs the component tree in memory, using the server-rendered HTML as a blueprint
 
It carefully maps out where all the interactive elements should go, then hooks up the JavaScript logic
 
This involves initializing application state, adding click and mouseover handlers, and setting up all the dynamic features needed for a full interactive user experience.

### Drawbacks of SSR
 
- **You have to fetch everything before you can show anything**
 
Components cannot start rendering and then pause or "wait" while data is still being loaded
 
If a component needs to fetch data from a database or another source (like an API), this fetching must be completed before the server can begin rendering the page
 
This can delay the server's response time to the browser, as the server must finish collecting all necessary data before any part of the page can be sent to the client

- **You have to load everything before you can hydrate anything**
 
For successful hydration, where React adds interactivity to the server-rendered HTML, the component tree in the browser must exactly match the server-generated component tree
 
This means that all the JavaScript for the components must be loaded on the client before you can start hydrating any of them.

- **You have to hydrate everything before you can interact with anything**
 
React hydrates the component tree in a single pass, meaning once it starts hydrating, it won't stop until it's finished with the entire tree
 
As a consequence, all components must be hydrated before you can interact with any of them.


#### all or nothing waterfall
 
1. having to load the data for the entire page
 
2. loading the JavaScript for the entire page, and
 
3. hydrating the entire page
 
at once, create an "all or nothing" waterfall problem that spans from the server to the client, where each issue must be resolved before moving to the next one
 

