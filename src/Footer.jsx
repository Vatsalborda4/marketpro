import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* start footer middle  */}
      <footer>
        <img
          src="assets/images/body-bottom-bg.webp"
          alt="body-bottom-bg"
          className="footer-bg"
        />
        <div className="container">
          <div className="footer-inner">
            <div className="footer-info">
              <div className="footer-logo">
                <Link to="#">
                  <img src="assets\images\logo.webp" alt="logo" />
                </Link>
              </div>
              <p className="footer-text">
                We're Grocery Shop, an innovative team of food supliers.
              </p>
              <ul>
                <li>
                  <div className="footer-icon">
                    <span><i className="ph-fill ph-map-pin"></i></span>
                  </div>
                  <div className="footer-li-text">
                    789 Inner Lane, Biyes park, California, USA
                  </div>
                </li>
                <li>
                  <div className="footer-icon">
                    <span><i className="ph-fill ph-phone-call"></i></span>
                  </div>
                  <div className="footer-li-text">
                    <Link to="/tel:+0012345678">+00 123 456 789</Link>
                    <span>or</span>
                    <Link to="/tel:+0987654321">+00 987 654 321</Link>
                  </div>
                </li>
                <li>
                  <div className="footer-icon">
                   <span> <i className="ph-fill ph-envelope"></i></span>
                  </div>
                  <div className="footer-li-text">
                    <Link to="/mailto:support24@marketpro.com">
                      support24@marketpro.com
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <ui className="footer-item">
              <li className="footer-item-title"> Information</li>
              <li>
                <Link to="#">Become a Vendor</Link>
              </li>
              <li>
                <Link to="#">Affiliate Program</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Our Suppliers</Link>
              </li>
              <li>
                <Link to="#">Extended Plan</Link>
              </li>
              <li>
                <Link to="#">Community</Link>
              </li>
            </ui>
            <ui className="footer-item">
              <li className="footer-item-title"> Customer Support</li>
              <li>
                <Link to="#">Help Center</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Report Abuse</Link>
              </li>
              <li>
                <Link to="#">Submit and Dispute</Link>
              </li>
              <li>
                <Link to="#">Policies & Rules</Link>
              </li>
              <li>
                <Link to="#">Online Shopping</Link>
              </li>
            </ui>
            <ui className="footer-item">
              <li className="footer-item-title"> My Account</li>
              <li>
                <Link to="#">My Account</Link>
              </li>
              <li>
                <Link to="#">Order History</Link>
              </li>
              <li>
                <Link to="#">Shoping Cart</Link>
              </li>
              <li>
                <Link to="#">Compare</Link>
              </li>
              <li>
                <Link to="#">Help Ticket</Link>
              </li>
              <li>
                <Link to="#">Wishlist</Link>
              </li>
            </ui>
            <ui className="footer-item">
              <li className="footer-item-title">Daily Groceries</li>
              <li>
                <Link to="#">Dairy & Eggs</Link>
              </li>
              <li>
                <Link to="#">Meat & Seafood</Link>
              </li>
              <li>
                <Link to="#">Breakfast Food</Link>
              </li>
              <li>
                <Link to="#">Household Supplies</Link>
              </li>
              <li>
                <Link to="#">Bread & Bakery</Link>
              </li>
              <li>
                <Link to="#">Pantry Staples</Link>
              </li>
            </ui>
            <div className="footer-social">
              <li className="footer-item-title">Shop on The Go</li>
              <li>
                <span>Marketpro App is available. Get it now</span>
              </li>
              <li className="img-flex">
                <div>
                  <img src="assets\images\store-img1.webp" alt="store-img1" />
                </div>
                <div>
                  <img src="assets\images\store-img2.webp" alt="store-img2" />
                </div>
              </li>
              <li className="footer-icon">
                <div>
                  <Link to="#">
                    <span><i className="ph-fill ph-facebook-logo"></i></span>
                  </Link>
                </div>
                <div>
                  <Link to="#">
                    <span><i className="ph-fill ph-twitter-logo"></i></span>
                  </Link>
                </div>
                <div>
                  <Link to="#">
                    <span><i className="ph-fill ph-instagram-logo"></i></span>
                  </Link>
                </div>
                <div>
                  <Link to="#">
                    <span ><i className="ph-fill ph-linkedin-logo"></i></span>
                  </Link>
                </div>
              </li>
            </div>
          </div>
        </div>
      </footer>
      {/* end footer middle  */}

      {/* start footer bottom  */}

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>Marketpro eCommerce © 2024. All Rights Reserved</p>
            <div className="footer-bottom-end">
              <p>We Are Acepting</p>
              <img
              className="payment-method"
                src="assets\images\payment-method.webp"
                alt="payment-method"
              />
            </div>
          </div>
        </div>
      </div>
      {/* end footer bottom  */}
    </>
  );
};

export default Footer;
