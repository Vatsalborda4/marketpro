import React from "react";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-inner">
            <a href="#" className="scroll-down">
              <span>
                <i class="ph ph-caret-double-down"></i>
              </span>
            </a>
            <div className="banner-list">
              <div className="banner-item__content">
                <h1 class="banner-item__title ">
                  Daily Grocery Order and Get Express Delivery
                </h1>
                <a href="#">Explore Shop <span className="Banner-icon">
                  <i class="ph ph-shopping-cart-simple"></i></span></a>
              </div>
              <div className="banner-item__thumb">
                <img src="assets/images/banner-img1.webp" alt="banner-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
