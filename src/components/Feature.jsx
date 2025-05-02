import React from "react";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <div className="feature" id="featureSection">
      <div className="container ">
        <div className="feature-inner">
          <div className="feature-inner-item">
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="#" className="">
                    <img src="assets/images/feature-img1.webp" alt="feature-img1" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="#" className="">
                      Vegetables
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
              </div>
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="#" className="">
                    <img src="assets/images/feature-img2.webp" alt="feature-img2" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="#" className="">
                      Fish &amp; Meats
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
              </div>
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="#" className="">
                    <img src="assets/images/feature-img3.webp" alt="feature-img3" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="#" className="">
                      Desserts
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
              </div>
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="#" className="">
                    <img src="assets/images/feature-img4.webp" alt="feature-img4" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="#" className="">
                      Drinks &amp; Juice
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
              </div>
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="#" className="">
                    <img src="assets/images/feature-img5.webp" alt="feature-img5" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="#" className="">
                      Animals Food
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
                </div>
              
              <div className="feature-item ">
                <div className="feature-item__thumb ">
                  <Link to="#" className="">
                    <img src="assets/images/feature-img6.webp" alt="feature-img6" />
                  </Link>
                </div>
                <div className="feature-item__content ">
                  <h6 className="">
                    <Link to="#" className="">
                      Fresh Fruits
                    </Link>
                  </h6>
                  <span className="">125+ Products</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
