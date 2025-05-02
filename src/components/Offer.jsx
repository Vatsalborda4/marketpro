import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="offer">
      <div className="container">
        <div className="offer-inner">
          <div className="offer-inner-item">
            <div className="offer-inner-item-inner">
              <img
                src="assets/images/offer-shape.webp"
                alt="Decorative shape for offer"
                className="offer-inner-item-img"
              />
              <div className="offer-inner-item-thumb">
                <img src="assets/images/offer-img1.webp" alt="Promotional offer image 1" />
              </div>
              <div className="offer-inner-item-right">
                <div className="offer-inner-item-logo">
                  <img src="assets/images/offer-logo.webp" alt="Offer logo" />
                </div>
                <h4 className="offer-inner-item-text">$5 off your first order</h4>
                <div className="offer-inner-item-Delivery">
                  <span className="offer-inner-item-titme">Delivery by 6:15am</span>
                  <span className="offer-inner-item-date">
                    expired Aug 5
                  </span>
                </div>
                <Link
                  to="#"
                  className="offer-inner-item-btn"
                  tabIndex={0}
                >
                  Shop Now
                  <span className="offer-inner-item-btn-icon">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="offer-inner-item">
            <div className="offer-inner-item-inner">
              <img
                src="assets/images/offer-shape.webp"
                alt="Decorative shape for offer"
                className="offer-inner-item-img"
              />
              <div className="offer-inner-item-thumb">
                <img src="assets/images/offer-img2.webp" alt="Promotional offer image 2" />
              </div>
              <div className="offer-inner-item-right">
                <div className="offer-inner-item-logo">
                  <img src="assets/images/offer-logo.webp" alt="Offer logo" />
                </div>
                <h4 className="offer-inner-item-text">$5 off your first order</h4>
                <div className="offer-inner-item-Delivery">
                  <span className="offer-inner-item-titme">Delivery by 6:15am</span>
                  <span className="offer-inner-item-date">
                    expired Aug 5
                  </span>
                </div>
                <Link
                  to="#"
                  className="offer-inner-item-btn"
                  tabIndex={0}
                >
                  Shop Now
                  <span className="offer-inner-item-btn-icon">
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

export default Offer;
