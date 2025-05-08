import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";


const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-inner">
          <a href="#" className="scroll-down">
            <span>
              <i className="ph ph-caret-double-down"></i>
            </span>
          </a>
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
                  <a href="#">
                    Explore Shop{" "}
                    <span className="Banner-icon">
                      <i className="ph ph-shopping-cart-simple"></i>
                    </span>
                  </a>
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
                  <a href="#">
                    Explore Shop{" "}
                    <span className="Banner-icon">
                      <i className="ph ph-shopping-cart-simple"></i>
                    </span>
                  </a>
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
