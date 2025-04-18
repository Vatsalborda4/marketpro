import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
        return (
                <>
                <footer>
                        <img src="" alt="" className="footer-bg" />
                        <div className="container">
                            <div className="footer-inner">
                                <div className="footer-info">
                                    <div className="footer-logo">
                                        <a href="/">
                                        <img src="" alt="" />
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
                                                <a href="/tel:+0012345678">+00 123 456 789</a> <span>or</span>
                                                <a href="/tel:+0987654321">+00 987 654 321</a>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="footer-icon">
                                            <MdEmail />
                                            </span>
                                            <div className="footer-li-text">
                                                <a href="/mailto:support24@marketpro.com">support24@marketpro@gmail.come</a>
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
                                <ui className="footer-item"></ui>
                                <ui className="footer-item"></ui>
                                <ui className="footer-item"></ui>
                                <div className="footer-social"></div>
                            </div>
                        </div>
                </footer>
                
                </>
            )
        }

export default Footer;