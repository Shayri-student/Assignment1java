function OpenWooden(){
    window.location.href = "./Wooden.html";
}
function OpenAcrylic(){
    window.location.href = "./AcrylicBox.html";

}
function OpenPlastic(){
    window.location.href = "./plasticbox.html";
}
function OpenCard(){
    window.location.href = "./CardBox.html";
}

function toggleMenu() {
    var menuItems = document.getElementById("menu-items");
    if (window.innerWidth <= 600) {
      menuItems.classList.toggle("show");
    }
  }

  function toggleCartDropdown() {
    var cartDropdown = document.getElementById("cart-dropdown");
    if (cartDropdown.style.display === "block") {
      cartDropdown.style.display = "none";
    } else {
      cartDropdown.style.display = "block";
      // You can dynamically add product items with prices here
      // For simplicity, I'm adding a sample item
      var cartContent = "<a href='#'>Product 1 - $20</a>";
      cartDropdown.innerHTML = cartContent;
    }
  }

//   Add to Cart   
// Define an array to store selected products
var shoppingCart = [];

// Function to add a product to the shopping cart
function addToCart(productName, price, imageUrl) {
  // Add the product details to the shopping cart array
  shoppingCart.push({
    name: productName,
    price: price,
    image: imageUrl
  });

  // Update the cart dropdown with the added product
  updateCartDropdown();
}

// Function to remove a product from the shopping cart
function removeFromCart(index) {
  // Remove the selected product from the shopping cart array
  shoppingCart.splice(index, 1);

  // Update the cart dropdown after removal
  updateCartDropdown();
}

// Function to update the cart dropdown
function updateCartDropdown() {
  var cartDropdown = document.getElementById("cart-dropdown");

  // Clear existing content
  cartDropdown.innerHTML = "";

  // Iterate through the products in the shopping cart and display them
  shoppingCart.forEach(function (product, index) {
    var productElement = document.createElement("div");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <span>${product.name} - ${product.price}Rs</span>
      <span class="remove-item" onclick="removeFromCart(${index})"><i class="fas fa-times"></i> Remove</span>
    `;
    cartDropdown.appendChild(productElement);
  });

  // Calculate and display the total amount
  var totalAmount = shoppingCart.reduce(function (total, product) {
    return total + parseFloat(product.price);
  }, 0);

  var totalElement = document.createElement("strong");
  totalElement.innerHTML = `Total: ${totalAmount}Rs`;
  cartDropdown.appendChild(totalElement);

  // Display the checkout button
  var checkoutButton = document.createElement("a");
  checkoutButton.href = "#"; // Replace with the actual checkout page URL
  checkoutButton.className = "btn btn-primary";
  checkoutButton.textContent = "Checkout";
  cartDropdown.appendChild(checkoutButton);

  // Show the cart dropdown
  cartDropdown.style.display = "block";
}