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
const theProduct = new ProductDetails(productId, dataSource);
theProduct.init();


async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  product.addProductToCart(product);
}

// Add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
