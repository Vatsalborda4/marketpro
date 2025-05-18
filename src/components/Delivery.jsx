import react from "react";
import { Link } from "react-router-dom";


const Delivery = () => {
  return <>
  <div className="delivery-outer">
        <div className="container">
            <div className="delivery-inner">
                <img src="assets/images/delivery-bg.webp" alt="" className="delivery-bg" />
                <div className="delivery-item">
                    <div className="delivery-item-inerr">
                        <img src="assets/images/delivery-man.webp" alt="" />
                    </div>
                    <div className="delivery-text">
                        <h4>We Delivery on Next Day from 10:00 AM to 08:00 PM</h4>
                        <p>For Orders starts from $100</p>
                        <Link to="#">
                            Shop Now
                            <span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </Link>
                    </div>
                    <div className="delivery-img">
                        <img src="assets/images/special-snacks-img.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>;
};
export default Delivery;
