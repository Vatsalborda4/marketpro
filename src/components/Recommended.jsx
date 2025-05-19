import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 7,
    sale: "",
    img: "/assets/images/product-img7.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$34.99",
    discountedPrice: "$19.99",
    rating: "4.4",
    reviews: "(8k)",
  },
  {
    id: 8,
    sale: "Sale 50%",
    img: "/assets/images/product-img8.webp",
    title: "Marcel's Modern Pantry Almond Unsweetened",
    store: "By Lucky Supermarket",
    originalPrice: "$29.49",
    discountedPrice: "$14.74",
    rating: "4.7",
    reviews: "(14k)",
  },
  {
    id: 9,
    sale: "Sale 50%",
    img: "/assets/images/product-img9.webp",
    title: "O Organics Milk, Whole, Vitamin D",
    store: "By Lucky Supermarket",
    originalPrice: "$28.49",
    discountedPrice: "$14.24",
    rating: "4.8",
    reviews: "(16k)",
  },
  {
    id: 10,
    sale: "Best Sale",
    img: "/assets/images/product-img10.webp",
    title: "Whole Grains and Seeds Organic Bread",
    store: "By Lucky Supermarket",
    originalPrice: "$27.99",
    discountedPrice: "$13.49",
    rating: "4.6",
    reviews: "(13k)",
  },
  {
    id: 11,
    sale: "",
    img: "/assets/images/product-img11.webp",
    title: "Luceme Yogurt, Lowfat, Strawberry",
    store: "By Lucky Supermarket",
    originalPrice: "$25.99",
    discountedPrice: "$12.49",
    rating: "4.9",
    reviews: "(19k)",
  },
  {
    id: 12,
    sale: "Sale 50%",
    img: "/assets/images/product-img12.webp",
    title: "Nature Valley Whole Grain Oats and Honey Protein",
    store: "By Lucky Supermarket",
    originalPrice: "$30.49",
    discountedPrice: "$15.24",
    rating: "4.5",
    reviews: "(11k)",
  },
  {
    id: 13,
    sale: "",
    img: "/assets/images/product-img13.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$33.99",
    discountedPrice: "$18.99",
    rating: "4.7",
    reviews: "(17k)",
  },
  {
    id: 14,
    sale: "Sale 50%",
    img: "/assets/images/product-img14.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$31.49",
    discountedPrice: "$15.74",
    rating: "4.8",
    reviews: "(15k)",
  },
  {
    id: 15,
    sale: "New",
    img: "/assets/images/product-img15.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$35.99",
    discountedPrice: "$20.99",
    rating: "4.6",
    reviews: "(9k)",
  },
  {
    id: 16,
    sale: "Sale 50%",
    img: "/assets/images/product-img16.webp",
    title: "Good & Gather Farmed Atlantic Salmon",
    store: "By Lucky Supermarket",
    originalPrice: "$36.99",
    discountedPrice: "$18.49",
    rating: "4.9",
    reviews: "(21k)",
  },
  {
    id: 17,
    sale: "Sale 50%",
    img: "/assets/images/product-img17.webp",
    title: "Market Pantry 41-50 Raw Large Shrimp",
    store: "By Lucky Supermarket",
    originalPrice: "$34.49",
    discountedPrice: "$17.24",
    rating: "4.7",
    reviews: "(12k)",
  },
  {
    id: 18,
    sale: "New",
    img: "/assets/images/product-img18.webp",
    title: "Tropicana 100% Juice, Orange, No Pulp",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.49",
    rating: "4.8",
    reviews: "(18k)",
  },
];

const getSaleStyle = (sale) => {
  if (sale === "Sale 50%") return { backgroundColor: "#dc2626" };
  if (sale.toLowerCase() === "new") return { backgroundColor: "#ff9f29" };
  if (sale.toLowerCase() === "") return { display: "none" };
  if (sale === "Best Sale") return { backgroundColor: "#2563eb" };
  return {};
};

const Recommended = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="Recommended-heading">
          <h5 className="">Recommended for you</h5>
          <ul
            className="common-tab "
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-all-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-all"
                type="button"
                role="tab"
                aria-controls="pills-all"
                aria-selected="true"
              >
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-grocery-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-grocery"
                type="button"
                role="tab"
                aria-controls="pills-grocery"
                aria-selected="false"
              >
                Grocery
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-fruits-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-fruits"
                type="button"
                role="tab"
                aria-controls="pills-fruits"
                aria-selected="false"
              >
                Fruits
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-juices-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-juices"
                type="button"
                role="tab"
                aria-controls="pills-juices"
                aria-selected="false"
              >
                Juices
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-vegetables-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-vegetables"
                type="button"
                role="tab"
                aria-controls="pills-vegetables"
                aria-selected="false"
              >
                Vegetables
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-snacks-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-snacks"
                type="button"
                role="tab"
                aria-controls="pills-snacks"
                aria-selected="false"
              >
                Snacks
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-organic-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-organic"
                type="button"
                role="tab"
                aria-controls="pills-organic"
                aria-selected="false"
              >
                Organic Foods
              </button>
            </li>
          </ul>
        </div>
        <div className="product-inner">
          {products.map((product) => (
            <Link to={`product/${product.id}`} className="product-inner-item" key={product.id}>
              <div className="product-card">
                {product.sale && (
                  <Link
                    to={`product/${product.id}`}
                    className="product-sale"
                    style={getSaleStyle(product.sale)}
                  >
                    {product.sale}
                  </Link>
                )}
                <Link to={`product/${product.id}`} className="product-card-img">
                  <img src={product.img} alt={product.title} />
                </Link>
                <div className="product-card-content">
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
                  <Link to={`product/${product.id}`} className="Recommended-add">
                    Add To Cart <i className="ph ph-shopping-cart" />
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
