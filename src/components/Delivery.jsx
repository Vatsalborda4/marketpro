import react from "react";

const Delivery = () => {
  return <>
  <div class="delivery-outer">
        <div class="container">
            <div class="delivery-inner">
                <img src="assets/images/delivery-bg.webp" alt="" class="delivery-bg" />
                <div class="delivery-item">
                    <div class="delivery-item-inerr">
                        <img src="assets/images/delivery-man.webp" alt="" />
                    </div>
                    <div class="delivery-text">
                        <h4>We Delivery on Next Day from 10:00 AM to 08:00 PM</h4>
                        <p>For Orders starts from $100</p>
                        <a href="">
                            Shop Now
                            <span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </span>
                        </a>
                    </div>
                    <div class="delivery-img">
                        <img src="assets/images/special-snacks-img.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>;
};
export default Delivery;
