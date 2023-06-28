class ViewProducts {
  constructor() {
    this.productsSection = document.querySelector(".cards-container");
  }

  generateStarsHTML(rating) {
    const filledStars = '<i class="ri-star-fill"></i>';
    const emptyStars = '<i class="ri-star-line"></i>';

    // Calculate the number of filled stars based on the rating
    const numFilledStars = Math.round(rating);

    // Generate the HTML for the stars
    let starsHTML = "";
    for (let i = 0; i < 5; i++) {
      if (i < numFilledStars) {
        starsHTML += filledStars;
      } else {
        starsHTML += emptyStars;
      }
    }

    return starsHTML;
  }

  generateCardHTML(product) {
    // Generating HTML based on the item's data
    const html = `
        <div class="product-card">
           <img src= ${product?.images[0]} />
            <div class="description">
            <h4>${product?.name}</h4>
            ${this.generateStarsHTML(product?.rating)}
            <h4>${product?.price} €</h4>  
            </div>
            <div class="card-icons flexcenter">
            <i class="ri-heart-line"></i>
            <a href="#"><i class="ri-shopping-cart-line"></i> </a>
            </div>
          
         </div> 
      
      
      `;
    return html;
  }

  displayProducts(data) {
    if (data) {
      data.map((product) => {
        const cardHTML = this.generateCardHTML(product);
        this.productsSection.insertAdjacentHTML("beforeend", cardHTML);
      });
    }
  }
}

export { ViewProducts };
