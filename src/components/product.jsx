import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    sale: "",
    img: "assets/images/product-img7.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 2,
    sale: "Sale 50%",
    img: "assets/images/product-img8.webp",
    title: "Marcel's Modern Pantry Almond Unsweetened",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 3,
    sale: "Sale 50%",
    img: "assets/images/product-img9.webp",
    title: "O Organics Milk, Whole, Vitamin D",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 4,
    sale: "Best Sale",
    img: "assets/images/product-img10.webp",
    title: "Whole Grains and Seeds Organic Bread",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
];

const getSaleStyle = (sale) => {
  if (sale === "Sale 50%") return { backgroundColor: "#dc2626" };
  if (sale.toLowerCase() === "new") return { backgroundColor: "#ff9f29" };
  if (sale.toLowerCase() === "") return { display: "none" };
  if (sale === "Best Sale") return { backgroundColor: "#2563eb" };
};
const Product = () => {
  useEffect(() => {
    const interval = setInterval(() => {}, 1000);
    return () => clearInterval(interval);
  }, []);

  const productImages = [
    "assets/images/product-details-thumb1.png",
    "assets/images/product-details-thumb2.png",
    "assets/images/product-details-thumb3.png",
    "assets/images/product-details-thumb2.png",
  ];

  // Increment & decrement
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () =>
    setQuantity(quantity > 1 ? quantity - 1 : quantity);
  const [mainImage, setMainImage] = useState(productImages[0]);

  const settingsThumbs = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  return (
    <>
      <section className="product-section">
        <div className="container">
          <div className="product-wrapper">
            <div className="product-left">
              <div className="product-item">
                <div className="product-item-inner">
                  <div className="product-details-left">
                    <div className="product-image">
                      <div className="image-container">
                        <div className="image-inner">
                          <img src={mainImage} alt="Main Product" />
                        </div>
                      </div>
                    </div>
                    <div className="product-thumbnails">
                      <div className="thumbnails-container">
                        {/* <Slider {...settingsThumbs}> */}
                        {productImages.map((image, index) => (
                          <div
                            className="thumbnail-item"
                            key={index}
                            onClick={() => setMainImage(image)}
                          >
                            <img
                              className="thumbnail-image"
                              src={image}
                              alt={`Thumbnail ${index}`}
                            />
                          </div>
                        ))}
                        {/* </Slider> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-content-inner">
                  <div className="product-content">
                    <h5 className="content-title">
                      Lay's Potato Chips Onion Flavored
                    </h5>
                    <div className="rating-section">
                      <div className="rating-stars">
                        <span className="star-icon">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="star-icon">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="star-icon">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="star-icon">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="star-icon">
                          <i className="ph-fill ph-star" />
                        </span>
                      </div>
                      <span className="rating-text">4.7 Star Rating</span>
                      <span className="review-count">(21,671)</span>
                      <span className="sku-divider">|</span>
                      <span className="sku-info">
                        <span className="sku-label">SKU:</span>EB4DRP
                      </span>
                      <span className="content-divider" />
                    </div>
                    <p className="product-description">
                      Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                      luctus malesuada tincidunt. Class aptent taciti sociosqu
                      ad litora torquent
                    </p>
                    <div className="price-section">
                      <div className="price-info">
                        <h4 className="current-price">$25.00</h4>
                        <span className="original-price">$38.00</span>
                      </div>
                      <Link to="#" className="whatsapp-button">
                        Order on What'sApp
                      </Link>
                    </div>
                    <span className="offer-divider" />
                    <div className="offer-box">
                      <div className="offer-text">
                        <span className="offer-label">Special Offer:</span>
                      </div>
                      <div className="countdown-timer" id="countdown11">
                        <ul className="countdown-list">
                          <li className="countdown-item">
                            222 <span className="countdown-days" />
                          </li>
                          <li className="countdown-item">
                            7<span className="countdown-hours" />
                          </li>
                          <li className="countdown-item">
                            25
                            <span className="countdown-minutes" />
                          </li>
                          <li className="countdown-item">
                            20
                            <span className="countdown-seconds" />
                          </li>
                        </ul>
                      </div>
                      <span className="offer-end-text">
                        Remains until the end of the offer
                      </span>
                    </div>
                    <div className="stock-section">
                      <div className="stock-info">
                        <span className="stock-icon">
                          <i className="ph-fill ph-lightning" />
                        </span>
                        <h6 className="stock-text">
                          Products are almost sold out
                        </h6>
                      </div>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow={32}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="progress-fill"
                          style={{ width: "32%" }}
                        />
                      </div>
                      <span className="stock-availability">
                        Available only: 45
                      </span>
                    </div>
                    <span className="quantity-label">Quantity:</span>
                    <div className="quantity-section">
                      <div className="quantity-controls">
                        <div className="quantity-box">
                          <button
                            onClick={decrementQuantity}
                            type="button"
                            className="quantity-decrement"
                          >
                            <i className="ph ph-minus" />
                          </button>
                          <input
                            type="number"
                            className="quantity-input"
                            value={quantity}
                            readOnly
                          />
                          <button
                            onClick={incrementQuantity}
                            type="button"
                            className="quantity-decrement"
                          >
                            <i className="ph ph-plus" />
                          </button>
                        </div>
                        <Link to="#" className="cart-button">
                          <i className="ph ph-shopping-cart" /> Add To Cart
                        </Link>
                      </div>
                      <div className="action-buttons">
                        <Link to="#" className="wishlist-button">
                          <i className="ph ph-heart" />
                        </Link>
                        <Link to="#" className="wishlist-button">
                          <i className="ph ph-shuffle" />
                        </Link>
                        <Link
                          to="#"
                          className="wishlist-button
                                                "
                        >
                          <i className="ph ph-share-network" />
                        </Link>
                      </div>
                    </div>
                    <span className="coupon-divider" />
                    <div className="coupon-box">
                      <div className="coupon-info">
                        <button type="button" className="coupon-toggle">
                          <i className="ph ph-plus" />
                        </button>
                        <span className="coupon-text">
                          Mfr. coupon. $3.00 off 5
                        </span>
                      </div>
                      <Link to="/cart" className="coupon-link">
                        View Details
                      </Link>
                    </div>
                    <ul className="offer-list">
                      <li className="offer-item">Buy 1, Get 1 FREE</li>
                      <li className="offer-item">Buy 1, Get 1 FREE</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-right">
              <div className="side">
                <div className="side-header">
                  <div className="store-info">
                    <div className="store-details">
                      <span className="store-icon">
                        <i className="ph ph-storefront" />
                      </span>
                      <span className="store-name">by Marketpro</span>
                    </div>
                    <Link to="/shop" className="store-button">
                      View Store
                    </Link>
                  </div>
                </div>
                <div className="side-item">
                  <span className="delivery-icon">
                    <i className="ph-fill ph-truck" />
                  </span>
                  <div className="delivery-info">
                    <h6 className="delivery-title">Fast Delivery</h6>
                    <p className="delivery-text">
                      Lightning-fast shipping, guaranteed.
                    </p>
                  </div>
                </div>
                <div className="side-item">
                  <span className="delivery-icon">
                    <i className="ph-fill ph-arrow-u-up-left" />
                  </span>
                  <div className="delivery-info">
                    <h6 className="delivery-title">Free 90-day returns</h6>
                    <p className="delivery-text">
                      Shop risk-free with easy returns.
                    </p>
                  </div>
                </div>
                <div className="side-item">
                  <span className="delivery-icon">
                    <i className="ph-fill ph-check-circle" />
                  </span>
                  <div className="">
                    <h6 className="delivery-title">
                      Pickup available at Shop location
                    </h6>
                    <p className="delivery-text">Usually ready in 24 hours</p>
                  </div>
                </div>
                <div className="side-item">
                  <span className="delivery-icon">
                    <i className="ph-fill ph-credit-card" />
                  </span>
                  <div className="delivery-info">
                    <h6 className="delivery-title">Payment</h6>
                    <p className="delivery-text">
                      Payment upon receipt of goods, Payment by card in the
                      department, Google Pay, Online card.
                    </p>
                  </div>
                </div>
                <div className="side-item">
                  <span className="delivery-icon">
                    <i className="ph-fill ph-check-circle" />
                  </span>
                  <div className="delivery-info">
                    <h6 className="delivery-title">Warranty</h6>
                    <p className="delivery-text">
                      The Consumer Protection Act does not provide for the
                      return of this product of proper quality.
                    </p>
                  </div>
                </div>
                <div className="side-item">
                  <span className="delivery-icon">
                    <i className="ph-fill ph-package" />
                  </span>
                  <div className="delivery-info">
                    <h6 className="delivery-title">Packaging</h6>
                    <p className="delivery-text">
                      Research & development value proposition graphical user
                      interface investor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //  */}
      <div className="product">
        <div className="container">
          <div className="Recommended-heading">
            <h5 className="">Recommended for you</h5>
            <ul className="common-tab " id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-organic-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-organic"
                  type="button"
                  role="tab"
                  aria-controls="pills-organic"
                  aria-selected="false"
                >
                  All Products{" "}
                </button>
              </li>
            </ul>
          </div>
          <div className="product-inner">
            {products.map((product) => (
              <div className="product-inner-item" key={product.id}>
                <div className="product-card">
                  {product.sale && (
                    <Link
                      to="#"
                      className="product-sale"
                      style={getSaleStyle(product.sale)}
                    >
                      {product.sale}
                    </Link>
                  )}
                  <Link to="#" className="product-card-img">
                    <img src={product.img} alt={product.title} />
                  </Link>
                  <div className="product-card-content">
                    <h6 className="product-card-title">
                      <Link to="#" className="product-card-title-inner">
                        {product.title}
                      </Link>
                    </h6>
                    <div className="product-card-Lucky">
                      <span className="product-card-storefront">
                        <i className="ph-fill ph-storefront" />
                      </span>
                      <span className="product-card-Lucky-text">
                        {product.store}
                      </span>
                    </div>
                    <div className="product-card-price">
                      <span className="product-card-price-dec">
                        {product.originalPrice}
                      </span>
                      <span className="product-card-price-ong">
                        {product.discountedPrice}{" "}
                        <span className="product-card-price-oty">/Qty</span>
                      </span>
                    </div>
                    <div className="product-card-rating">
                      <span className="product-card-rating-num">
                        {product.rating}
                      </span>
                      <span className="product-card-rating-star">
                        <i className="ph-fill ph-star" />
                      </span>
                      <span className="product-card-rating-totle">
                        {product.reviews}
                      </span>
                    </div>
                    <Link to="#" className="Recommended-add">
                      Add To Cart <i className="ph ph-shopping-cart" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
