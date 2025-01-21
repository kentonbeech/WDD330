// The purpose of this script will be to generate a list of product cards in HTML from an array.

export default class ProductListing {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    // Use the dataSource to get the list of products to work with. We could do that in the constructor or in an init() method. One advantage of the init method is that it will allow us to use async/await when calling the promise in getData().
    async init() {
        const dataList = await this.dataSource.getData();
        // here we will have syntax for rendering the list
    }
}