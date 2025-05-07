import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    sale: " ",
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
  //   {
  //     id: 5,
  //     sale: "",
  //     img: "assets/images/product-img11.webp",
  //     title: "Luceme Yogurt, Lowfat, Strawberry",
  //     store: "By Lucky Supermarket",
  //     originalPrice: "$28.99",
  //     discountedPrice: "$14.99",
  //     rating: "4.8",
  //     reviews: "(17k)",
  //   },
  //   {
  //     id: 6,
  //     sale: "Sale 50%",
  //     img: "assets/images/product-img12.webp",
  //     title: "Nature Valley Whole Grain Oats and Honey Protein",
  //     store: "By Lucky Supermarket",
  //     originalPrice: "$28.99",
  //     discountedPrice: "$14.99",
  //     rating: "4.8",
  //     reviews: "(17k)",
  //   },
  //   {
  //     id: 7,
  //     sale: "",
  //     img: "assets/images/product-img13.webp",
  //     title: "C-500 Antioxidant Protect Dietary Supplement",
  //     store: "By Lucky Supermarket",
  //     originalPrice: "$28.99",
  //     discountedPrice: "$14.99",
  //     rating: "4.8",
  //     reviews: "(17k)",
  //   },
  //   {
  //     id: 8,
  //     sale: "Sale 50%",
  //     img: "assets/images/product-img14.webp",
  //     title: "C-500 Antioxidant Protect Dietary Supplement",
  //     store: "By Lucky Supermarket",
  //     originalPrice: "$28.99",
  //     discountedPrice: "$14.99",
  //     rating: "4.8",
  //     reviews: "(17k)",
  //   },
  //   {
  //     id: 9,
  //     sale: "New",
  //     img: "assets/images/product-img15.webp",
  //     title: "C-500 Antioxidant Protect Dietary Supplement",
  //     store: "By Lucky Supermarket",
  //     originalPrice: "$28.99",
  //     discountedPrice: "$14.99",
  //     rating: "4.8",
  //     reviews: "(17k)",
  //   },
  //   {
  //     id: 10,
  //     sale: "Sale 50%",
  //     img: "assets/images/product-img16.webp",
  //     title: "Good & Gather Farmed Atlantic Salmon",
  //     store: "By Lucky Supermarket",
  //     originalPrice: "$28.99",
  //     discountedPrice: "$14.99",
  //     rating: "4.8",
  //     reviews: "(17k)",
  //   },
  //   {
  //     id: 11,
  //     sale: "Sale 50%",
  //     img: "assets/images/product-img17.webp",
  //     title: "Market Pantry 41-50 Raw Large Shrimp",
  //     store: "By Lucky Supermarket",
  //     originalPrice: "$28.99",
  //     discountedPrice: "$14.99",
  //     rating: "4.8",
  //     reviews: "(17k)",
  //   },
  //   {
  //     id: 12,
  //     sale: "New",
  //     img: "assets/images/product-img18.webp",
  //     title: "Tropicana 100% Juice, Orange, No Pulp",
  //     store: "By Lucky Supermarket",
  //     originalPrice: "$28.99",
  //     discountedPrice: "$14.99",
  //     rating: "4.8",
  //     reviews: "(17k)",
  //   },
];

const Organic = () => {
  return (
    <div className="Organic">
      <div className="container">
        <div className="Organic-heading">
          <div className="Organic-heading-inner">
            <h5 className="Organic-heading-inner-item-left">Organic Food</h5>
            <div className="Organic-heading-inner-item-right">
              <Link to="#" className="Organic-heading-link">
                View All Deals
              </Link>
            </div>
          </div>
        </div>
        <div className="Organic-inner">
          {products.map((product) => (
            <div className="Organic-inner-item" key={product.id}>
              <div className="Organic-card">
                <Link to="#" className="Organic-card-img">
                  <img src={product.img} alt={product.title} />
                </Link>
                <div className="Organic-card-content">
                  <div className="Organic-card-rating">
                    <span className="Organic-card-rating-num">
                      {product.rating}
                    </span>
                    <span className="Organic-card-rating-star">
                      <i className="ph-fill ph-star" />
                    </span>
                    <span className="Organic-card-rating-totle">
                      {product.reviews}
                    </span>
                  </div>
                  <h6 className="Organic-card-title">
                    <Link to="#" className="Organic-card-title-inner">
                      {product.title}
                    </Link>
                  </h6>
                  <div className="Organic-card-Lucky">
                    <span className="Organic-card-storefront">
                      <i className="ph-fill ph-storefront" />
                    </span>
                    <span className="Organic-card-Lucky-text">
                      {product.store}
                    </span>
                  </div>
                  <div className="Organic-card-price">
                    <span className="Organic-card-price-dec">
                      {product.originalPrice}
                    </span>
                    <br />
                    <span className="Organic-card-price-ong">
                      {product.discountedPrice}{" "}
                      <span className="Organic-card-price-oty">/Qty</span>
                    </span>
                  </div>
                  <Link to="#" className="Organic-add">
                    Add <i className="ph ph-shopping-cart" />
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

export default Organic;
