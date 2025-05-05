import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Feature = () => {
  const features = [
    {
      img: "assets/images/feature-img1.webp",
      title: "Vegetables",
      products: "125+ Products"
    },
    {
      img: "assets/images/feature-img2.webp",
      title: "Fish & Meats",
      products: "125+ Products"
    },
    {
      img: "assets/images/feature-img3.webp",
      title: "Desserts",
      products: "125+ Products"
    },
    {
      img: "assets/images/feature-img4.webp",
      title: "Drinks & Juice",
      products: "125+ Products"
    },
    {
      img: "assets/images/feature-img5.webp",
      title: "Animals Food",
      products: "125+ Products"
    },
    {
      img: "assets/images/feature-img6.webp",
      title: "Fresh Fruits",
      products: "125+ Products"
    },
    {
      img: "assets/images/feature-img7.webp",
      title: "Yummy Candy",
      products: "125+ Products"
    },
    {
      img: "assets/images/feature-img2.webp",
      title: "Fish & Meats",
      products: "125+ Products"
    },
    {
      img: "assets/images/feature-img8.webp",
      title: "Fish & Meats",
      products: "125+ Products"
    },
    {
      img: "assets/images/feature-img9.webp",
      title: "Snacks",
      products: "125+ Products"
    },
    {
      img: "assets/images/feature-img10.webp",
      title: "Frozen Foods",
      products: "125+ Products"
    }
  ];

  return (
    <div className="feature" id="featureSection">
      <div className="container">
        <div className="feature-inner">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={6}
            navigation
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {features.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="feature-item">
                  <div className="feature-item-thumb">
                    <Link to="#">
                      <img src={item.img} alt={`feature-img-${index}`} />
                    </Link>
                  </div>
                  <div className="feature-item-content">
                    <h6>
                      <Link to="#">{item.title}</Link>
                    </h6>
                    <span>{item.products}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Feature;
