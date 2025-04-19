import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { PiFacebookLogoFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const FooterMiddle = () => {
        return (
                <>
                <footer>
                        <img src="assets/images/body-bottom-bg.png" alt="body-bottom-bg" className="footer-bg" />
                        <div className="container">
                            <div className="footer-inner">
                                <div className="footer-info">
                                    <div className="footer-logo">
                                        <a href="/">
                                        <img src="assets\images\logo.png" alt="logo" />
                                        </a>
                                    </div>
                                    <p className="footer-text">
                                    We're Grocery Shop, an innovative team of food supliers.
                                    </p>
                                    <ul>
                                        <li><div className="footer-icon"><FaLocationDot /></div><div className="footer-li-text">789 Inner Lane, Biyes park, California, USA</div></li>
                                        <li>
                                            <div className="footer-icon"><PiPhoneCallFill /></div>
                                            <div className="footer-li-text">
                                                <a href="/tel:+0012345678">+00 123 456 789</a>
                                                <span>or</span>
                                                <a href="/tel:+0987654321">+00 987 654 321</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-icon">
                                            <MdEmail />
                                            </div>
                                            <div className="footer-li-text">
                                                <a href="/mailto:support24@marketpro.com">support24@marketpro.come</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <ui className="footer-item">
                                    <li className="footer-item-title"> Information</li>
                                    <li><a href="">Become a Vendor</a></li>
                                    <li><a href="">Affiliate Program</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                    <li><a href="">Our Suppliers</a></li>
                                    <li><a href="">Extended Plan</a></li>
                                    <li><a href="">Community</a></li>
                                </ui>
                                <ui className="footer-item">
                                    <li className="footer-item-title"> Customer Support</li>
                                    <li><a href="">Help Center</a></li>
                                    <li><a href="">Contact Us</a></li>
                                    <li><a href="">Report Abuse</a></li>
                                    <li><a href="">Submit and Dispute</a></li>
                                    <li><a href="">Policies & Rules</a></li>
                                    <li><a href="">Online Shopping</a></li>
                                </ui>
                                <ui className="footer-item">
                                    <li className="footer-item-title"> My Account</li>
                                    <li><a href="">My Account</a></li>
                                    <li><a href="">Order History</a></li>
                                    <li><a href="">Shoping Cart</a></li>
                                    <li><a href="">Compare</a></li>
                                    <li><a href="">Help Ticket</a></li>
                                    <li><a href="">Wishlist</a></li>
                                </ui>
                                <ui className="footer-item">
                                    <li className="footer-item-title">Daily Groceries</li>
                                    <li><a href="">Dairy & Eggs</a></li>
                                    <li><a href="">Meat & Seafood</a></li>
                                    <li><a href="">Breakfast Food</a></li>
                                    <li><a href="">Household Supplies</a></li>
                                    <li><a href="">Bread & Bakery</a></li>
                                    <li><a href="">Pantry Staples</a></li>
                                </ui>
                                <div className="footer-social">
                                    <li className="footer-item-title">Shop on The Go</li>
                                    <li><span>Marketpro App is available. Get it now</span></li>
                                    <li className="img-flex">
                                        <div><img src="assets\images\store-img1.png" alt="store-img1" /></div>
                                        <div><img src="assets\images\store-img2.png" alt="store-img2" /></div>
                                    </li>
                                    <li className="footer-icon">
                                        <div><a href="#"><PiFacebookLogoFill /></a></div>
                                        <div><a href="#"><FaTwitter /></a></div>
                                        <div><a href="#"><BiLogoInstagramAlt /></a></div>
                                        <div><a href="#"><FaLinkedin /></a></div>
                                    </li>
                                </div>
                            </div>
                        </div>
                </footer>
                
                </>
            )
        }

export default FooterMiddle;