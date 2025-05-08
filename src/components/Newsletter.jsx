import react from "react";
const Newsletter = () => {
  return (
    <>
      <div className="newsletter-outer">
        <div className="container">
          <div className="newsletter">
            <img src="assets\images\newsletter-bg.webp" alt="" />
            <div className="item1">
              <h2>
                Don’t Miss Out on
  
                Grocery Deals
              </h2>
              <p>SIGN UP FOR THE UPDATE NEWSLETTER</p>
              <form className="form">
                <input
                  type="email"
                  placeholder="Your email address..."
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
            <div className="item2">
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
