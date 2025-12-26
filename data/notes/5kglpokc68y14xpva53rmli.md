Templates are similar to layouts in that they are also UI shared between multiple pages in you app.

**key difference** is whenever user switches between routes sharing a template, you get a complete fresh start.
- new template instance is mounted
- state is cleared
- DOM elements are recreated.
- effects are resyncronized.

Created via: 
- naming template.tsx
- recieves children props.


![](/assets/images/templates.png)