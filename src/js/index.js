import { slider } from "./slider.js";
import { ProductList } from "./products.js";
import { ViewProducts } from "./viewProducts.js";

slider();

/* async function fetchProducts() {
  try {
    const response = await fetch("../../data/productsData.json");
    const data = await response.json();
    console.log("data", data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts(); */

document.addEventListener("DOMContentLoaded", function () {
  const trigger = document.querySelector(".trigger");
  const menuList = document.querySelector(".menu-list");
  const closeBtn = document.querySelector(".close-btn");

  trigger.addEventListener("click", function (e) {
    e.preventDefault();
    menuList.classList.toggle("active");
  });

  closeBtn.addEventListener("click", function () {
    menuList.classList.remove("active");
  });

  document.addEventListener("click", function (e) {
    if (!menuList.contains(e.target) && !trigger.contains(e.target)) {
      menuList.classList.remove("active");
    }
  });
});

const productList = new ProductList();

const data = await productList.fetchProducts().then(() => {
  return productList.products;
});

console.log(data);
const viewProducts = new ViewProducts();

const productsCards = viewProducts.displayProducts(data);
