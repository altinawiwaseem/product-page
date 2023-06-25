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
