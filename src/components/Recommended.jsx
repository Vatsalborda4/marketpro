import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    sale: "",
    img: "assets/images/product-img7.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 2,
    sale: "Sale 50%",
    img: "assets/images/product-img8.webp",
    title: "Marcel's Modern Pantry Almond Unsweetened",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 3,
    sale: "Sale 50%",
    img: "assets/images/product-img9.webp",
    title: "O Organics Milk, Whole, Vitamin D",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 4,
    sale: "Best Sale",
    img: "assets/images/product-img10.webp",
    title: "Whole Grains and Seeds Organic Bread",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 5,
    sale: "",
    img: "assets/images/product-img11.webp",
    title: "Luceme Yogurt, Lowfat, Strawberry",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 6,
    sale: "Sale 50%",
    img: "assets/images/product-img12.webp",
    title: "Nature Valley Whole Grain Oats and Honey Protein",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 7,
    sale: "",
    img: "assets/images/product-img13.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 8,
    sale: "Sale 50%",
    img: "assets/images/product-img14.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 9,
    sale: "New",
    img: "assets/images/product-img15.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 10,
    sale: "Sale 50%",
    img: "assets/images/product-img16.webp",
    title: "Good & Gather Farmed Atlantic Salmon",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 11,
    sale: "Sale 50%",
    img: "assets/images/product-img17.webp",
    title: "Market Pantry 41-50 Raw Large Shrimp",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 12,
    sale: "New",
    img: "assets/images/product-img18.webp",
    title: "Tropicana 100% Juice, Orange, No Pulp",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
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
            <div className="product-inner-item" key={product.id}>
              <div className="product-card">
                {product.sale && (
                  <Link
                    to="#"
                    className="product-sale"
                    style={getSaleStyle(product.sale)}
                  >
                    {product.sale}
                  </Link>
                )}
                <Link to="#" className="product-card-img">
                  <img src={product.img} alt={product.title} />
                </Link>
                <div className="product-card-content">
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
                  <Link to="#" className="Recommended-add">
                    Add To Cart <i className="ph ph-shopping-cart" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
