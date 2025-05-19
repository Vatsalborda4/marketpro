import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
]

const getSaleStyle = (sale) => {
  if (sale === "Sale 50%") return { backgroundColor: "#dc2626" };
  if (sale.toLowerCase() === "new") return { backgroundColor: "#ff9f29" };
  if (sale.toLowerCase() === "") return { display: "none" };
  if (sale === "Best Sale") return { backgroundColor: "#2563eb" };
  return {};
};
const HotDeals = () => {
  return (
    <>
      <div className="hotdeals">
        <div className="container">
          <div className="hotdeals-heading">
            <div className="hotdeals-heading-inner">
              <h5 className="hotdeals-heading-inner-item-left">
                Hot Deals Todays
              </h5>
              <div className="hotdeals-heading-inner-item-right">
                <Link to="/" className="hotdeals-heading-link">
                  View All Deals
                </Link>
              </div>
            </div>
          </div>
          <div className="hotdeals-inner">
            <div className="hotdeals-inner-left">
              <div className="hotdeals-offer-inner-item-inner">
                <img
                  src="assets/images/offer-shape.webp"
                  alt="Decorative shape for hotdeals-offer"
                  className="hotdeals-offer-inner-item-img"
                />
                <div className="hotdeals-offer-inner-item-thumb">
                  <img
                    src="assets/images/hot-deals-img.webp"
                    alt="Promotional hotdeals-offer image 1"
                  />
                </div>
                <div className="hotdeals-offer-inner-item-right">
                  <h4 className="hotdeals-offer-inner-item-text">
                    Fresh Vegetables
                  </h4>
                  <ul className="hotdeals-sales-slider-countdown-list">
                    <li className="hotdeals-sales-slider-countdown-list-inner">
                      <span className="days" />
                      234 Days
                    </li>
                    <li className="hotdeals-sales-slider-countdown-list-inner">
                      <span className="hours" />
                      21 Hours
                    </li>
                    <li className="hotdeals-sales-slider-countdown-list-inner">
                      <span className="minutes" />
                      30 Min
                    </li>
                    <li className="hotdeals-sales-slider-countdown-list-inner">
                      <span className="seconds" />
                      39 Sec
                    </li>
                  </ul>
                  <div className="btn-div">
                    <Link
                      to="/"
                      className="hotdeals-offer-inner-item-btn"
                      tabIndex={0}
                    >
                      Shop Now
                      <span className="hotdeals-offer-inner-item-btn-icon">
                        <i className="ph ph-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hotdeals-inner-right">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={2}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  1199: {
                    slidesPerView: 3,
                  },
                }}
                spaceBetween={7}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="hotdeals-product-inner-item">
                      <div className="hotdeals-product-card">
                        {product.sale && (
                          <Link
                            to={`product/${product.id}`}
                            className="hotdeals-product-sale"
                            style={getSaleStyle(product.sale)}
                          >
                            {product.sale}
                          </Link>
                        )}
                        <Link to={`product/${product.id}`} className="hotdeals-product-card-img">
                          <img src={product.img} alt={product.title} />
                        </Link>
                        <div className="hotdeals-product-card-content">
                          <h6 className="hotdeals-product-card-title">
                            <Link
                              to={`product/${product.id}`}
                              className="hotdeals-product-card-title-inner"
                            >
                              {product.title}
                            </Link>
                          </h6>
                          <div className="hotdeals-product-card-Lucky">
                            <span className="hotdeals-product-card-storefront">
                              <i className="ph-fill ph-storefront" />
                            </span>
                            <span className="hotdeals-product-card-Lucky-text">
                              {product.store}
                            </span>
                          </div>
                          <div className="hotdeals-product-card-price">
                            <span className="hotdeals-product-card-price-dec">
                              {product.originalPrice}
                            </span>
                            <span className="hotdeals-product-card-price-ong">
                              {product.discountedPrice}{" "}
                              <span className="hotdeals-product-card-price-oty">
                                /Qty
                              </span>
                            </span>
                          </div>
                          <div className="hotdeals-product-card-rating">
                            <span className="hotdeals-product-card-rating-num">
                              {product.rating}
                            </span>
                            <span className="hotdeals-product-card-rating-star">
                              <i className="ph-fill ph-star"></i>{" "}
                            </span>
                            <span className="hotdeals-product-card-rating-totle">
                              {product.reviews}
                            </span>
                          </div>
                          <Link to={`product/${product.id}`} className="hotdeals-add">
                            Add To Cart <i className="ph ph-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotDeals;
