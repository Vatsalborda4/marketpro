import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className="contact ">
            <div className="container">
                <div className="contact-row ">
                    <div className="contact-left">
                        <div className="contact-box">
                            <form action="#">
                                <h6>Make Custom Request</h6>
                                <div className="contact-box-inner">
                                    <div className="contact-box-inner-item">
                                        <label
                                            htmlFor="name"
                                            className="contact-box-label"
                                        >
                                            Full Name{" "}
                                            <span className="contact-box-label-icon">*</span>{" "}
                                        </label>
                                        <input
                                            type="text"
                                            className="contact-box-input"
                                            id="name"
                                            placeholder="Full name"
                                            onFocus={(e) => e.target.placeholder = ""}
                                            onBlur={(e) => e.target.placeholder = "Full name"}
                                        />
                                    </div>
                                    <div className="contact-box-inner-item">
                                        <label
                                            htmlFor="email"
                                            className="contact-box-label"
                                        >
                                            Email Address{" "}
                                            <span className="contact-box-label-icon">*</span>{" "}
                                        </label>
                                        <input
                                            type="email"
                                            className="contact-box-input"
                                            id="email"
                                            placeholder="Email address"
                                            onFocus={(e) => e.target.placeholder = ""}
                                            onBlur={(e) => e.target.placeholder = "Email address"}
                                        />
                                    </div>
                                    <div className="contact-box-inner-item">
                                        <label
                                            htmlFor="phone"
                                            className="contact-box-label"
                                        >
                                            Phone Number
                                            <span className="contact-box-label-icon">*</span>{" "}
                                        </label>
                                        <input
                                            type="number"
                                            className="contact-box-input"
                                            id="phone"
                                            placeholder="Phone Number*"
                                            onFocus={(e) => e.target.placeholder = ""}
                                            onBlur={(e) => e.target.placeholder = "Phone Number*"}
                                        />
                                    </div>
                                    <div className="contact-box-inner-item">
                                        <label
                                            htmlFor="subject"
                                            className="contact-box-label"
                                        >
                                            Subject
                                            <span className="contact-box-label-icon">
                                                *
                                            </span>{" "}
                                        </label>
                                        <input
                                            type="text"
                                            className="contact-box-input"
                                            id="subject"
                                            placeholder="Subject"
                                            onFocus={(e) => e.target.placeholder = ""}
                                            onBlur={(e) => e.target.placeholder = "Subject"}
                                        />
                                    </div>
                                    <div className="contact-box-inner-item contact-box-inner-item-l">
                                        <label
                                            htmlFor="message"
                                            className="contact-box-label"
                                        >
                                            Message
                                            <span className="contact-box-label-icon">
                                                *
                                            </span>{" "}
                                        </label>
                                        <textarea
                                            className="contact-box-input"
                                            id="message"
                                            placeholder="Type your message"
                                            onFocus={(e) => e.target.placeholder = ""}
                                            onBlur={(e) => e.target.placeholder = "Type your message"}
                                            style={{height:"140px"}}
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="contact-box-inner-item contact-box-inner-item-l">
                                        <button
                                            type="submit"
                                            className="contact-box-btn"
                                        >
                                            Get a Quote
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="contact-right">
                        <div className="contact-box">
                            <h6>Get In Touch</h6>
                            <div className="contact-box-r-inner">
                                <span className="contact-box-r-inner-icon">
                                    <i className="ph-fill ph-phone-call" />
                                </span>
                                <Link
                                    to="/tel:+00123456789"
                                    className="contact-box-r-inner-link"
                                >
                                    +00 123 456 789
                                </Link>
                            </div>
                            <div className="contact-box-r-inner">
                                <span className="contact-box-r-inner-icon">
                                    <i className="ph-fill ph-envelope" />
                                </span>
                                <Link
                                    to="/mailto:support24@marketpro.com"
                                    className="contact-box-r-inner-link"
                                >
                                    support24@marketpro.com
                                </Link>
                            </div>
                            <div className="contact-box-r-inner">
                                <span className="contact-box-r-inner-icon">
                                    <i className="ph-fill ph-map-pin" />
                                </span>
                                <span className="contact-box-r-inner-link">
                                    789 Inner Lane, California, USA
                                </span>
                            </div>
                        </div>
                        <div className="contact-bottom">
                            <Link
                                to="#"
                                className="contact-bottom-link"
                            >
                                <span className="contact-bottom-link-s1">Get Support On Call</span>
                                <span className="contact-bottom-link-icon">
                                    <i className="ph ph-headset" />
                                </span>
                            </Link>
                            <Link
                                to="#"
                                className="contact-bottom-link"
                            >
                                <span className="contact-bottom-link-s1">Get Direction</span>
                                <span className="contact-bottom-link-icon">
                                    <i className="ph ph-map-pin" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact