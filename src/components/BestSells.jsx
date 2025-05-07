import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    sale: "",
    img: "assets/images/best-sell1.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
    progress: 35,
    sold: "18/35",
  },
  {
    id: 2,
    sale: "",
    img: "assets/images/best-sell2.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
    progress: 35,
    sold: "18/35",
  },
  {
    id: 3,
    sale: "",
    img: "assets/images/best-sell3.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
    progress: 35,
    sold: "18/35",
  },
  {
    id: 4,
    sale: "",
    img: "assets/images/best-sell4.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
    progress: 35,
    sold: "18/35",
  },
];
const BestSells = () => {
  return (
    <div className="BestSells">
      <div className="container">
        <div className="BestSells-heading">
          <div className="BestSells-heading-inner">
            <h5 className="BestSells-heading-inner-item-left">
              Daily Best Sells
            </h5>
          </div>
        </div>
        <div className="BestSells-inner">
          {products.map((product) => (
            <div className="BestSells-inner-item" key={product.id}>
              <div className="BestSells-card">
                <Link to="#" className="BestSells-card-img">
                  <img src={product.img} alt={product.title} />
                  <div className="BestSells-time">
                    <span>9 Houres</span>
                    <span>45 Min</span>
                    <span>25 Sec</span>
                  </div>
                </Link>
                <div className="BestSells-card-content">
                  <div className="BestSells-card-price">
                    <span className="BestSells-card-price-dec">
                      {product.originalPrice}
                    </span>
                    <span className="BestSells-card-price-ong">
                      {product.discountedPrice}{" "}
                      <span className="BestSells-card-price-oty">/Qty</span>
                    </span>
                  </div>
                  <div className="BestSells-card-rating">
                    <span className="BestSells-card-rating-num">
                      {product.rating}
                    </span>
                    <span className="BestSells-card-rating-star">
                      <i className="ph-fill ph-star" />
                    </span>
                    <span className="BestSells-card-rating-totle">
                      {product.reviews}
                    </span>
                  </div>
                  <h6 className="BestSells-card-title">
                    <Link to="#" className="BestSells-card-title-inner">
                      {product.title}
                    </Link>
                  </h6>
                  <div className="BestSells-card-Lucky">
                    <span className="BestSells-card-storefront">
                      <i className="ph-fill ph-storefront" />
                    </span>
                    <span className="BestSells-card-Lucky-text">
                      {product.store}
                    </span>
                  </div>
                  <div className="BestSells-card-progress">
                    <div
                      className="BestSells-card-progressbar"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow={product.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="BestSells-card-progressbar-line"
                        style={{ width: `${product.progress}%` }}
                      />
                    </div>
                    <span className="BestSells-card-Sold">
                      Sold: {product.sold}
                    </span>
                  </div>
                  <Link to="#" className="BestSells-card-add">
                    Add To Cart <i className="ph ph-shopping-cart" />
                  </Link>
                </div>
                <span
                  className="BestSells-sale"
                  style={{ backgroundColor: "#dc2626 " }}
                >
                  Sale 50%
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="BestSells-inner-left">
          <div className="BestSells-offer-inner-item-inner">
            <img
              src="assets/images/special-snacks.webp"
              alt="Decorative shape for BestSells-offer"
              className="BestSells-offer-inner-item-img"
            />

            <div className="BestSells-offer-inner-item-right">
              <h4 className="BestSells-offer-inner-item-text">
                Special Snacks{" "}
              </h4>
              <ul className="BestSells-sales-slider-countdown-list">
              
                <li className="BestSells-sales-slider-countdown-list-inner">
                  <span className="hours" />
                  21 Hours
                </li>
                <li className="BestSells-sales-slider-countdown-list-inner">
                  <span className="minutes" />
                  30 Min
                </li>
                <li className="BestSells-sales-slider-countdown-list-inner">
                  <span className="seconds" />
                  39 Sec
                </li>
              </ul>
              <div className="btn-div">
                <Link
                  to="#"
                  className="BestSells-offer-inner-item-btn"
                  tabIndex={0}
                >
                  Shop Now
                  <span className="BestSells-offer-inner-item-btn-icon">
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

export default BestSells;
