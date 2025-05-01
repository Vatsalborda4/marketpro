import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FlashSales = () => {
  return (
    <div className="flash-sales">
      <div className="container ">
        <div className="section-heading">
          <div className="section-heading-inner">
            <h5 className="section-heading-inner-item-left">
              Flash Sales Today
            </h5>
            <div className="section-heading-inner-item-right">
              <Link
                to="/shop"
                className="section-heading-link"
              >
                View All Deals
              </Link>
            </div>
          </div>
        </div>
        <div className="flash-sales-slider">
          <div className="flash-sales-slider-item">
            <img
              src="assets/images/flash-sale-bg1.webp"
              alt=""
              className=" flash-sales-item-bg"
            />
            <div className="flash-sales-slider-item-thumb">
              <img src="/assets/images/flash-sale-img1.webp" alt="" />
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
                    <span className="minutes" />
                    30 Min
                  </li>
                  <li className="flash-sales-slider-countdown-list-inner">
                    <span className="seconds" />
                    39 Sec
                  </li>
                </ul>
              <Link to="/shop" className="flash-sales-slider-btn">
                Shop Now
                <span className="flash-sales-slider-btn-inner">
                  <i className="ph ph-arrow-right" />
                </span>
              </Link>
            </div>
          </div>

          <div className="flash-sales-slider-item">
            <img
              src="assets/images/flash-sale-bg2.webp"
              alt=""
              className=" flash-sales-item-bg"
            />
            <div className="flash-sales-slider-item-thumb">
              <img src="assets/images/flash-sale-img2.webp" alt="" />
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
                    <span className="minutes" />
                    50 Min
                  </li>
                  <li className="flash-sales-slider-countdown-list-inner">
                    <span className="seconds" />
                    29 Sec
                  </li>
                </ul>
              <Link to="/shop" className="flash-sales-slider-btn">
                Shop Now
                <span className="flash-sales-slider-btn-inner">
                  <i className="ph ph-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
