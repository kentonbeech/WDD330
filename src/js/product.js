import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { setLocalStorage } from "./utils.mjs";

import { getParams } from "./utils.mjs";

/**
 * Week 02 Group Activity:
 * Test your getParams function in product.js to see if you can get the product id successfully when someone navigates to the product-details page.
 */

const productId = getParams("product");
// console.log(productId);
// This would be a good time to test our findProductById method as well (see console.log statement below)
// console.log(dataSource.findProductById(productId));
// Create an instance of the ProductData class.
const dataSource = new ProductData("tents");
const product = new ProductDetails(productId, dataSource);
product.init();
addProductToCart(product) {
  // Store the product the user has selected for purchase, to Local Storage. This saves it at the origin of the site's local storage.

  // Get the current cart from local storage or (||) initialize an empty array
  const cartString = localStorage.getItem("so-cart") || [];
  //console.log("items in cart", cart) // debugging
  // Turn cartString into an array
  // const cart = JSON.parse(cartString || "[]");
  // Make sure the data actually exists and is not null!
  if (cartString != null && cartItems != undefined) {
    // If it's not null or undefined, parse the product(s) saved there
    cart = JSON.parse(cartItems);
    // Add the new product to the cart.
    cart.push(product);
  } else {
    console.log("Failed to load cart: so-cart is empty or doesn't exist.");
  }

  // Update localStorage with the new product added to cart.
  setLocalStorage("so-cart", JSON.stringify(cart));
  alert("Product added to cart!");
};


// Get the current cart from local storage or initialize an empty array
const cartString = localStorage.getItem("so-cart") || [];
// Turn cartString into an array
const cart = JSON.parse(cartString || "[]");
console.log(cart);
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

async function addToCartHandler(e) {
  const theProduct = await dataSource.findProductById(e.target.dataset.id);
  theProduct.addProductToCart(product);
}

// Add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
