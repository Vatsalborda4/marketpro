import React, { useState } from "react";


const HeaderButtom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleSidebar2 = () => setIsOpen2(!isOpen2);

  return (
    <>
      <div className="header-buttom">
        <div className="container">
          <div className="header-bottom-inner">
            <div className="header-bottom-category">
              <button type="button" className="category-button toggle-btn" onClick={toggleSidebar2}>
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
                    <a className="" href="#">
                      <span className="">
                        <i className="ph ph-carrot"></i>
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
                          <a href="#">Potato &amp; Tomato 000</a>
                        </li>
                        <li>
                          <a href="#">Cucumber &amp; Capsicum</a>
                        </li>
                        <li>
                          <a href="#">Leafy Vegetables</a>
                        </li>
                        <li>
                          <a href="#">Root Vegetables</a>
                        </li>
                        <li>
                          <a href="#">Beans &amp; Okra</a>
                        </li>
                        <li>
                          <a href="#">Cabbage &amp; Cauliflower</a>
                        </li>
                        <li>
                          <a href="#">Gourd &amp; Drumstick</a>
                        </li>
                        <li>
                          <a href="#">Specialty</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <a className="" href="#">
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
                          <a href="#">Soda &amp; Cocktail Mix </a>
                        </li>
                        <li>
                          <a href="#"> Sports &amp; Energy Drinks</a>
                        </li>
                        <li>
                          <a href="#"> Non Alcoholic Drinks</a>
                        </li>
                        <li>
                          <a href="#"> Packaged Water </a>
                        </li>
                        <li>
                          <a href="#"> Spring Water</a>
                        </li>
                        <li>
                          <a href="#"> Flavoured Water </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <a className="" href="#">
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
                          <a href="#"> Fresh Meat </a>
                        </li>
                        <li>
                          <a href="#"> Frozen Meat</a>
                        </li>
                        <li>
                          <a href="#"> Marinated Meat</a>
                        </li>
                        <li>
                          <a href="#"> Fresh &amp; Frozen Meat</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <a className="" href="#">
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
                          <a href="#"> Oats &amp; Porridge</a>
                        </li>
                        <li>
                          <a href="#"> Kids Cereal</a>
                        </li>
                        <li>
                          <a href="#"> Muesli</a>
                        </li>
                        <li>
                          <a href="#"> Flakes</a>
                        </li>
                        <li>
                          <a href="#"> Granola &amp; Cereal Bars</a>
                        </li>
                        <li>
                          <a href="#"> Instant Noodles</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <a className="" href="#">
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
                          <a href="#"> Instant Noodles </a>
                        </li>
                        <li>
                          <a href="#"> Hakka Noodles</a>
                        </li>
                        <li>
                          <a href="#"> Cup Noodles</a>
                        </li>
                        <li>
                          <a href="#"> Vermicelli</a>
                        </li>
                        <li>
                          <a href="#"> Instant Pasta</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <a className="" href="#">
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
                          <a href="#"> Salted Biscuits </a>
                        </li>
                        <li>
                          <a href="#"> Marie, Health, Digestive</a>
                        </li>
                        <li>
                          <a href="#"> Cream Biscuits &amp; Wafers </a>
                        </li>
                        <li>
                          <a href="#"> Glucose &amp; Milk biscuits</a>
                        </li>
                        <li>
                          <a href="#"> Cookies</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <a className="" href="#">
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
                          <a href="#"> Lemon, Ginger &amp; Garlic </a>
                        </li>
                        <li>
                          <a href="#"> Indian &amp; Exotic Herbs</a>
                        </li>
                        <li>
                          <a href="#"> Orangic Vegetables</a>
                        </li>
                        <li>
                          <a href="#">Orangic Fruits </a>
                        </li>
                        <li>
                          <a href="#"> Orangic Dry Fruits</a>
                        </li>
                        <li>
                          <a href="#"> Orangic Dals &amp; pulses</a>
                        </li>
                        <li>
                          <a href="#"> Orangic Millet &amp; Flours</a>
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
                  <span className="pages-new" style={{lineHeight:"21px"}}>New</span>
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
                    <span>
                      <i className="ph ph-magnifying-glass"></i>
                    </span>
                  </button>
                  <a href="#">
                    <span>
                      <i className="ph ph-heart"></i>
                    </span>
                  </a>
                  <a href="#">
                    <span>
                      <i className="ph ph-shopping-cart-simple"></i>
                    </span>
                  </a>
                </div>
              </div>
              <button className="header-right-menuicon toggle-btn" onClick={toggleSidebar}>
                <i className="ph ph-list"></i>   
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <span className="close-btn" onClick={toggleSidebar}>✕</span>
        <h2 className="logo"><img src="assets/images/logo.webp" alt="logo" /></h2>
        <ul className="sidebar-menu">
          <li className="menu-item"><a href="#" className="text">Home</a></li>
          <li className="menu-item"><a href="#" className="text">Shop</a></li>
          <li className="menu-item"><a href="#" className="text">pages</a></li>
          <li className="menu-item"><a href="#" className="text">Vendors</a></li>
          <li className="menu-item"><a href="#" className="text">Blog</a></li>
          <li className="menu-item"><a href="#" className="text">Contact us</a></li>
        </ul>
      </div>
      <div className={`sidebar2 ${isOpen2 ? 'open' : ''}`}>
        <span className="close-btn" onClick={toggleSidebar2}>✕</span>
        <h2 className="logo"><img src="assets/images/logo.webp" alt="logo" /></h2>
        <ul className="sidebar-menu">
          <li className="menu-item"><a href="#" className="text"><span><i className="ph ph-carrot"></i></span>vegetables & Fruit</a></li>
          <li className="menu-item"><a href="#" className="text"><span><i className="ph ph-brandy"></i></span>Beverages</a></li>
          <li className="menu-item"><a href="#" className="text"><span><i className="ph ph-brandy"></i></span>meats & Seafood</a></li>
          <li className="menu-item"><a href="#" className="text"><span><i className="ph ph-brandy"></i></span>breackfast & dairy</a></li>
          <li className="menu-item"><a href="#" className="text"><span><i className="ph ph-brandy"></i></span>frozen foods</a></li>
          <li className="menu-item"><a href="#" className="text"><span><i className="ph ph-brandy"></i></span>biscuits & snacks</a></li>
          <li className="menu-item"><a href="#" className="text"><span><i className="ph ph-brandy"></i></span>grocery & staples</a></li>
        </ul>
      </div>
  
    </>
  );
};

export default HeaderButtom;
