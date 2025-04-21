import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="header-top-inne">
            {/* left side */}
            <ul className="header-top-item ">
              <li className="header-top-item header-top-icon">
                <a href="/">Become A Seller</a>
              </li>
              <li className="header-top-item header-top-icon">
                <a href="/">About us</a>
              </li>
              <li className="header-top-item header-top-icon">
                <a href="/">Free Delivery</a>
              </li>
              <li className="header-top-item">
                <a href="/">Returns Policy</a>
              </li>
            </ul>

            {/* right side  */}
            <ul className="header-top-item">
              <li className="header-top-item header-top-icon">
                <a href="/">Help Center</a>
              </li>
              <li className="header-top-item header-top-icon">
                <a href="/">Eng</a>
              </li>
              <li className="header-top-item header-top-icon">
                <a href="/">USD</a>
              </li>
              <li className="header-top-item">
                <a href="/">
                  <span>
                  <i class="fa-regular fa-circle-user"></i>
                  </span>
                  My Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
