import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { setLocalStorage, getLocalStorage, getParam } from "./utils.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();

// Function to add a product to the cart
function addProductToCart(_product) {
  // Retrieve the existing cart from local storage or initialize an empty array
  let currentCart = getLocalStorage("so-cart") || [];

  // Check if the product is already in the cart
  const existingProduct = currentCart.find((item) => item.Id === _product.Id);

  if (!existingProduct) {
    // Add the new product to the cart
    currentCart.push(_product);

    // Save the updated cart to local storage
    setLocalStorage("so-cart", currentCart);

    alert("Product added to cart!");
  } else {
    alert("This product is already in your cart.");
  }
}

// Add to cart button event handler
async function addToCartHandler(e) {
  const productId = e.target.dataset.id;
  const theProduct = await dataSource.findProductById(productId);
  addProductToCart(theProduct);
}

// Add event listener to the Add to Cart button
try {
  const cartButton = document.getElementById("addToCart");
  if (cartButton) {
    cartButton.addEventListener("click", addToCartHandler);
  }
} catch (error) {
  console.log("You are on the main page or Add to Cart button is not present.");
}
