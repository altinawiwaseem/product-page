function generateHeaderHTML() {
  return `
      
        <div class="menu desktop-hide">
          <a href="#" class="trigger">
            <i class="ri-menu-2-line"></i>
          </a>
          <div class="menu-list">
            <ul>
              <div>
                <li><a href="#">Home</a></li>
              </div>
              <div>
                <li><a href="#">About Us</a></li>
              </div>
              <div>
                <li><a href="#">Contact Us</a></li>
              </div>
            </ul>
            <button class="close-btn">x</button>
          </div>
        </div>
  
        <div class="logo-div">
          <div class="logo">
            <a href="/"><img src="./src/assets/images/logo/logo.svg" alt="Logo" /></a>
          </div>
        </div>
        <nav class="navbar mobile-hide">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <div class="icons flexcenter">
          <li>
            <a href="#" class="icon wish-list mobile-hide">
              <div class="icon-large">
                <i class="ri-heart-line"></i>
              </div>
              <div class="fly-item"><span>0</span></div>
            </a>
          </li>
          <div class="cart-div flexcenter">
            <li>
              <a href="#" class="icon cart">
                <div class="icon-large">
                  <i class="ri-shopping-cart-line"></i>
                </div>
                <div class="fly-item"><span>0</span></div>
              </a>
            </li>
            <div class="icon-text">
              <div class="mini-text">Total</div>
              <div class="cart-total">€0.00</div>
            </div>
          </div>
        </div>
      
    `;
}

export { generateHeaderHTML };
