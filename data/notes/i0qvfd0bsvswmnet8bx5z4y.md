
## Simple selectors

- **.class**: class selector
- **div.class**: The class selector only for specific element(div)
- **#id** : id selector
- **h1**: group selector
- **h1, p**: to group selectors, separate each selector with a comma.

## CSS Combinators
- descendant selector (space)
- child selector (>)
- adjacent sibling selector (+)
- general sibling selector (~)
### examples

- **div p**: all elements that are descendants of a specified element.
- **div > p**: all elements that are the **direct** children of a specified element.
- **div + p**:  element that is directly after another specific element. Sibling elements must have the same parent element, and "adjacent" means "immediately following".
- **div~p**: The general sibling selector selects all elements that are next siblings of a specified element.

## Psuedo class selectors

- **p:first-child**:  selects all first child p elements.
- 
