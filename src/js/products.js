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
    images,
    rating
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
    this.rating = rating;
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
          productData.images,
          productData.rating
        );
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
}

export { ProductList };
