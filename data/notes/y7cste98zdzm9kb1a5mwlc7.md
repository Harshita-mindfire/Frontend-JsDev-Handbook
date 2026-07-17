The HTML `<canvas>` element is used to draw graphics, on the fly, via JavaScript.
The `<canvas>` element is only a container for graphics. You must use JavaScript to actually draw the graphics.

```html
<canvas id="myCanvas" width="300" height="150"></canvas>
```
- The `getContext()` method returns an object with tools (methods) for drawing.
```js
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
```
<canvas id="myCanvas" width="300" height="150"></canvas>

## Draw

### Fill Style
The fillStyle property can be a CSS color, a gradient, or a pattern. The default fillStyle is black.
The fillRect(x,y,width,height) method draws a rectangle, filled with the fill style, on the canvas:
```js
ctx.fillStyle = "#FF0000";
``` 
- Drwaing a rectangle

The syntax is context.rect(x, y, width, height)
```js
ctx.fillRect(10,10,300,150)
```
- Drawing a line
```js
// Define a start Point
  ctx.moveTo(0, 0);
  // Define an end Point
  ctx.lineTo(300, 150);
  // Stroke it (Do the Drawing)
  ctx.stroke();
```
- Drawing a circle

arc(x,y,r,start,end)
```js
 // circle
      ctx.beginPath();
      ctx.arc(150, 75, 40, 0, 2 * Math.PI);
      ctx.stroke();
```

## Gradient

There are two different types of gradients:

- createLinearGradient(x,y,x1,y1) - creates a linear gradient
- createRadialGradient(x,y,r,x1,y1,r1) - creates a radial/circular gradient
- The addColorStop() method specifies the color stops, and its position along the gradient. Gradient positions can be anywhere between 0 to 1.

- To use the gradient, set the fillStyle or strokeStyle property to the gradient, then draw the shape (rectangle, text, or a line).

```js
// Create gradient
const grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"white");
grd.addColorStop(01,"blue");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
```

## Text
methods:

- font - defines the font properties for the text
- fillText(text,x,y) - draws "filled" text on the canvas
- strokeText(text,x,y) - draws text on the canvas (no fill)

```js 
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
```

to align center
```js
ctx.font = "30px Arial";
ctx.textAlign = "center";
ctx.fillText("Hello World",canvas.width/2, canvas.height/2);
```