import React from "react";
import { Link } from "react-router-dom";

const products = [
 {
    id: 1,
    sale: "",
    img: "/assets/images/product-img1.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$30.99",
    discountedPrice: "$15.49",
    rating: "4.7",
    reviews: "(12k)",
    progress: 50,
    sold: "25/50",
  },
  {
    id: 2,
    sale: "",
    img: "/assets/images/product-img2.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$27.49",
    discountedPrice: "$13.99",
    rating: "4.9",
    reviews: "(20k)",
    progress: 40,
    sold: "16/40",
  },
  {
    id: 3,
    sale: "",
    img: "/assets/images/product-img3.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$29.99",
    discountedPrice: "$14.49",
    rating: "4.6",
    reviews: "(15k)",
    progress: 60,
    sold: "36/60",
  },
  {
    id: 4,
    sale: "",
    img: "/assets/images/product-img1.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$31.99",
    discountedPrice: "$16.99",
    rating: "4.8",
    reviews: "(18k)",
    progress: 30,
    sold: "9/30",
  },
  {
    id: 5,
    sale: "",
    img: "/assets/images/product-img5.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$26.99",
    discountedPrice: "$12.99",
    rating: "4.5",
    reviews: "(10k)",
    progress: 45,
    sold: "20/45",
  },
  {
    id: 6,
    sale: "",
    img: "/assets/images/product-img6.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$32.49",
    discountedPrice: "$17.49",
    rating: "4.9",
    reviews: "(22k)",
    progress: 70,
    sold: "49/70",
  },
];
const ProductList = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="product-inner">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} className="product-inner-item" key={product.id}>
              <div className="product-card">
                <Link to={`/product/${product.id}`} className="product-card-add">
                  Add <i className="ph ph-shopping-cart" />
                </Link>
                <Link to={`product/${product.id}`} className="product-card-img">
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
                    <Link to={`product/${product.id}`} className="product-card-title-inner">
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;