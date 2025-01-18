function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

/*
In order to make our module portable and easy to use, this .mjs uses a class to expose all the public facing code from our module. It is called ProductData, and it is the default export.
*/
export default class ProductData {
  /*
  We will eventually want to use this class for more than just tents. We can do that by using the constructor to the class. If we pass in a category name, e.g., 'tents', the class will store it and also use it to build a path to the correct file */
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data); // Could be written like this as well: function(data) { return data; }
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id); // Could also be written like this: function(item) { return item.Id === id; }
  }
}
