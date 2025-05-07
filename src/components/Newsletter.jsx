import react from "react";
const Newsletter = () => {
  return (
    <>
      <div className="newsletter-outer">
        <div className="container">
          <div class="newsletter">
            <img src="assets\images\newsletter-bg.webp" alt="" />
            <div class="item1">
              <h2>
                Don’t Miss Out on
  
                Grocery Deals
              </h2>
              <p>SIGN UP FOR THE UPDATE NEWSLETTER</p>
              <form class="form">
                <input
                  type="email"
                  placeholder="Your email address..."
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
            <div class="item2">
              <img
                src="assets\images\newsletter-img.webp"
                alt="Grocery Basket"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Newsletter;
