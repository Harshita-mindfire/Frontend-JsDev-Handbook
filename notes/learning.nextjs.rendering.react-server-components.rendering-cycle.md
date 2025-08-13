---
id: sklzx0bvf0dyg34fzr0t0x1
title: Rendering Lifecycle
desc: ''
updated: 1755091408034
created: 1755091408034
---

RSC have 3 key players
- your browser(client)
- Next js(framework)
- React (our library)

## Server rendering strategies
- Static rendering
- dynamic rendering
- streaming

### Static rendering
 
Static rendering is a server rendering strategy where we generate HTML pages when building our application
 
Think of it as preparing all your content in advance - before any user visits your site
 
Once built, these pages can be cached by CDNs and served instantly to users
 
With this approach, the same pre-rendered page can be shared among different users, giving your app a significant performance boost

**Usage**: blog post, e-commerce product listings, documentation(like the one you are currently reading, it is statically rendered.) 

### How to statically render
- default strategy in app router. all routes are automatically prepared at build time without any additional help.

### Summary
 
Static rendering is a server rendering strategy where we generate HTML pages when building our application
 
Think of it as preparing all your content in advance - before any user visits your site
 
Once built, these pages can be cached by CDNs and served instantly to users
 
With this approach, the same pre-rendered page can be shared among different users, giving your app a significant performance boost