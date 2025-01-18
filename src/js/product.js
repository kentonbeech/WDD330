import ProductData from "./ProductData.mjs";
import { setLocalStorage } from "./utils.mjs";

import { getParams } from "./utils.mjs";

// Create an instance of the ProductData class.
const dataSource = new ProductData("tents");

function addProductToCart(product) {
  // Store the product the user has selected for purchase, to Local Storage. This saves it at the origin of the site's local storage.

  // Create an empty array
  let cart = [];

  // Use JSON.stringify to properly stringify the product(s)
  // setLocalStorage("so-cart", JSON.stringify(product));
  // Retrieve the current cart from localStorage.
  let cartItems = localStorage.getItem("so-cart");
  //console.log("items in cart", cartItems)

  // Make sure the data actually exists and is not null!
  if (cartItems != null && cartItems != undefined) {
    // If it's not null or undefined, parse the product(s) saved there
    cart = JSON.parse(cartItems);
  } else {
    //console.log("Failed to load cart: so-cart is empty or doesn't exist.");
  }

  // Add the new product to the cart.
  cart.push(product);
  //console.log("Updated cart: ", cart);

  // Update localStorage with the new product added to cart.
  // now update localStorage with the new array (most recent product added)
  setLocalStorage("so-cart", JSON.stringify(cart));
}

/**
 * Week 02 Group Activity:
 * Test your getParams function in product.js to see if you can get the product id successfully when someone navigates to the product-details page.  
 */

const productId = getParams('product');
console.log(productId);
// This would be a good time to test our findProductById method as well
console.log(dataSource.findProductById(productId));

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
