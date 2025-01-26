function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;

  }
  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }
  async findProductById(id) {
    const products = await this.getData();
    let result = products.find((item) => item.Id == id);
    return result;
  }
  async findProductByName(name) {
    const products = await this.getData();
    let theName = await name;
    let result = await products.find((item) => item.Name == theName);
    return result;
  }
}
