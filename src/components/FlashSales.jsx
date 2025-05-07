import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FlashSales = () => {
  return (
    <div className="flash-sales">
      <div className="container">
        <div className="section-heading">
          <div className="section-heading-inner">
            <h5 className="section-heading-inner-item-left">
              Flash Sales Today
            </h5>
            <div className="section-heading-inner-item-right">
              <Link to="#" className="section-heading-link">
                View All Deals
              </Link>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            0: {
              slidesPerView: 1, // for viewports up to 991px
            },
            992: {
              slidesPerView: 2, // for viewports 992px and above
            },
          }}
          loop={true}
          className="flash-sales-slider"
        >
          <SwiperSlide>
            <div className="flash-sales-slider-item">
              <img
                src="assets/images/flash-sale-bg1.webp"
                alt="Background for Fresh Vegetables"
                className="flash-sales-item-bg"
              />
              <div className="flash-sales-slider-item-thumb">
                <img src="/assets/images/flash-sale-img1.webp" alt="Fresh Vegetables" />
              </div>
              <div className="flash-sales-slider-item-content">
                <h6 className="flash-sales-slider-item-content-title">
                  Fresh Vegetables
                </h6>
                <ul className="flash-sales-slider-countdown-list">
                  <li className="flash-sales-slider-countdown-list-inner">
                    <span className="days" />234 Days
                  </li>
                  <li className="flash-sales-slider-countdown-list-inner">
                    <span className="hours" />21 Hours
                  </li>
                  <li className="flash-sales-slider-countdown-list-inner">
                    <span className="minutes" />30 Min
                  </li>
                  <li className="flash-sales-slider-countdown-list-inner">
                    <span className="seconds" />39 Sec
                  </li>
                </ul>
                <Link to="#" className="flash-sales-slider-btn">
                  Shop Now
                  <span className="flash-sales-slider-btn-inner">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flash-sales-slider-item">
              <img
                src="assets/images/flash-sale-bg2.webp"
                alt="Background for Daily Snacks"
                className="flash-sales-item-bg"
              />
              <div className="flash-sales-slider-item-thumb">
                <img src="assets/images/flash-sale-img2.webp" alt="Daily Snacks" />
              </div>
              <div className="flash-sales-slider-item-content">
                <h6 className="flash-sales-slider-item-content-title">
                  Daily Snacks
                </h6>
                <ul className="flash-sales-slider-countdown-list">
                  <li className="flash-sales-slider-countdown-list-inner">
                    <span className="days" />134 Days
                  </li>
                  <li className="flash-sales-slider-countdown-list-inner">
                    <span className="hours" />19 Hours
                  </li>
                  <li className="flash-sales-slider-countdown-list-inner">
                    <span className="minutes" />50 Min
                  </li>
                  <li className="flash-sales-slider-countdown-list-inner">
                    <span className="seconds" />29 Sec
                  </li>
                </ul>
                <Link to="#" className="flash-sales-slider-btn">
                  Shop Now
                  <span className="flash-sales-slider-btn-inner">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flash-sales-slider-item">
              <img
                src="assets/images/flash-sale-bg1.webp"
                alt="Background for Fresh Vegetables"
                className="flash-sales-item-bg"
              />
              <div className="flash-sales-slider-item-thumb">
                <img src="/assets/images/flash-sale-img1.webp" alt="Fresh Vegetables" />
              </div>
              <div className="flash-sales-slider-item-content">
                <h6 className="flash-sales-slider-item-content-title">
                  Fresh Vegetables
                </h6>
                <ul className="flash-sales-slider-countdown-list">
                  <li className="flash-sales-slider-countdown-list-inner">
                    <span className="days" />234 Days
                  </li>
                  <li className="flash-sales-slider-countdown-list-inner">
                    <span className="hours" />21 Hours
                  </li>
                  <li className="flash-sales-slider-countdown-list-inner">
                    <span className="minutes" />30 Min
                  </li>
                  <li className="flash-sales-slider-countdown-list-inner">
                    <span className="seconds" />39 Sec
                  </li>
                </ul>
                <Link to="#" className="flash-sales-slider-btn">
                  Shop Now
                  <span className="flash-sales-slider-btn-inner">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FlashSales;
