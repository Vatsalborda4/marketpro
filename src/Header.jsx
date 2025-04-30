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
    
      {/* start header top  */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-inner">
            {/* left side */}
            <ul className="header-top-item ready">
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
            </ul>

            {/* right side  */}
            <ul className="header-top-item header-top-item-right">
              {/* <div className="space-between1"> */}
              <li className="header-top-item header-top-icon menu">
                <a href="#">Help Center</a>
                <ul className="sub-menu">
                  <li>
                    <span className="icon"><PiHeadset /></span>
                    <span className="text">call center</span>
                  </li>
                  <li>
                    <span className="icon"><FaCommentDots /></span>
                    <span className="text">live chat</span>
                  </li>
                </ul>
              </li>
              <li className="header-top-item header-top-icon menu">
                <a href="#">Eng</a>
                <ul className="sub-menu">
                  <li>
                    <span className="img"><img src="assets/images/flag1.webp" alt="flag-1" /></span>
                    <span className="text">english</span>
                  </li>
                  <li>
                    <span className="img"><img src="assets/images/flag2.webp" alt="flag-2" /></span>
                    <span className="text">japan</span>
                  </li>
                  <li>
                    <span className="img"><img src="assets/images/flag3.webp" alt="flag-3" /></span>
                    <span className="text">french</span>
                  </li>
                  <li>
                    <span className="img"><img src="assets/images/flag4.webp" alt="flag-4" /></span>
                    <span className="text">germany</span>
                  </li>
                  <li>
                    <span className="img"><img src="assets/images/flag5.webp" alt="flag-5" /></span>
                    <span className="text">bangladesh</span>
                  </li>
                  <li>
                    <span className="img"><img src="assets/images/flag6.webp" alt="flag-6" /></span>
                    <span className="text">south korea</span>
                  </li>
                </ul>
              </li>
              <li className="header-top-item header-top-icon menu">
                <a href="#">USD</a>
                <ul className="sub-menu">
                  <li>
                    <span className="img"><img src="assets\images\flag1.webp" alt="flag-1" /></span>
                    <span className="text">USD</span>
                  </li>
                  <li>
                    <span className="img"><img src="assets\images\flag2.webp" alt="flag-2" /></span>
                    <span className="text">yen</span>
                  </li>
                  <li>
                    <span className="img"><img src="assets\images\flag3.webp" alt="flag-3" /></span>
                    <span className="text">franc</span>
                  </li>
                  <li>
                    <span className="img"><img src="assets\images\flag4.webp" alt="flag-4" /></span>
                    <span className="text">EURO</span>
                  </li>
                  <li>
                    <span className="img"><img src="assets\images\flag5.webp" alt="flag-5" /></span>
                    <span className="text">BTD</span>
                  </li>
                  <li>
                    <span className="img"><img src="assets\images\flag6.webp" alt="flag-6" /></span>
                    <span className="text">WON</span>
                  </li>
                </ul>
              </li>
              {/* </div> */}
              {/* <div className="spce-between2"> */}
              <li className="header-top-item">
                <a href="#">
                  <span>
                    <i class="fa-regular fa-circle-user"></i>
                  </span>
                  My Account
                </a>
              </li>
              {/* </div> */}
            </ul>
          </div>
        </div>
      </div>
      {/* end header top  */}

      {/* start header middle  */}
      <div className="header-middle">
      <div className="container">
        <div className="header-middle-inner">
          <div className="header-middle-first">
            <img src="assets/images/logo.webp" alt="logo" />
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
                  <input type="text" className="text"placeholder="Search for a product or brand" />
                  <span className="search-icon"><div></div><div><FaSearch /></div></span>
                </div>
              </div>
              <div className="location-outer">
                <div class="location-container">
                  <div class="location-button">
                    <span><IoLocationOutline /></span>
                    <div class="location-text">
                      <span>Your Location</span>
                      <span>Alabama</span>
                    </div>
                    <span class="dropdown-arrow"><FaAngleDown /></span>
                  </div>
                  <div class="dropdown-menu">
                    <div class="selected">Alabama</div>
                    <div>Alaska</div>
                    <div>Arizona</div>
                    <div>Delaware</div>
                    <div>Florida</div>
                    <div>Georgia</div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="header-middle-third">
            <div className="icon1">
              <span className="icon-inner">
                <FaRegHeart />
              </span>
              <span className="text">2</span>
              <span>Wishlist</span>
            </div>
            <div className="icon2">
              <span className="icon-inner">
                <FiShoppingCart />
              </span>
              <span className="text">2</span>
              <span>cart </span>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* end header middle  */}
      <HeaderButtom/>

    </>
  );
};
export default Header;
