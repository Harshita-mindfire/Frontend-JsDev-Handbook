---
id: 521tdzo7x0zx50aal6fmw1m
title: Frontend Web Performance Checklist
desc: ''
updated: 1692187714468
created: 1692176661003
---

## Resources

- [Frontend Web Performance Checklist](https://dev.to/jacobandrewsky/frontend-web-performance-checklist-2o9j)

## Checklist

1. **Eleminate render blocking non-critical scripts**: these resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles.
2. **Image handling**:
   - Serve images that are appropriately-sized to save cellular data and improve load time.
   - Give explicit height width to images to reduce Cumulative Layout Shift(CLS).
   - Use CSS sprites for small images/icons.
   - Minimize the use of external scripts and fonts.
3. **Minify/Remove unnecessary CSS and JS**: minify css/js and you can also use Code Splitting which will split code into bundles that can be loaded on demand.
4. **Test Cross-Browser Compatibility:**: Ensure your website performs well on various browsers and devices.
5. **Optimize Third-Party Scripts**: Evaluate the impact of third-party scripts and consider asynchronous loading.
6. **Prioritize Accessibility**: Ensure your website is accessible to all users, including those with disabilities.
7. **Ensure text remains visible during webfont load**: Fonts are often large files with slow load times. Some browsers hide text until the font loads, causing a flash of invisible text (FOIT).

   - to avoid showing invisible text while custom fonts load is to temporarily show a system font. add `font-display: swap`` in your @font-face style

   ```css
   @font-face {
     font-family: 'Pacifico';
     src: local('Pacifico Regular'), local('Pacifico-Regular'),
       url(https://fonts.gstatic.com/s/pacifico/v12/FwZY7-Qmy14u9lezJ-6H6MmBp0u-.woff2)
         format('woff2');
     font-display: swap;
   }
   ```

   - swap tells the browser that text using the font should be displayed immediately using a system font. Once the custom font is ready, it replaces the system font

8. **Preload key requests / Preconnect to required origins**: Declare preload links in your HTML to instruct the browser to download key resources as soon as possible

   ```html
   <head>
     <link rel="preload" href="critical.css" as="style" />
     <link rel="preload" href="critical.js" as="script" />
   </head>
   ```

9. **Serve images in next-gen formats**: WebP or Avif provide better compression.

