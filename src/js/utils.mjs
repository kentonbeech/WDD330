// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

/* Week 02 Group Activity 
We need to have some way of passing in the product that we want to show the details for. A common way to do this is through a URL parameter.

Create a new function in the utils.mjs file called getParams(param) that we can use to get a parameter from the URL when we need to. (Don't forget to return the parameter!)

Then import your new function into product.js.
*/

export function getParams(param) {
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get('product');
  return product;
}