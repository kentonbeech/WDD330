import { setLocalStorage } from "./utils.mjs";

function productDetailsTemplate(product) {
  return `<section class="product-detail">
    <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Image}"
      alt="${product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
      ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div>
  </section>`;
}

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    // Retrieve product details using the data source
    this.product = await this.dataSource.findProductById(this.productId);

    // Render product details on the page
    this.renderProductDetails("main");

    // Add event listener to "Add to Cart" button
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }

  addToCart() {
    // Retrieve the current cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem("so-cart")) || [];

    // Add the current product to the cart
    cart.push(this.product);

    // Update the cart in localStorage
    setLocalStorage("so-cart", JSON.stringify(cart));

    // Notify the user
    alert("Product added to cart!");
  }

  renderProductDetails(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.innerHTML = productDetailsTemplate(this.product);
    } else {
      console.error(`Selector "${selector}" not found in the DOM.`);
    }
  }
}
