// fetch("https://dummyjson.com/products").then((res)=>res.json()).then((data)=>{
//     console.log(data);
// })

const productsDivision = document.getElementById("products-div")
let allProducts = [];

async function addToCart(i) {
  // const res = await fetch("https://dummyjson.com/products")
  // const data = await res.json();
  const arr = JSON.parse(localStorage.getItem("carts")) || [];
  allProducts[i].qty = 1;
  arr.push(allProducts[i]);
  localStorage.setItem("carts", JSON.stringify(arr));
}

function displayProducts(products) {
  products.map((products, i) => {
    const div = document.createElement("div");
    div.className = "card p-0";
    div.style.width = "18rem";
    div.innerHTML = ` 
          <img src=${products.images[0]}
            class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${products.title}</h5>
            <p class="card-text">${products.category}</p>
            <p class="card-text fs-5">Price ₹${(products.price * 93).toFixed(2)}/-</p>
            <button onclick="addToCart(${i})"class="btn btn-primary">Add to cart</button>
          </div>`;
    productsDivision.appendChild(div);
  })
}


//async function
async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  allProducts = data.products;
  displayProducts(data.products)
}

fetchProducts();