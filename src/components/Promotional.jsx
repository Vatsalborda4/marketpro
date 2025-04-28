import React from "react";
import { Link } from "react-router-dom";

const Promotional = () => {
  return (
    <div className="promotional-banner ">
      <div className="container">
        <div className="promotional-inner ">
          <div className="promotional-item">
            <div className="promotional-item-inner">
              <img
                src="assets/images/thumbs/promotional-banner-img1.png"
                alt=""
                className="promotional-item-img"
              />
              <div className="promotional-banner-item__content">
                <h6 className="promotional-banner-item__title ">
                  Everyday Fresh Meat
                </h6>
                <Link
                  to="/shop"
                  className="promotional-a"
                >
                  Shop Now
                  <span className="promotional-icon ">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="promotional-item">
            <div className="promotional-item-inner">
              <img
                src="assets/images/thumbs/promotional-banner-img2.png"
                alt=""
                className="promotional-item-img"
              />
              <div className="promotional-banner-item__content">
                <h6 className="promotional-banner-item__title ">
                  Daily Fresh Vegetables
                </h6>
                <Link
                  to="/shop"
                  className="promotional-a"
                >
                  Shop Now
                  <span className="promotional-icon ">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="promotional-item">
            <div className="promotional-item-inner">
              <img
                src="assets/images/thumbs/promotional-banner-img3.png"
                alt=""
                className="promotional-item-img"
              />
              <div className="promotional-banner-item__content">
                <h6 className="promotional-banner-item__title ">
                  Everyday Fresh Milk
                </h6>
                <Link
                  to="/shop"
                  className="promotional-a"
                >
                  Shop Now
                  <span className="promotional-icon ">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="promotional-item">
            <div className="promotional-item-inner">
              <img
                src="assets/images/thumbs/promotional-banner-img4.png"
                alt=""
                className="promotional-item-img"
              />
              <div className="promotional-banner-item__content">
                <h6 className="promotional-banner-item__title ">
                  Everyday Fresh Fruits
                </h6>
                <Link
                  to="/shop"
                  className="promotional-a"
                >
                  Shop Now
                  <span className="promotional-icon ">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotional;
