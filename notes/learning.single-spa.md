---
id: j0wjsc0etz3n8bctudv06qr
title: Single Spa
desc: ""
updated: 1684130146878
created: 1684130146878
---

- in single-spa framework, each microfrontend is a in-browser js module.
  If you check the network tab for such an application, you can see 1-1 mapping of microfe to in-browser module.

Within the context of single spa, there are 3 kinds of microfes

- single spa applications: chunk of UI that is incharge of a URL route/routes. eg: login.
- single spa parcels: chunk of UI that is not incharge of any url route
- helper modules: it is not a UI component. It is just a js module. It does not create any dom elems. It is just a js module that helps you do something. eg. error handling, esm-api helper modules

## In-browser module vs build time module

This is decided by the webpack. In browser modules preserve the imports, build time module replaces the import with the actual module making it one bundle. Single network request is made to download
