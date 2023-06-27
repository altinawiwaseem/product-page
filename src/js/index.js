import { slider } from "./slider.js";

slider();

async function fetchProducts() {
  try {
    const response = await fetch("../../data/productsData.json");
    const data = await response.json();
    console.log("data", data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();

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

function toggleNavbarVisibility() {
  const navbar = document.querySelector(".navbar");
  let prevScrollPos = window.pageYOffset;

  function handleScroll() {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos === 0) {
      navbar.classList.remove("hidden-nav");
    } else if (currentScrollPos > prevScrollPos) {
      navbar.classList.add("hidden-nav");
    } else {
      navbar.classList.remove("hidden-nav");
    }

    prevScrollPos = currentScrollPos;
  }

  window.addEventListener("scroll", handleScroll);
}

toggleNavbarVisibility();
