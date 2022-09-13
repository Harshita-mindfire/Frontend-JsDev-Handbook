---
id: 5shqmwqivatr06oasv480ni
title: Flex Box
desc: ''
updated: 1659518243040
created: 1648902134597
---

# Flexbox

```css
  display: flex;
```
## Properties

### justify-content
aligns items horizontally.

Accepted values: 
* flex-start: Items align to the left side of the container.
* flex-end: Items align to the right side of the container.
* center: Items align at the center of the container.
* space-between: Items display with equal spacing between them.
* space-around: Items display with equal spacing around them.

### align-items
aligns items vertically.

Accepted values: 
* flex-start: Items align to the top of the container.
* flex-end: Items align to the bottom of the container.
* center: Items align at the vertical center of the container.
* baseline: Items display at the baseline of the container.
* stretch: Items are stretched to fit the container.

### align-content
 set how multiple lines are spaced apart from each other.
 * flex-start: Lines are packed at the top of the container.
* flex-end: Lines are packed at the bottom of the container.
* center: Lines are packed at the vertical center of the container.
* space-between: Lines display with equal spacing between them.
* space-around: Lines display with equal spacing around them.
* stretch: Lines are stretched to fit the container.

__This can be confusing, but align-content determines the spacing between lines, while align-items determines how the items as a whole are aligned within the container. When there is only one line, align-content has no effect.__

### flex-direction
property defines the direction items are placed in the container.

Accepted values:
* row: Items are placed the same as the text direction.
* row-reverse: Items are placed opposite to the text direction.
* column: Items are placed top to bottom.
* column-reverse: Items are placed bottom to top.

- __Notice that when you set the flex-direction to a reversed row or column, start and end are also reversed.__

![](/assets/images/2022-04-04-17-37-37.png)

- __Notice that when the flex direction is a column, justify-content changes to the vertical and align-items to the horizontal.__

![](/assets/images/2022-04-04-19-26-13.png)

### flex-wrap
wraps the items of flexbox

Accepts the following values:

* nowrap: Every item is fit to a single line.
* wrap: Items wrap around to additional lines.
* wrap-reverse: Items wrap around to additional lines in reverse.

### flex-flow
The two properties _flex-direction_ and _flex-wrap_ are used so often together that the shorthand property __flex-flow__ was created to combine them. This shorthand property accepts the value of the two properties separated by a space.

For example, you can use flex-flow: row wrap to set rows and wrap them.

### align-self
Another property you can apply to individual items is align-self. This property accepts the same values as align-items and its value for the specific item.

### order
Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the order property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).




## TODO
Animation CSS #learn
```css
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```
