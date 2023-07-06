function generateFooterHTML() {
  return `
     
        <div class="footer-container">
          <div class="flexcol">
            <img class="logo" src="./src/assets/images/logo/logo.svg" alt="" />
            <h4>Contact</h4>
            <p><strong>Address:</strong> neukölln 12045,Berlin</p>
            <p><strong>Tel:</strong> +44 (0)161 2503 203</p>
            <div class="folow">
              <h4>Follow us</h4>
              <div class="footer-icons">
                <i class="ri-facebook-fill"></i>
                <i class="ri-instagram-fill"></i>
                <i class="ri-twitter-fill"></i>
                <i class="ri-youtube-fill"></i>
              </div>
            </div>
          </div>
          <div class="flexcol">
            <h4>About</h4>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Term & Conditions</a>
            <a href="#">Contact</a>
          </div>
  
          <div class="flexcol">
            <h4>Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
          </div>
          <div class="flexcol payment">
            <p>Secured Payment Gateways</p>
            <img src="./src/assets/images/payment/pay.png" alt="payment-image" />
          </div>
        </div>
  
        <div class="copyright">© All rights reserved.</div>
      
    `;
}

export { generateFooterHTML };
