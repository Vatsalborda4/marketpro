import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";


const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-inner">
          <Link to="/" className="scroll-down">
            <span>
              <i className="ph ph-caret-double-down"></i>
            </span>
          </Link>
          <Swiper
            // install Swiper modules
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable:true }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
  
          >
            <SwiperSlide>
              <div className="banner-list">
                <div className="banner-item-content">
                  <h1 className="banner-item-title">
                    Daily Grocery Order and Get Express Delivery
                  </h1>
                  <Link to="/">
                    Explore Shop{" "}
                    <span className="Banner-icon">
                      <i className="ph ph-shopping-cart-simple"></i>
                    </span>
                  </Link>
                </div>
                <div className="banner-item-thumb">
                  <img src="assets/images/banner-img1.webp" alt="banner-img" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-list">
                <div className="banner-item-content">
                  <h1 className="banner-item-title">
                    Daily Grocery Order and Get Express Delivery
                  </h1>
                  <Link to="/">
                    Explore Shop{" "}
                    <span className="Banner-icon">
                      <i className="ph ph-shopping-cart-simple"></i>
                    </span>
                  </Link>
                </div>
                <div className="banner-item-thumb">
                  <img src="assets/images/banner-img3.webp" alt="banner-img" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
