---
id: 25h1bmykwh9gyeo80n75gky
title: accessibility
desc: ''
updated: 1707729120404
created: 1707729120404
---
## Top picks

1. use semantic HTML. It has a lot built in capabilities like responding to focus, tab and enter.
2. Correct heading order, h1 first then h2 etc. Don't use headings for styling purpose(use `<strong>`, css or other approaches)
3. don't use anchor tags for buttons(like in hamburger menus). a tags without href is almost next to nothing. screen reader will read it as a normal text. If absolutely necessary, use `role` and make tab-index=0 so that this elements gets added to the tab-tree and is accessible with tab. note that tabindex=0 does not make it the first element to be accessed by tab.


### aria
- aria-label: used if we have an image inside hyperlink and no text.
- aria-expanded: for menus.
- aria-labelledby: for images with captions. DRY with writing alt and caption. Add aria-labelledby="id-of-element-where-caption-is-wriiten"
- use roles for elements that are not being used as there usual self.

### images
- use alt="" for background images.
- always add alt tag for images added with `<img>` tag. Skipping it would result in screen reader to announce the file name. Yikes!



## Screen readers

- If you're on a Windows machine and would like to get started with screen readers, NVDA is a great option.
- NVDA official site: nvaccess.org
>NVDA stands for Non visual desktop access
- https://webaim.org/articles/nvda/