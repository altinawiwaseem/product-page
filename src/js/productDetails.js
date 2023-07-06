import { ProductList } from "./products.js";
import { htmlFooterAndHeader } from "./index.js";
import { ViewProductDetails } from "./viewProductDetails.js";

// call the function to add the header and the footer to the page
htmlFooterAndHeader();

const urlParams = new URLSearchParams(window.location.search);

//Get the product ID
const productId = urlParams.get("id");

async function fetchProductDetails(id) {
  try {
    const productList = new ProductList();
    const productDetails = new ViewProductDetails();

    // Fetch the products
    await productList.fetchProducts().then(() => {
      // Retrieve the product details based on the id
      const product = productList.products.find(
        (product) => product.id === +id
      );
      if (product) {
        productDetails.displayProductDetails(product);
      }
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProductDetails(productId);
