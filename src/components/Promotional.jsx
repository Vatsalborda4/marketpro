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
                src="assets/images/promotional-banner-img1.webp"
                alt="Promotional banner showcasing fresh meat"
                className="promotional-item-img"
              />
              <div className="promotional-banner-item-content">
                <h6 className="promotional-banner-item-title ">
                  Everyday Fresh Meat
                </h6>
                <Link to="/" className="promotional-a">
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
                src="assets/images/promotional-banner-img2.webp"
                alt="Promotional banner showcasing fresh vegetables"
                className="promotional-item-img"
              />
              <div className="promotional-banner-item-content">
                <h6 className="promotional-banner-item-title ">
                  Daily Fresh Vegetables
                </h6>
                <Link to="/" className="promotional-a">
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
                src="assets/images/promotional-banner-img3.webp"
                alt="Promotional banner showcasing fresh milk"
                className="promotional-item-img"
              />
              <div className="promotional-banner-item-content">
                <h6 className="promotional-banner-item-title ">
                  Everyday Fresh Milk
                </h6>
                <Link to="/" className="promotional-a">
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
                src="assets/images/promotional-banner-img4.webp"
                alt="Promotional banner showcasing fresh fruits"
                className="promotional-item-img"
              />
              <div className="promotional-banner-item-content">
                <h6 className="promotional-banner-item-title ">
                  Everyday Fresh Fruits
                </h6>
                <Link to="/" className="promotional-a">
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
