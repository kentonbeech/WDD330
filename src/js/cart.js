import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  // Get the cart items from local storage or default to an empty array
  const cartItems = getLocalStorage("so-cart") || [];

  // If the cart is empty, display a message
  if (cartItems.length === 0) {
    document.querySelector(".product-list").innerHTML =
      "<p>Your cart is empty.</p>";
    return;
  }

  // Generate HTML for each cart item and render them
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  return `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${item.Image}" alt="${item.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;
}

// Render the cart contents on page load
renderCartContents();
