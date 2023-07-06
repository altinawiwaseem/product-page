class ViewProductDetails {
  constructor() {
    this.productDetailsSection = document.querySelector(".product-details");
  }

  generateProductDetailsHTML(product) {
    const html = `
        <div>
          <img src="${product?.images[0]}" />
          <div class="description">
            <h2>${product?.name}</h2>  
            <div class="product-price">
              <del class="original-price">${product?.originalPrice}</del>
              <h4 class="price">${product?.price} €</h4>
            </div>
            <p>${product?.description}</p>
          </div>
        </div>
      `;

    return html;
  }

  displayProductDetails(product) {
    const productDetailsHTML = this.generateProductDetailsHTML(product);
    this.productDetailsSection.innerHTML = productDetailsHTML;
  }
}

export { ViewProductDetails };
