---
id: wiaz546utk39nbfg4cfpg6v
title: Grid
desc: ''
updated: 1692002341551
created: 1692002341551
---

# Cheatsheet
- [Cheatsheet](https://grid.malven.co/)

## Grid

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


- **grid-column**
```css
.green {
    /* span the column across 2 grids for ele with class green */
    grid-column: span 2
}
```



