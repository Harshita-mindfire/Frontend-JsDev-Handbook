---
id: 5shqmwqiva0r06oasv480n8
title: CSS
desc: ''
updated: 1659518243040
created: 1659518243040
---

## Resources:
- [Basic Css](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/)
- [Transform-Transition](https://thoughtbot.com/blog/transitions-and-transforms)

## Transform and Transition
- https://thoughtbot.com/blog/transitions-and-transforms
- **transforms** move or change the appearance of an element, while **transitions** make the element smoothly and gradually change.
- Without a transition, an element being transformed would change abruptly from one state to another.

```css
div {
  transition: [property] [duration] [timing-function] [delay];
  /**
  *  transition: all 3s; 
  *  all: transition-property (required)
  *  3s : transition-duration (required) rest are optional
   **/
}
```
- **Transition-property**(required): CSS property where the transition will be applied. You may apply a transition to an individual property (e.g., background-color or tranform) or to all properties in the rule-set (i.e., all).

```css
div {
  transition-property: all;
  transition-property: transform;
}
```
- **Transition-duration**(required): specifies the time span of the transition

```css
  div {
    transition-duration: 3s;
  }
  /** shorthand **/
  div {
  transition: all 3s;
}
```

- **Transition timing function** (optional): 
 options are => linear, ease, ease-in, ease-out, and ease-in-out
```css
 div {
  transition-timing-function: ease-in-out;
}

/** shorthand **/
div {
 transition: all 3s ease-in;
}
```

- **Transition delay** (optional): 
The transition-delay property allows you to specify when the transform will start. By default, the transition starts as soon as it is triggered (e.g., on mouse hover). However, if you want to transition to start after it is triggered you can use the transition delay property.

```css
/** shorthand **/
div {
 transition: all 3s ease-in 0.5s;
}

```

## Transform

- make an element change from one state to another
- you can rotate, move, skew, and scale elements. 
-  triggered when an element changes states, such as on mouse-hover or mouse-click.

### scale
- increase or decrease the size of an element.
- scale(2): makes the size twice, scale(0.5) makes the size half

_NOTE: Don’t forget to add a transition! Without applying transition, the element would abruptly change sizes. Add the transition to the parent selector (not the hover selector). To make the transition smooth on both hover-over/hover-off._
```css
div {
  transition: transform 1s;
}

div:hover {
  transform: scale(2);
}
```
### rotate

- rotate(90deg): clockwise 90
- rotate(-90deg): anticlockwise 90
- You can rotate more than a full rotation with numbers over than 360, such as 1080deg, for three full rotations.

```css
div {
  transition: transform 1s;
}

div:hover {
  transform: rotate(1080deg);
}
```

### translate
- moves an element left/right and up/down.
- +x: right, -x: left
- +y: down, -y: up

```css
div {
  transition: transform 1s;
}

div:hover {
  transform: translate(20px, 20px);
}
```

### skew
- the element skews (or tilts) one direction or the other.
- +x: left, -x: right (oposite of translate)
- +y: down, -y: up

```css
div {
  transition: transform 1s;
}

div:hover {
  transform: skewX(-20px);
}
```