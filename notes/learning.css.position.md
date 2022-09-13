---
id: 9hwfp65pm5gvegngk1hf68w
title: Position
desc: ''
updated: 1659516951301
created: 1659516742992
---

- static: (default) not positioned in any special way; it is always positioned according to the normal flow of the page.
- relative: positioned relative to its normal position. Other content will not be adjusted to fit into any gap left by the element.
- fixed: An element with `position: fixed;` is positioned relative to the viewport,
- absolute: An element with `position: absolute` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
- sticky: An element with `position: sticky;` is positioned based on the user's scroll position.