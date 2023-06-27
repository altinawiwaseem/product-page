class ViewProducts {
  constructor() {
    this.productsSection = document.querySelector("#products");
  }

  displayProducts(data) {
    if (data) {
      data.map((product) => {
        this.productsSection.insertAdjacentHTML(
          "beforeend",
          `
                  <section class="products-container"> 
                      <div class="product-card">
                          <h2>${product?.title}</h2>
                          <img src= ${product?.images[0]} />
                         
                      </div>
                      
                  </section>
              `
        );
      });
    } else {
    }
  }
}

export { ViewProducts };
