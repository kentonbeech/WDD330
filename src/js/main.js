import ProductData from "./ProductData.mjs";
import { LoadHeaderFooter } from "./utils.mjs";
import ProductListing from "./ProductList.mjs";

let targetList = document.querySelector(".product-list");
let Info = new ProductData("tents");
let List = new ProductListing("tents", Info, targetList)
LoadHeaderFooter();

List.init()
