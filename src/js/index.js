import { slider } from "./slider.js";
import { ProductList } from "./products.js";
import { ViewProducts } from "./viewProducts.js";

slider();

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

async function fetchAndDisplayProducts() {
  try {
    const productList = new ProductList();
    const viewProducts = new ViewProducts();

    await productList.fetchProducts();
    viewProducts.displayProducts(productList.products);
  } catch (error) {
    console.error("Error fetching and displaying products:", error);
  }
}

fetchAndDisplayProducts();
