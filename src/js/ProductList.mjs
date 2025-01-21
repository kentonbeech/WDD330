// The purpose of this script will be to generate a list of product cards in HTML from an array.

// Template for html using template literal strings
export function productCardTemplate(product) {
    return `<li class="product-card">
        <a href="product_pages/index.html?product=">
        <img src="" alt="Image of ">
        <h3 class="card__brand"></h3>
        <h2 class="card__name"></h2>
        <p class="product-card__price">$</p>
        </a>
    </li>`
};

export default class ProductListing {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    // Use the dataSource to get the list of products to work with. We could do that in the constructor or in an init() method. One advantage of the init method is that it will allow us to use async/await when calling the promise in getData().
    async init() {
        const list = await this.dataSource.getData();
        // here we will have syntax for rendering the list
        console.log(list); // Debugging
    
        let dataList = [];
        this.dataSource.foreach(product => {
            dataList.push(product.id);
        });
        
        return dataList;
    };
    // This method will use the template to be called for each product in the list, and then eventually inserted into the DOM
    renderList(dataList) {
        // Clear any existing HTML to start with a "blank canvas"
        this.listElement.innerHTML = "";

        dataList.forEach(product => {
            const productCard = this.productCardTemplate(product);
            // insert into the DOM by appending it to the this.listElement
            this.listElement.appendChild(productCard);
        })
        
    }
}