
Portals enable you to render a child component into a DOM node that exists outside the parent component's DOM hierarchy. 
### Use Cases:
They are particularly helpful for UI elements that require a higher z-index or need to be visually detached from their parent, such as modals, tooltips, or popups. 
### How they Work:
React uses the ReactDOM.createPortal() method to render a component into a specific DOM node. 

```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';

    const Modal = ({ children }) => {
      return ReactDOM.createPortal(
        <div className="modal">
          {children}
        </div>,
        document.getElementById('modal-root') // Or any other DOM node
      );
    };
```