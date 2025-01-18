/** Week 02 Group Activity

3. It will be nice for our product to keep track of important information about itself. With that information the product will know which id it has, it will have a source to get the information it needs when the time comes, and will have a place to store the details we need to show once we retrieve them.

4. To use this class, pull everything from the last few steps together in the product.js file.

5. Notice we import in the code we need from our modules. Then we get the id of our product using our helper function getParams. We create an instance of our ProductData data class with the URL it should use to look for products. Then we use both of those to create an instance of our ProductDetails class so that it has everything it needs to work. Finally we call our init() method using our class instance to finish setting everything up.

*/


// Model the ProductDetails.mjs file similarly to the ProductData.mjs file by placing the public methods in a class.
export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        // A place to store the details we need to show once we retrieve them
        this.product = {};
        this.dataSource = dataSource;
        // add this.path = ``;
    };
    // There are a few things that need to happen before our class can be used. Some will happen in the constructor and will happen automatically. Others it is nice to have more control over and so we will place them into an init method:
    init() {
        // syntax
    };
    // Method to add product to cart.
    addProductToCart(product) {
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
    };
    // This method generates the HTML to display our product.
    renderProductDetails() {
        // container for product card
        let productCard = document.createElement("section");
        // add class to section container
        productCard.classList.add(".product-detail");
        
        // h3 to hold product brand
        let productBrand = document.createElement("h3");
        // add value to h3
        productBrand.textContent = "";

        // h2 to hold the name of the product
        let productName = document.createElement('h2');
        // add class to h2
        productName.classList.add("divider");
        // add value to h2
        productName.textContent = "";

        // img element
        let productImg = document.createElement("img");
        productImg.classList.add("divider");
        // set attributes for img element
        productImg.setAttribute("src", "");
        productImg.setAttribute("alt", "");
        
        // p element for price
        let productPrice = document.createElement("p");
        productPrice.classList.add("product-card__price");
        // set value for productPrice
        productPrice.textContent = "";

        // p element for product colour
        let productColour = document.createElement("p");
        productColour.classList.add("product__color");
        // set value for productColour
        productColour.textContent = "";

        // p element for product description
        let productDescription = document.createElement("p");
        productDescription.classList.add("product__description");
        // Add value to productDescription
        productDescription.textContent = "";

        // append new elements to container (productCard)
        productCard.append(brandName);
        productCard.append(productName);
        productCard.append(productImg);
        productCard.append(productPrice);
        productCard.append(productColour);
        productCard.append(productDescription);
    }
      
}