let products = JSON.parse(localStorage.getItem("products")) || [];
  let editIndex = -1;

  function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach((product, index) => {
      productList.innerHTML += `
        <div class="product-card">
          <h3>${product.name}</h3>
          <p>Price: ₹${product.price}</p>

          <div class="actions">
            <button class="edit-btn" onclick="editProduct(${index})">
              Edit
            </button>

            <button class="delete-btn btn-btn-outline" onclick="deleteProduct(${index})">
              Delete
            </button>
          </div>
        </div>
      `;
    });

    localStorage.setItem("products", JSON.stringify(products));
  }
 function addOrUpdateProduct() {
    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;

    if (name === "" || price === "") {
      alert("Please fill all fields");
      return;
    }

    const product = {
      name,
      price
    };

    if (editIndex === -1) {
      products.push(product);
    } else {
      products[editIndex] = product;
      editIndex = -1;
    }

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";

    displayProducts();
  }

  function editProduct(index) {
    document.getElementById("productName").value =
      products[index].name;

    document.getElementById("productPrice").value =
      products[index].price;

    editIndex = index;
  }

  function deleteProduct(index) {
    if (confirm("Are you sure you want to delete?")) {
      products.splice(index, 1);
      displayProducts();
    }
  }

   displayProducts();