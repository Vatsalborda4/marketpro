import React from "react";
import { FaUserCircle } from "react-icons/fa";
import HeaderButtom from "./HeaderButtom";
import { FaCommentDots } from "react-icons/fa6";
import { PiHeadset } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
// import HeaderButtom from "./HeaderButtom";


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
