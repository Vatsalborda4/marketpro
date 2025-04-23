import React from "react";
import { FaUserCircle } from "react-icons/fa";
import HeaderButtom from "./HeaderButtom";
import { FaCommentDots } from "react-icons/fa6";
import { PiHeadset } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <>
    
      {/* start header top  */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-inner">
            {/* left side */}
            <uul className="header-top-item ">
              <li className="header-top-item header-top-icon">
                <a href="#">Become A Seller</a>
              </li>
              <li className="header-top-item header-top-icon">
                <a href="#">About us</a>
              </li>
              <li className="header-top-item header-top-icon">
                <a href="#">Free Delivery</a>
              </li>
              <li className="header-top-item">
                <a href="#">Returns Policy</a>
              </li>
            </uul>

            {/* right side  */}
            <ul className="header-top-item">
              <li className="header-top-item header-top-icon">
                <a href="#">Help Center</a>
                <ul className="sub-menu">
                  <li>
                    <div>
                      <PiHeadset />
                    </div>
                    <div>call center</div>
                  </li>
                  <li>
                    <div>
                      <FaCommentDots />
                    </div>
                    live chat
                  </li>
                </ul>
              </li>
              <li className="header-top-item header-top-icon">
                <a href="#">Eng</a>
              </li>
              <li className="header-top-item header-top-icon">
                <a href="#">USD</a>
              </li>
              <li className="header-top-item">
                <a href="#">
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
<<<<<<< HEAD
      <HeaderButtom/>
=======
      {/* end header top  */}

      {/* start header middle  */}
      <div className="header-middle">
        <div className="header-middle-inner">
          <div className="header-middle-first">
            <img src="assets\images\logo.png" alt="logo" />
          </div>
          <div className="header-middle-second">
            <form action="#" className="second-item-inner">
              <div className="form-flex">
                <select className="select-categories">
                  <option value="1" selected>
                    All Categories
                  </option>
                  <option value="1">Grocery</option>
                  <option value="1">Breakfast & Dairy</option>
                  <option value="1">Vegetables</option>
                  <option value="1">Milks and Dairies</option>
                  <option value="1">Pet Foods & Toy</option>
                  <option value="1">Breads & Bakery</option>
                  <option value="1">Fresh Seafood</option>
                  <option value="1">Fronzen Foods</option>
                  <option value="1">Noodles & Rice</option>
                  <option value="1">Ice Cream</option>
                </select>
                <div class="search">
                  <input
                    type="text"
                    className="text"
                    placeholder="Search for a product or brand"
                  />
                  <button type="submit" className="search-icon">
                    <FaSearch />
                  </button>
                </div>
              </div>
              <div className="location-outer">
                <span className="location-icon">
                  <FaLocationDot />
                </span>
                <span class="text-gray-600 text-xs">Your Location</span>
                <select className="location-select" name="state">
                  <option value="1" selected>
                    Alabama
                  </option>
                  <option value="1">Alaska</option>
                  <option value="1">Arizona</option>
                  <option value="1">Delaware</option>
                  <option value="1">Florida</option>
                  <option value="1">Georgia</option>
                  <option value="1">Hawaii</option>
                  <option value="1">Indiana</option>
                  <option value="1">Marzland</option>
                  <option value="1">Nevada</option>
                  <option value="1">New Jersey</option>
                  <option value="1">New Mexico</option>
                  <option value="1">New York</option>
                </select>
              </div>
            </form>
          </div>
          <div className="header-middle-third">
            <div className="icon">
            <span className="text">2</span>
            <span className="icon-inner">
            <FaRegHeart /> 
            </span>
            <span>Wishlist</span>
            </div>
          <div className="icon">
          <span className="text">2</span>
          <span  className="icon-inner">
          <FiShoppingCart />
          </span>
          <span>
            cart 
          </span>
          </div>
          </div>
        </div>
      </div>
      {/* end header middle  */}
>>>>>>> 319591fb8ebd12f0b47f2c0c83efaf1270588e14
    </>
  );
};
export default Header;
