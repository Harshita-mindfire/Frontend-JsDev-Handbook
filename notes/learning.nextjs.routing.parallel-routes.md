---
id: uknad7zvwt0vmshlus5jkrm
title: Parallel Routes
desc: ''
updated: 1753090957802
created: 1753090957802
---
- Parallel routes allow you to **render multiple pages in parallel under different named slots** (routes) within a single layout
- They’re used when you want to render multiple views at once that are independent of each other but share layout structure.
- They’re defined in the app/ directory using the `@slot` naming convention.
- **slots are received as props in the layout**.
- the children prop is also a slot by default.

```graphql
app/
├── layout.js
├── @analytics/
│   └── page.js
├── @main/
│   └── page.js

```

if you're building:
- Modal-based routing
- Split-view dashboards
- Multi-panel layouts with deep linking
- Nested or partially refreshing UIs

## Important features
- **independent route handling**
    - each slot can have its own loading, error states. This is useful in scenarios where different sections of the page load at varing speed and can have different errors

    ![parallel routing](/assets/images/parallel-route.png) 

- **subnavigation in routes**: Each slot can function as mini application, has its own navigation and state management.
    - users can interact, sort, filter with a slot, navigating through pages without affecting others.

    ![alt text](/assets/images/sub-navigation.png)

then parallel routes are a cleaner, more powerful tool for structuring and scaling the app.

| Feature	| Normal Component	| Parallel Routes |
|- | -|- |
Rendering based on prop changes | 	✅	| ✅
Independent navigation |	❌ | 	✅
Layout preservation on route change | 	❌	| ✅
Native streaming support	| ❌	 | ✅
Code-splitting per UI section | 	🟡 Manual	| ✅ Auto
Ideal for modals, tabs, sidebars |	❌ Workaround | 	✅ Cleanly




## Doubts clarification

🧩 1. Rendering Independence vs. Navigation Independence
You're right:

✅ Normal components won’t re-render if props/state don’t change.

BUT:

❌ Normal components live in the same route, so any route change will re-trigger the layout and all child components will re-render (or reload data, if they use useEffect, useRouter, or fetch() in getServerSideProps).

✅ Parallel routes let you navigate just one slot (e.g., side panel or modal) without re-rendering or affecting the rest of the page.