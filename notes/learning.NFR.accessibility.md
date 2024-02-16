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
- **aria-label**: used if we have an image inside hyperlink and no text. It gives elements a programmatic accessible name so that screen readers can let the user know what the element will do once interacted with.
- **aria-expanded**: When a screen reader lands on an element with the attribute "aria-expanded", it announced the status as either "expanded" or "collapsed". eg: for menus.
- **aria-labelledby**: for images with captions. DRY with writing alt and caption. Add aria-labelledby="id-of-element-where-caption-is-wriiten"
- **aria-hidden**: aria-hidden="true" hides the element from assistive technologies.
- **aria-required**: used in input field. In HTML5 this can be skipped and `required` is used.
- **role**: use roles for elements that are not being used as there usual self.

```html
Q: What would screen readers announce when they encounter this button:
<button aria-label="Shop now">Shop</button>

A: only aria-label: Shop now
```

### images
- use alt="" for background images.
- always add alt tag for images added with `<img>` tag. Skipping it would result in screen reader to announce the file name. Yikes!

### bypass blocks
adding bypass blocks allows us to skip blocks while navigating site through tab.

## navigation
- use correct semantics: `<nav>`
- use ol, li and links instead of divs or aria attributes like role etc.

### google maps/iframes
- whenever you have any iframe always add the title attribute.
- when using maps, also add the address in textual format for screen readers. 
- some sites also provide driving directions in separate link that allows screen readers to get index of location.

### contact forms
- have associated labels for inputs. Don't use placeholder text only for labels. good idea is to skip them completely. 
- keep a heading above a form. Some users navigate site with headings(keyboard first, screenreaders), if the form has no heading associated with it, it might get unnoticed.

```html
<h3> Sign in Form</h3>
<form> ... </form>
```
### icons
- hide decorative icons for assistive technology by adding aria-hidden="true".
- for icons that have links(instagram icon), the svg is wrapped inside the anchor tag. For such cases: hide svg with aria-hidden and add meaningful aria-label to anchor tag.

## Checklist
After developing an accessible website:
1. Run lighthouse report in Chrome to get status.
2. Make sure every clickable is accessible through keyboard.
3. Run through the site using screen readers.


## Screen readers

- If you're on a Windows machine and would like to get started with screen readers, NVDA is a great option.
- NVDA official site: nvaccess.org
>NVDA stands for Non visual desktop access
- https://webaim.org/articles/nvda/