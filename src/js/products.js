// main.js
class Product {
  constructor(
    id,
    name,
    originalPrice,
    price,
    title,
    link,
    description,
    available,
    detailDescription,
    images
  ) {
    this.id = id;
    this.name = name;
    this.originalPrice = originalPrice;
    this.price = price;
    this.title = title;
    this.link = link;
    this.description = description;
    this.available = available;
    this.detailDescription = detailDescription;
    this.images = images;
  }
}

class ProductList {
  constructor() {
    this.products = [];
  }

  async fetchProducts() {
    try {
      const response = await fetch("../../data/productsData.json");
      const data = await response.json();
      this.products = data.map((productData) => {
        return new Product(
          productData.id,
          productData.name,
          productData.originalPrice,
          productData.price,
          productData.title,
          productData.link,
          productData.description,
          productData.available,
          productData.detailDescription,
          productData.images
        );
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  /* displayProducts() {
      this.products.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
  
        const imageElement = document.createElement('img');
        imageElement.src = product.image;
        productElement.appendChild(imageElement);
  
        const nameElement = document.createElement('h2');
        nameElement.textContent = product.name;
        productElement.appendChild(nameElement);
  
        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${product.price}`;
        productElement.appendChild(priceElement);
  
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = product.description;
        productElement.appendChild(descriptionElement);
  
        productElement.addEventListener('click', () => {
          this.handleProductClick(product);
        });
  
        this.productsContainer.appendChild(productElement);
      });
    } */

  handleProductClick(product) {
    // Perform navigation to the individual product page based on the selected product
    // For simplicity, let's just log the selected product details
    console.log("Selected Product:", product);
  }
}

export { ProductList };

// Usage example
/* const productList = new ProductList();
productList.fetchProducts().then(() => {
  productList.displayProducts();
}); */
