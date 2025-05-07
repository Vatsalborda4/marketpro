import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const products = [
  {
    id: 1,
    sale: "New",
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
    sale: "Best Sale",
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
    sale: "New",
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
                <Link to="#" className="hotdeals-heading-link">
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
                      to="#"
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
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}

                // modules={[Autoplay]}
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="hotdeals-product-inner-item">
                      <div className="hotdeals-product-card">
                        {product.sale && (
                          <Link
                            to="#"
                            className="hotdeals-product-sale"
                            style={getSaleStyle(product.sale)}
                          >
                            {product.sale}
                          </Link>
                        )}
                        <Link to="#" className="hotdeals-product-card-img">
                          <img src={product.img} alt={product.title} />
                        </Link>
                        <div className="hotdeals-product-card-content">
                          <h6 className="hotdeals-product-card-title">
                            <Link
                              to="#"
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
                              <i class="ph-fill ph-star"></i>{" "}
                            </span>
                            <span className="hotdeals-product-card-rating-totle">
                              {product.reviews}
                            </span>
                          </div>
                          <Link to="#" className="hotdeals-add">
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
