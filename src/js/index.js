/* import data from "../assets/productsData.json" assert { type: "json" };

console.log(data); */

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

/* async function getData() {
  try {
    const response = await import("../assets/productsData.json");
    const data = response.json();
    return console.log(data);
  } catch (err) {
    return err;
  }
}

getData();
 */
