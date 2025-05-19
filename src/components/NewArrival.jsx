import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

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

const NewArrival = () => {
  return (
    <div className="newarrival">
      <div className="container">
        <div className="newarrival-heading">
          <div className="newarrival-heading-inner">
            <h5 className="newarrival-heading-inner-item-left">
              New Arrivals
            </h5>
            <div className="newarrival-heading-inner-item-right">
              <Link to="/" className="newarrival-heading-link">
                View All Deals
              </Link>
            </div>
          </div>
        </div>
        <div className="newarrival-inner">
          <Swiper
          modules={[Autoplay]}

            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1, // for viewports up to 991px
              },
              426: {
                slidesPerView: 2, // for viewports up to 991px
              },
              576: {
                slidesPerView: 3, // for viewports up to 991px
              },
              992: {
                slidesPerView: 4, // for viewports 992px and above
              },
            }}
            spaceBetween={10}
            loop={true}
            
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Link to={`product/${product.id}`} className="newarrival-inner-item">
                  <div className="newarrival-card">
                    <Link to={`product/${product.id}`} className="newarrival-card-img">
                      <img src={product.img} alt={product.title} />
                    </Link>
                    <div className="newarrival-card-content">
                      <div className="newarrival-card-rating">
                        <span className="newarrival-card-rating-num">
                          {product.rating}
                        </span>
                        <span className="newarrival-card-rating-star">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="newarrival-card-rating-totle">
                          {product.reviews}
                        </span>
                      </div>
                      <h6 className="newarrival-card-title">
                        <Link to="/" className="newarrival-card-title-inner">
                          {product.title}
                        </Link>
                      </h6>
                      <div className="newarrival-card-Lucky">
                        <span className="newarrival-card-storefront">
                          <i className="ph-fill ph-storefront" />
                        </span>
                        <span className="newarrival-card-Lucky-text">
                          {product.store}
                        </span>
                      </div>
                      <div className="newarrival-card-price">
                        <span className="newarrival-card-price-dec">
                          {product.originalPrice}
                        </span>
                        <br />
                        <span className="newarrival-card-price-ong">
                          {product.discountedPrice}{" "}
                          <span className="newarrival-card-price-oty">/Qty</span>
                        </span>
                      </div>
                      <Link to={`product/${product.id}`} className="newarrival-add">
                        Add <i className="ph ph-shopping-cart" />
                      </Link>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
