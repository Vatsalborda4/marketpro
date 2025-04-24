import React from "react";
import { TbGridDots } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
const HeaderButtom = () => {
  return (
    <>
      <div className="header-buttom">
        <div className="container">
          <div className="header-bottom-inner">
            <div className="header-bottom-category">
              <button type="button" className="category-button">
                <span className="icon ">
                  <i className="ph ph-dots-nine"></i>{" "}
                </span>
                <span className="button-text">All</span>
                <span> Categories</span>
                <span className="arrow-icon ">
                  <i className="ph ph-caret-down"></i>
                </span>
                <ul className="category-submenu">
                  <li className="category-submenu-item">
                    <a className="" href="">
                      <span className="">
                        <i class="ph ph-carrot"></i>
                      </span>
                      <span>Vegetables &amp; Fruit</span>
                      <span className="caret">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </a>
                    <div className="category-submenu-item-inner ">
                      <h6 className="category-submenu-item-inner-title">
                        Vegetables &amp; Fruit
                      </h6>
                      <ul className="category-submenu-item-inner-item">
                        <li>
                          <a href="/shop">Potato &amp; Tomato 000</a>
                        </li>
                        <li>
                          <a href="/shop">Cucumber &amp; Capsicum</a>
                        </li>
                        <li>
                          <a href="/shop">Leafy Vegetables</a>
                        </li>
                        <li>
                          <a href="/shop">Root Vegetables</a>
                        </li>
                        <li>
                          <a href="/shop">Beans &amp; Okra</a>
                        </li>
                        <li>
                          <a href="/shop">Cabbage &amp; Cauliflower</a>
                        </li>
                        <li>
                          <a href="/shop">Gourd &amp; Drumstick</a>
                        </li>
                        <li>
                          <a href="/shop">Specialty</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <a className="" href="/">
                      <span className="">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Beverages</span>
                      <span className="caret">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </a>
                    <div className="category-submenu-item-inner ">
                      <h6 className="category-submenu-item-inner-title">
                        Beverages
                      </h6>
                      <ul className="category-submenu-item-inner-item">
                        <li>
                          <a href="/shop">Soda &amp; Cocktail Mix </a>
                        </li>
                        <li>
                          <a href="/shop"> Sports &amp; Energy Drinks</a>
                        </li>
                        <li>
                          <a href="/shop"> Non Alcoholic Drinks</a>
                        </li>
                        <li>
                          <a href="/shop"> Packaged Water </a>
                        </li>
                        <li>
                          <a href="/shop"> Spring Water</a>
                        </li>
                        <li>
                          <a href="/shop"> Flavoured Water </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <a className="" href="/">
                      <span className="">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Meats &amp; Seafood</span>
                      <span className="caret">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </a>
                    <div className="category-submenu-item-inner">
                      <h6 className="category-submenu-item-inner-title">
                        Meats &amp; Seafood
                      </h6>
                      <ul className="category-submenu-item-inner-item">
                        <li>
                          <a href="/shop"> Fresh Meat </a>
                        </li>
                        <li>
                          <a href="/shop"> Frozen Meat</a>
                        </li>
                        <li>
                          <a href="/shop"> Marinated Meat</a>
                        </li>
                        <li>
                          <a href="/shop"> Fresh &amp; Frozen Meat</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <a className="" href="/">
                      <span className="">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Breakfast &amp; Dairy</span>
                      <span className="caret">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </a>
                    <div className="category-submenu-item-inner">
                      <h6 className="category-submenu-item-inner-title">
                        Breakfast &amp; Dairy
                      </h6>
                      <ul className="category-submenu-item-inner-item">
                        <li>
                          <a href="/shop"> Oats &amp; Porridge</a>
                        </li>
                        <li>
                          <a href="/shop"> Kids Cereal</a>
                        </li>
                        <li>
                          <a href="/shop"> Muesli</a>
                        </li>
                        <li>
                          <a href="/shop"> Flakes</a>
                        </li>
                        <li>
                          <a href="/shop"> Granola &amp; Cereal Bars</a>
                        </li>
                        <li>
                          <a href="/shop"> Instant Noodles</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <a className="" href="/">
                      <span className="">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Frozen Foods</span>
                      <span className="caret">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </a>
                    <div className="category-submenu-item-inner">
                      <h6 className="category-submenu-item-inner-title">
                        Frozen Foods
                      </h6>
                      <ul className="category-submenu-item-inner-item">
                        <li>
                          <a href="/shop"> Instant Noodles </a>
                        </li>
                        <li>
                          <a href="/shop"> Hakka Noodles</a>
                        </li>
                        <li>
                          <a href="/shop"> Cup Noodles</a>
                        </li>
                        <li>
                          <a href="/shop"> Vermicelli</a>
                        </li>
                        <li>
                          <a href="/shop"> Instant Pasta</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <a className="" href="/">
                      <span className="">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Biscuits &amp; Snacks</span>
                      <span className="caret">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </a>
                    <div className="category-submenu-item-inner">
                      <h6 className="category-submenu-item-inner-title">
                        Biscuits &amp; Snacks
                      </h6>
                      <ul className="category-submenu-item-inner-item">
                        <li>
                          <a href="/shop"> Salted Biscuits </a>
                        </li>
                        <li>
                          <a href="/shop"> Marie, Health, Digestive</a>
                        </li>
                        <li>
                          <a href="/shop"> Cream Biscuits &amp; Wafers </a>
                        </li>
                        <li>
                          <a href="/shop"> Glucose &amp; Milk biscuits</a>
                        </li>
                        <li>
                          <a href="/shop"> Cookies</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <a className="" href="/">
                      <span className="">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Grocery &amp; Staples</span>
                      <span className="">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </a>
                    <div className="category-submenu-item-inner">
                      <h6 className="category-submenu-item-inner-title">
                        Grocery &amp; Staples
                      </h6>
                      <ul className="category-submenu-item-inner-item">
                        <li>
                          <a href="/shop"> Lemon, Ginger &amp; Garlic </a>
                        </li>
                        <li>
                          <a href="/shop"> Indian &amp; Exotic Herbs</a>
                        </li>
                        <li>
                          <a href="/shop"> Orangic Vegetables</a>
                        </li>
                        <li>
                          <a href="/shop">Orangic Fruits </a>
                        </li>
                        <li>
                          <a href="/shop"> Orangic Dry Fruits</a>
                        </li>
                        <li>
                          <a href="/shop"> Orangic Dals &amp; pulses</a>
                        </li>
                        <li>
                          <a href="/shop"> Orangic Millet &amp; Flours</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </button>
            </div>
            <div className="header-bottom-menu">
              <ul className="menu-inner">
                <li className="menu-item">
                  <a href="#">Home</a>
                  <ul className="sum-menu">
                    <li className="sum-menu-item">
                      <a href="#">Home Grocery</a>
                    </li>
                    <li className="sum-menu-item">
                      <a href="#">Home Electronics</a>
                    </li>
                    <li className="sum-menu-item">
                      <a href="#">Home Fashion</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="#">Shop</a>
                  <ul className="sum-menu">
                    <li className="sum-menu-item">
                      <a href="#">Shop</a>
                    </li>
                    <li className="sum-menu-item">
                      <a href="#">Shop Details</a>
                    </li>
                    <li className="sum-menu-item">
                      <a href="#"> Shop Details Two</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <span className="pages-new">New</span>
                  <a href="#">Pages</a>
                  <ul className="sum-menu">
                    <li className="sum-menu-item">
                      <a href="#">Cart</a>
                    </li>
                    <li className="sum-menu-item">
                      <a href="#">Wishlist</a>
                    </li>
                    <li className="sum-menu-item">
                      <a href="#">Checkout</a>
                    </li>
                    <li className="sum-menu-item">
                      <a href="#">Become Seller</a>
                    </li>
                    <li className="sum-menu-item">
                      <a href="#">Account</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <span className="pages-new vendors-new">New</span>

                  <a href="#">Vendors</a>
                  <ul className="sum-menu">
                    <li className="sum-menu-item">
                      <a href="#">Vendors</a>
                    </li>
                    <li className="sum-menu-item">
                      <a href="#">Vendor Details</a>
                    </li>
                    <li className="sum-menu-item">
                      <a href="#">Vendors Two</a>
                    </li>
                    <li className="sum-menu-item">
                      <a href="#">Vendors Two Details</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="#">Blog</a>
                  <ul className="sum-menu">
                    <li className="sum-menu-item">
                      <a href="#">Blog</a>
                    </li>
                    <li className="sum-menu-item">
                      <a href="#">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="header-buttom-call">
              <a href="/tel:01234567890">
                <i className="ph ph-phone-call"></i> 01-234 567 890
              </a>
            </div>

            <div className="header-right">
              <div className="header-right-icon">
                <div className="header-right-icon-inner">
                  <button>
                    <span><i class="ph ph-magnifying-glass"></i></span>
                  </button>
                  <a href="">
                    <span><i class="ph ph-heart"></i></span>
                  </a>
                  <a href="">
                    <span><i class="ph ph-shopping-cart-simple"></i></span>
                  </a>
                </div>
              </div>
              <button className="header-right-menuicon">
                <i class="ph ph-list"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderButtom;
