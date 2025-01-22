import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

const dataSource = new ProductData();
const productListing = new ProductListing(dataSource);
