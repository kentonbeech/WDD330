export default class ProductListing {
  constructor(category, dataSource, listElement) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible.
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    // Retrieve data from the dataSource (returns a Promise, so we use await).
    const list = await this.dataSource.getData();

    // Render the list of products.
    this.renderList(list);
  }

  renderList(dataList) {
    // Clear any existing HTML to start with a "blank canvas".
    this.listElement.innerHTML = "";

    // Loop through the list of products and render each one.
    dataList.forEach((product) => {
      const productCard = this.productCardTemplate(product);
      // Append the rendered product card to the listElement in the DOM.
      this.listElement.insertAdjacentHTML("beforeend", productCard);
    });
  }

  productCardTemplate(product) {
    // Template for rendering individual product cards.
    return `<div class="product-card">
      <h3>${product.Brand.Name}</h3>
      <h2>${product.NameWithoutBrand}</h2>
      <img src="${product.Image}" alt="${product.NameWithoutBrand}" />
      <p class="product-card__price">$${product.FinalPrice}</p>
      <button data-id="${product.Id}" class="add-to-cart">Add to Cart</button>
    </div>`;
  }
}
