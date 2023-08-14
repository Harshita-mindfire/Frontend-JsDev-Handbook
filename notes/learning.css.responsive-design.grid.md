---
id: wiaz546utk39nbfg4cfpg6v
title: Grid
desc: ''
updated: 1692002341551
created: 1692002341551
---

# Cheatsheet
- [Cheatsheet](https://grid.malven.co/)
- [Grid Garden game](https://cssgridgarden.com/)

## Grid

Grid also introduces a new unit, the fractional fr. Each fr unit allocates one share of the available space. For example, if two elements are set to 1fr and 3fr respectively, the space is divided into 4 equal shares; the first element occupies 1/4 and the second element 3/4 of any leftover space.

```css
.container {
    display: grid; 
    /* 1fr stands for 1 fraction. In the below css, column 3 is twice as column 1 & 2. */
    grid-template-columns: 1fr 1fr 2fr;
    gap: 2rem;
}
```

- can also use **repeat** for values
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr; 
  gap: 20px;
}
```

- use **auto** when fraction needs to be adjusted automatically
```css
.container {
  display: grid;
  /* will automatically adjust the 1st column based on content */
  grid-template-columns: auto 1fr 1fr;
  grid-template-rows: 1fr 1fr; 
  gap: 20px;
}
```

**Most common pattern**
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```
Let's break down the value:

- **repeat(auto-fill, ...)**: This part indicates that you want to repeat the following column definition as many times as possible within the available space. The auto-fill keyword means that the grid will automatically create as many columns as it can fit within the container.
- **minmax(200px, 1fr)**: This part sets the sizing for each column. It defines a range between a minimum and maximum size for the columns.
200px is the minimum width that each column should have. Columns will not become narrower than this value.
1fr represents the flexible part of the column sizing. It tells the grid to distribute any available space evenly among the columns. So, if there's extra space beyond the minimum requirement, it will be distributed equally among the columns.


The combination of auto-fill and minmax(200px, 1fr) allows the grid to automatically adjust the number of columns based on the available space while ensuring that each column is at least 200px wide. If there's additional space available, the columns will expand equally to fill the remaining space.

__NOTE__: **grid-template** is a shorthand property that combines grid-template-rows and grid-template-columns.

below eg. will create a grid with two rows that are 50% each, and one column that is 200 pixels wide.

```css
#garden {
    grid-template: 50% 50% / 200px;
 } 
```

## Grid Column Properties

- **grid-column-start**
```css
.green {
    /* start the green class item from grid 2 */
    grid-column-start: 2
}
```

- When **grid-column-start** is used alone, the grid item by default will span exactly one column. However, you can extend the item across multiple columns by adding the **grid-column-end** property.

- **grid-column**: 
grid-column is a shorthand property that can accept both values at once, separated by a slash.

For example, 
```css
grid-column: 2 / 4;
```
 will set the grid item to start on the 2nd vertical grid line and end on the 4th grid line.


```css
.green {
    /* span the column across 2 grids for ele with class green */
    grid-column: span 2
}
```


- **grid-area**

there's yet another shorthand for that. grid-area accepts four values separated by slashes: grid-row-start, grid-column-start, grid-row-end, followed by grid-column-end.

One example of this would be 
```css
.green {
    grid-area: 1 / 1 / 3 / 6;
}
```

