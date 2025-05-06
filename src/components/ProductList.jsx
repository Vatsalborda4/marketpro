import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    sale: "",
    img: "assets/images/product-img1.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
    progress: 35,
    sold: "18/35"
  },
  {
    id: 2,
    sale: "",
    img: "assets/images/product-img2.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
    progress: 35,
    sold: "18/35"
  },
  {
    id: 3,
    sale: "",
    img: "assets/images/product-img3.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
    progress: 35,
    sold: "18/35"
  },
  {
    id: 4,
    sale: "",
    img: "assets/images/product-img1.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
    progress: 35,
    sold: "18/35"
  },
  {
    id: 5,
    sale: "",
    img: "assets/images/product-img5.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
    progress: 35,
    sold: "18/35"
  },
  {
    id: 6,
    sale: "",
    img: "assets/images/product-img6.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
    progress: 35,
    sold: "18/35"
  },
];
const ProductList = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="product-inner">
          {products.map((product) => (
            <div className="product-inner-item" key={product.id}>
              <div className="product-card">
                <Link to="#" className="product-card-add">
                  Add <i className="ph ph-shopping-cart" />
                </Link>
                <Link to="#" className="product-card-img">
                  <img src={product.img} alt={product.title} />
                </Link>
                <div className="product-card-content">
                  <div className="product-card-price">
                    <span className="product-card-price-dec">
                      {product.originalPrice}
                    </span>
                    <span className="product-card-price-ong">
                      {product.discountedPrice}{" "}
                      <span className="product-card-price-oty">/Qty</span>
                    </span>
                  </div>
                  <div className="product-card-rating">
                    <span className="product-card-rating-num">
                      {product.rating}
                    </span>
                    <span className="product-card-rating-star">
                      <i className="ph-fill ph-star" />
                    </span>
                    <span className="product-card-rating-totle">
                      {product.reviews}
                    </span>
                  </div>
                  <h6 className="product-card-title">
                    <Link to="#" className="product-card-title-inner">
                      {product.title}
                    </Link>
                  </h6>
                  <div className="product-card-Lucky">
                    <span className="product-card-storefront">
                      <i className="ph-fill ph-storefront" />
                    </span>
                    <span className="product-card-Lucky-text">
                      {product.store}
                    </span>
                  </div>
                  <div className="product-card-progress">
                    <div
                      className="product-card-progressbar"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow={product.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="product-card-progressbar-line"
                        style={{ width: `${product.progress}%` }}
                      />
                    </div>
                    <span className="product-card-Sold">
                      Sold: {product.sold}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;