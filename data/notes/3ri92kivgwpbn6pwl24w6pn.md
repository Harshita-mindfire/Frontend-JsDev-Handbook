## Ques:

- Create a vanilla js application that consumes the https://fakestoreapi.com/products?sort=asc API 
and displays a list of products in ascending order based on id. 
The application should also include a dropdown to allow the user to change the sorting of the products between ascending and descending. 
When the user changes the sorting order, the application should update the query parameter value and fetch the products with the new sorting order.

## Ans

- HTML 
```html
 <select>
      <option value="asc">Asc</option>
      <option value="desc">Desc</option>
    </select>
```
- JS
```js
 const getProducts = async (sortOrder="asc") => {
   const response = await fetch(`https://fakestoreapi.com/products?sort=${sortOrder}`);
   const productList = await response.json();
   const body = document.querySelector("body");
   const test = document.querySelector(".container")
   if(test) {
     body.removeChild(test)
   }
   const container = document.createElement("container");
   container.classList.add("container")
   productList.map(({id, title, image} ) => {
     const parent = document.createElement("div");
     parent.classList.add("parent")
     const card = document.createElement("div");
     const imageCard = document.createElement("img");
     imageCard.setAttribute("src", image);
     imageCard.style.width = "50px";
     imageCard.style.height = "60px";
     card.appendChild(imageCard)
     const titleSpan = document.createElement("div");
     titleSpan.innerHTML = title;
     parent.appendChild(card);
     parent.appendChild(titleSpan);
     container.appendChild(parent)
   })
   body.appendChild(container)

 }
 getProducts()


   const select = document.querySelector("select");
  select.addEventListener("change", (e) => {
    getProducts(e.target.value)
  })
```

- CSS 
```css
.container {
  display: flex;
  flex-wrap: wrap;
}

.parent {
  width: 10rem;
}
```
