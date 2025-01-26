import {
  getLocalStorage,
  setLocalStorage,
  LoadHeaderFooter,
} from "./utils.mjs";
LoadHeaderFooter();

function renderCartContents() {
  let cartItems = getLocalStorage("so-cart") || [];
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${item.Image}"
        alt="${item.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <div>
    <p class="cart-card__price">$${item.FinalPrice}</p>
    <button class="closer" value="${item.Id}">&times;</button>
    </div>
  </li>`;

  return newItem;
}

renderCartContents();

const closers = document.querySelectorAll(".closer");

closers.forEach((element) => {
  element.addEventListener("click", () => {
    let theList = JSON.parse(localStorage.getItem("so-cart")) || [];
    let theItem = theList.findIndex((item) => item.Id == element.value);
    theList.splice(theItem, 1);
    setLocalStorage("so-cart", theList);
    window.location.reload();
  });
});

let total = document.querySelector("#Total");
let Clear = document.querySelector("#Clear");

function findTotal() {
  let number = 0;
  let theList = JSON.parse(localStorage.getItem("so-cart")) || [];
  theList.forEach((element) => {
    number += element.FinalPrice;
  });
  return number;
}
total.textContent = `Total Cost: $${findTotal()}`;

Clear.addEventListener("click", () => {
  setLocalStorage("so-cart", []);
  window.location.reload();
});
