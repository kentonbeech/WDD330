import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  // Get the current cart from local storage or initialize an empty array
  const cart = getLocalStorage("so-cart") || [];

  // Check if the product is already in the cart
  const existingProduct = cart.find((item) => item.Id === product.Id);

  if (!existingProduct) {
    // Add the new product to the cart
    cart.push(product);

    // Save the updated cart to local storage
    setLocalStorage("so-cart", cart);

    alert("Product added to cart!");
  } else {
    alert("This product is already in your cart.");
  }
}

// Add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// Add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
