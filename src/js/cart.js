import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function renderCartContents() {
  let cartItems = getLocalStorage("so-cart") || [];
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  let DisplayList = document.querySelector(".product-list")
  DisplayList.innerHTML = htmlItems.join("");

  if (JSON.parse(localStorage.getItem("so-cart")).length == 0) {
    DisplayList.innerHTML = `<li class="cart-card divider" ><h3>Looks like you have no items in your cart.</h3></li>`
  }

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
    <div><p class="cart-card__price">$${item.FinalPrice}</p>
    <button class="close" value="${item}">&times;</button></div>
  </li>`;

  return newItem;
}

renderCartContents();
// total cost logic
let totalDislpay = document.getElementById("Total");
let itemsList = JSON.parse(localStorage.getItem("so-cart")) || [];
let total = 0

itemsList.forEach(element => {
  total += element.FinalPrice;
});

totalDislpay.textContent = `Total Cost: $${total}`

// make the buttons close the corresponding item, but it can only remove the first instanc eof that item.
let closers = document.querySelectorAll(".close")

closers.forEach(element => element.addEventListener("click", () => {
  let acting_list = JSON.parse(localStorage.getItem("so-cart"));
  let index = acting_list.findIndex((item) => item.Id == element.value)
  acting_list.splice(index, 1)
  setLocalStorage("so-cart", acting_list)
  location.reload();
}))