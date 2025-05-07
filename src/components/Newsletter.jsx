import react from "react";
const Newsletter = () => {
  return (
    <>
      <div class="newsletter">
        <img src="assets\images\newsletter-bg.webp" alt="" />
        <div class="item1">
          <h1>
            Don’t Miss Out on
            <br />
            Grocery Deals
          </h1>
          <p>SIGN UP FOR THE UPDATE NEWSLETTER</p>
          <form class="form">
            <input type="email" placeholder="Your email address..." required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div class="item2">
          <img src="assets\images\newsletter-img.webp" alt="Grocery Basket" />
        </div>
      </div>
    </>
  );
};
export default Newsletter;
