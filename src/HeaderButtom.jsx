import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderButtom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleSidebar2 = () => setIsOpen2(!isOpen2);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`header-buttom ${isFixed ? "fixed" : ""}`}>
        <div className="container">
          <div className="header-bottom-inner">
            <div className="header-bottom-category">
              <button
                type="button"
                className="category-button toggle-btn"
                onClick={toggleSidebar2}
              >
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
                    <Link className="" to="/">
                      <span className="">
                        <i className="ph ph-carrot"></i>
                      </span>
                      <span>Vegetables &amp; Fruit</span>
                      <span className="caret">
                        <i className="ph ph-caret-right"></i>
                      </span>
                   </Link>
                    <div className="category-submenu-item-inner ">
                      <h6 className="category-submenu-item-inner-title">
                        Vegetables &amp; Fruit
                      </h6>
                      <ul className="category-submenu-item-inner-item">
                        <li>
                          <Link to="/">Potato &amp; Tomato 000</Link>
                        </li>
                        <li>
                          <Link to="/">Cucumber &amp; Capsicum</Link>
                        </li>
                        <li>
                          <Link to="/">Leafy Vegetables</Link>
                        </li>
                        <li>
                          <Link to="/">Root Vegetables</Link>
                        </li>
                        <li>
                          <Link to="/">Beans &amp; Okra</Link>
                        </li>
                        <li>
                          <Link to="/">Cabbage &amp; Cauliflower</Link>
                        </li>
                        <li>
                          <Link to="/">Gourd &amp; Drumstick</Link>
                        </li>
                        <li>
                          <Link to="/">Specialty</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <Link className="" to="/">
                      <span className="">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Beverages</span>
                      <span className="caret">
                        <i className="ph ph-caret-right"></i>
                      </span>
                   </Link>
                    <div className="category-submenu-item-inner ">
                      <h6 className="category-submenu-item-inner-title">
                        Beverages
                      </h6>
                      <ul className="category-submenu-item-inner-item">
                        <li>
                          <Link to="/">Soda &amp; Cocktail Mix</Link>
                        </li>
                        <li>
                          <Link to="/"> Sports &amp; Energy Drinks</Link>
                        </li>
                        <li>
                          <Link to="/"> Non Alcoholic Drinks</Link>
                        </li>
                        <li>
                          <Link to="/"> Packaged Water</Link>
                        </li>
                        <li>
                          <Link to="/"> Spring Water</Link>
                        </li>
                        <li>
                          <Link to="/"> Flavoured Water</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <Link className="" to="/">
                      <span className="">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Meats &amp; Seafood</span>
                      <span className="caret">
                        <i className="ph ph-caret-right"></i>
                      </span>
                   </Link>
                    <div className="category-submenu-item-inner">
                      <h6 className="category-submenu-item-inner-title">
                        Meats &amp; Seafood
                      </h6>
                      <ul className="category-submenu-item-inner-item">
                        <li>
                          <Link to="/"> Fresh Meat</Link>
                        </li>
                        <li>
                          <Link to="/"> Frozen Meat</Link>
                        </li>
                        <li>
                          <Link to="/"> Marinated Meat</Link>
                        </li>
                        <li>
                          <Link to="/"> Fresh &amp; Frozen Meat</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <Link className="" to="/">
                      <span className="">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Breakfast &amp; Dairy</span>
                      <span className="caret">
                        <i className="ph ph-caret-right"></i>
                      </span>
                   </Link>
                    <div className="category-submenu-item-inner">
                      <h6 className="category-submenu-item-inner-title">
                        Breakfast &amp; Dairy
                      </h6>
                      <ul className="category-submenu-item-inner-item">
                        <li>
                          <Link to="/"> Oats &amp; Porridge</Link>
                        </li>
                        <li>
                          <Link to="/"> Kids Cereal</Link>
                        </li>
                        <li>
                          <Link to="/"> Muesli</Link>
                        </li>
                        <li>
                          <Link to="/"> Flakes</Link>
                        </li>
                        <li>
                          <Link to="/"> Granola &amp; Cereal Bars</Link>
                        </li>
                        <li>
                          <Link to="/"> Instant Noodles</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <Link className="" to="/">
                      <span className="">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Frozen Foods</span>
                      <span className="caret">
                        <i className="ph ph-caret-right"></i>
                      </span>
                   </Link>
                    <div className="category-submenu-item-inner">
                      <h6 className="category-submenu-item-inner-title">
                        Frozen Foods
                      </h6>
                      <ul className="category-submenu-item-inner-item">
                        <li>
                          <Link to="/"> Instant Noodles</Link>
                        </li>
                        <li>
                          <Link to="/"> Hakka Noodles</Link>
                        </li>
                        <li>
                          <Link to="/"> Cup Noodles</Link>
                        </li>
                        <li>
                          <Link to="/"> Vermicelli</Link>
                        </li>
                        <li>
                          <Link to="/"> Instant Pasta</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <Link className="" to="/">
                      <span className="">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Biscuits &amp; Snacks</span>
                      <span className="caret">
                        <i className="ph ph-caret-right"></i>
                      </span>
                   </Link>
                    <div className="category-submenu-item-inner">
                      <h6 className="category-submenu-item-inner-title">
                        Biscuits &amp; Snacks
                      </h6>
                      <ul className="category-submenu-item-inner-item">
                        <li>
                          <Link to="/"> Salted Biscuits</Link>
                        </li>
                        <li>
                          <Link to="/"> Marie, Health, Digestive</Link>
                        </li>
                        <li>
                          <Link to="/"> Cream Biscuits &amp; Wafers</Link>
                        </li>
                        <li>
                          <Link to="/"> Glucose &amp; Milk biscuits</Link>
                        </li>
                        <li>
                          <Link to="/"> Cookies</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="category-submenu-item">
                    <Link className="" to="/">
                      <span className="">
                        <i className="ph ph-brandy"></i>
                      </span>
                      <span>Grocery &amp; Staples</span>
                      <span className="">
                        <i className="ph ph-caret-right"></i>
                      </span>
                   </Link>
                    <div className="category-submenu-item-inner">
                      <h6 className="category-submenu-item-inner-title">
                        Grocery &amp; Staples
                      </h6>
                      <ul className="category-submenu-item-inner-item">
                        <li>
                          <Link to="/"> Lemon, Ginger &amp; Garlic</Link>
                        </li>
                        <li>
                          <Link to="/"> Indian &amp; Exotic Herbs</Link>
                        </li>
                        <li>
                          <Link to="/"> Orangic Vegetables</Link>
                        </li>
                        <li>
                          <Link to="/">Orangic Fruits</Link>
                        </li>
                        <li>
                          <Link to="/"> Orangic Dry Fruits</Link>
                        </li>
                        <li>
                          <Link to="/"> Orangic Dals &amp; pulses</Link>
                        </li>
                        <li>
                          <Link to="/"> Orangic Millet &amp; Flours</Link>
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
                  <Link to="/">Home</Link>
                  <ul className="sum-menu">
                    <li className="sum-menu-item">
                      <Link to="/">Home Grocery</Link>
                    </li>
                    <li className="sum-menu-item">
                      <Link to="/">Home Electronics</Link>
                    </li>
                    <li className="sum-menu-item">
                      <Link to="/">Home Fashion</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link to="/shop">Shop</Link>
                  <ul className="sum-menu">
                    <li className="sum-menu-item">
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li className="sum-menu-item">
                      <Link to="/">Shop Details</Link>
                    </li>
                    <li className="sum-menu-item">
                      <Link to="/"> Shop Details Two</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <span className="pages-new" style={{lineHeight:"21px"}}>New</span>
                  <Link to="/">Pages</Link>
                  <ul className="sum-menu">
                    <li className="sum-menu-item">
                      <Link to="/">Cart</Link>
                    </li>
                    <li className="sum-menu-item">
                      <Link to="/">Wishlist</Link>
                    </li>
                    <li className="sum-menu-item">
                      <Link to="/">Checkout</Link>
                    </li>
                    <li className="sum-menu-item">
                      <Link to="/">Become Seller</Link>
                    </li>
                    <li className="sum-menu-item">
                      <Link to="/">Account</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <span className="pages-new vendors-new">New</span>

                  <Link to="/vendor">Vendors</Link>
                  <ul className="sum-menu">
                    <li className="sum-menu-item">
                      <Link to="/vendor">Vendors</Link>
                    </li>
                    <li className="sum-menu-item">
                      <Link to="/">Vendor Details</Link>
                    </li>
                    <li className="sum-menu-item">
                      <Link to="/">Vendors Two</Link>
                    </li>
                    <li className="sum-menu-item">
                      <Link to="/">Vendors Two Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link to="/">Blog</Link>
                  <ul className="sum-menu">
                    <li className="sum-menu-item">
                      <Link to="/">Blog</Link>
                    </li>
                    <li className="sum-menu-item">
                      <Link to="/">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link to="/Contact">Contact Us</Link>
                  
                </li>
                <li className="menu-item">
                  <Link to="/login">Login</Link>
                  
                </li>
              </ul>
            </div>
            <div className="header-buttom-call">
              <Link to="/tel:01234567890">
                <i className="ph ph-phone-call"></i> 01-234 567 890
             </Link>
            </div>

            <div className="header-right">
              <div className="header-right-icon">
                <div className="header-right-icon-inner">
                  <button>
                    <span>
                      <i className="ph ph-magnifying-glass"></i>
                    </span>
                  </button>
                  <Link to="/">
                    <span>
                      <i className="ph ph-heart"></i>
                    </span>
                 </Link>
                  <Link to="/">
                    <span>
                      <i className="ph ph-shopping-cart-simple"></i>
                    </span>
                 </Link>
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
          <li className="menu-item"><Link to="/" className="text">Home</Link></li>
          <li className="menu-item"><Link to="/" className="text">Shop</Link></li>
          <li className="menu-item"><Link to="/" className="text">pages</Link></li>
          <li className="menu-item"><Link to="/" className="text">Vendors</Link></li>
          <li className="menu-item"><Link to="/" className="text">Blog</Link></li>
          <li className="menu-item"><Link to="/" className="text">Contact us</Link></li>
          <li className="menu-item"><Link to="/" className="text">Login</Link></li>
        </ul>
      </div>
      <div className={`sidebar2 ${isOpen2 ? 'open' : ''}`}>
        <span className="close-btn" onClick={toggleSidebar2}>✕</span>
        <h2 className="logo"><img src="assets/images/logo.webp" alt="logo" /></h2>
        <ul className="sidebar-menu">
          <li className="menu-item"><Link to="/" className="text"><span><i className="ph ph-carrot"></i></span>vegetables & Fruit</Link></li>
          <li className="menu-item"><Link to="/" className="text"><span><i className="ph ph-brandy"></i></span>Beverages</Link></li>
          <li className="menu-item"><Link to="/" className="text"><span><i className="ph ph-brandy"></i></span>meats & Seafood</Link></li>
          <li className="menu-item"><Link to="/" className="text"><span><i className="ph ph-brandy"></i></span>breackfast & dairy</Link></li>
          <li className="menu-item"><Link to="/" className="text"><span><i className="ph ph-brandy"></i></span>frozen foods</Link></li>
          <li className="menu-item"><Link to="/" className="text"><span><i className="ph ph-brandy"></i></span>biscuits & snacks</Link></li>
          <li className="menu-item"><Link to="/" className="text"><span><i className="ph ph-brandy"></i></span>grocery & staples</Link></li>
        </ul>
      </div>
    </>
  );
};

export default HeaderButtom;
