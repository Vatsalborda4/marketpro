import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
                <a href="#">
                  <img src="assets\images\logo.webp" alt="logo" />
                </a>
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
                    <a href="/tel:+0012345678">+00 123 456 789</a>
                    <span>or</span>
                    <a href="/tel:+0987654321">+00 987 654 321</a>
                  </div>
                </li>
                <li>
                  <div className="footer-icon">
                   <span> <i className="ph-fill ph-envelope"></i></span>
                  </div>
                  <div className="footer-li-text">
                    <a href="/mailto:support24@marketpro.com">
                      support24@marketpro.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <ui className="footer-item">
              <li className="footer-item-title"> Information</li>
              <li>
                <a href="#">Become a Vendor</a>
              </li>
              <li>
                <a href="#">Affiliate Program</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Our Suppliers</a>
              </li>
              <li>
                <a href="#">Extended Plan</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ui>
            <ui className="footer-item">
              <li className="footer-item-title"> Customer Support</li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Report Abuse</a>
              </li>
              <li>
                <a href="#">Submit and Dispute</a>
              </li>
              <li>
                <a href="#">Policies & Rules</a>
              </li>
              <li>
                <a href="#">Online Shopping</a>
              </li>
            </ui>
            <ui className="footer-item">
              <li className="footer-item-title"> My Account</li>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Order History</a>
              </li>
              <li>
                <a href="#">Shoping Cart</a>
              </li>
              <li>
                <a href="#">Compare</a>
              </li>
              <li>
                <a href="#">Help Ticket</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
            </ui>
            <ui className="footer-item">
              <li className="footer-item-title">Daily Groceries</li>
              <li>
                <a href="#">Dairy & Eggs</a>
              </li>
              <li>
                <a href="#">Meat & Seafood</a>
              </li>
              <li>
                <a href="#">Breakfast Food</a>
              </li>
              <li>
                <a href="#">Household Supplies</a>
              </li>
              <li>
                <a href="#">Bread & Bakery</a>
              </li>
              <li>
                <a href="#">Pantry Staples</a>
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
                  <a href="#">
                    <span><i className="ph-fill ph-facebook-logo"></i></span>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span><i className="ph-fill ph-twitter-logo"></i></span>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span><i className="ph-fill ph-instagram-logo"></i></span>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span ><i className="ph-fill ph-linkedin-logo"></i></span>
                  </a>
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
