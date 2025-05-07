import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";


const Brands = () => {
  return (
    <>
      <div className="brands-outer">
        <div className="container">
          <div className="brands">
            <div className="brand-title">
              <h2>Shop by Brands</h2>
              <div className="brand-inner">
                <a href="#">View All Deals</a>
              </div>
            </div>
            <div className="brands-logos">

              <Swiper slidesPerView={6} spaceBetween={10}
          modules={[Autoplay]}
                  breakpoints={{
                    0: {
                      slidesPerView: 2, // for viewports up to 991px
                    },
                    360: {
                      slidesPerView: 3, // for viewports up to 991px
                    },
                    426: {
                      slidesPerView: 4, // for viewports up to 991px
                    },
                    576: {
                      slidesPerView: 6, // for viewports 992px and above
                    },
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
              loop>
                <SwiperSlide>
                  <img src="assets/images/brand-img1.webp" alt="Brand 1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand-img2.webp" alt="Brand 2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand-img3.webp" alt="Brand 3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand-img4.webp" alt="Brand 4" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand-img5.webp" alt="Brand 5" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand-img6.webp" alt="Brand 6" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand-img7.webp" alt="Brand 7" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
