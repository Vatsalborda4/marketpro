import React from "react";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <div className="feature" id="featureSection">
      <div className="container ">
        <div className="feature-inner">
          {/* <div className="flex-align">
            <button
              type="button"
              id="feature-item-wrapper-prev"
              className="slick-prev slick-arrow flex-center  bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
            >
              <i className="ph ph-caret-left" />
            </button>
            <button
              type="button"
              id="feature-item-wrapper-next"
              className="slick-next slick-arrow flex-center  bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
            >
              <i className="ph ph-caret-right" />
            </button>
          </div> */}
          <div className="feature-inner-item">
            
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="/shop" className="">
                    <img src="assets/images/thumbs/feature-img1.png" alt="" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="/shop" className="">
                      Vegetables
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
              </div>
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="/shop" className="">
                    <img src="assets/images/thumbs/feature-img2.png" alt="" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="/shop" className="">
                      Fish &amp; Meats
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
              </div>
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="/shop" className="">
                    <img src="assets/images/thumbs/feature-img3.png" alt="" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="/shop" className="">
                      Desserts
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
              </div>
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="/shop" className="">
                    <img src="assets/images/thumbs/feature-img4.png" alt="" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="/shop" className="">
                      Drinks &amp; Juice
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
              </div>
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="/shop" className="">
                    <img src="assets/images/thumbs/feature-img5.png" alt="" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="/shop" className="">
                      Animals Food
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
                </div>
              
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="/shop" className="">
                    <img src="assets/images/thumbs/feature-img6.png" alt="" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="/shop" className="">
                      Fresh Fruits
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
              </div>
              {/* 
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="/shop" className="">
                    <img src="assets/images/thumbs/feature-img7.png" alt="" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="/shop" className="">
                      Yummy Candy
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
              </div>
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="/shop" className="">
                    <img src="assets/images/thumbs/feature-img2.png" alt="" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="/shop" className="">
                      Fish &amp; Meats
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
              </div>
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="/shop" className="">
                    <img src="assets/images/thumbs/feature-img8.png" alt="" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="/shop" className="">
                      Dairy &amp; Eggs
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
              </div>
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="/shop" className="">
                    <img src="assets/images/thumbs/feature-img9.png" alt="" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="/shop" className="">
                      Snacks
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
              </div>
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="/shop" className="">
                    <img src="assets/images/thumbs/feature-img10.png" alt="" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="/shop" className="">
                      Frozen Foods
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
