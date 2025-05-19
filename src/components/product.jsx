import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    sale: "",
    img: "/assets/images/product-img1.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$30.99",
    discountedPrice: "$15.49",
    rating: "4.7",
    reviews: "(12k)",
    progress: 50,
    sold: "25/50",
  },
  {
    id: 2,
    sale: "",
    img: "/assets/images/product-img2.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$27.49",
    discountedPrice: "$13.99",
    rating: "4.9",
    reviews: "(20k)",
    progress: 40,
    sold: "16/40",
  },
  {
    id: 3,
    sale: "",
    img: "/assets/images/product-img3.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$29.99",
    discountedPrice: "$14.49",
    rating: "4.6",
    reviews: "(15k)",
    progress: 60,
    sold: "36/60",
  },
  {
    id: 4,
    sale: "",
    img: "/assets/images/product-img1.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$31.99",
    discountedPrice: "$16.99",
    rating: "4.8",
    reviews: "(18k)",
    progress: 30,
    sold: "9/30",
  },
  {
    id: 5,
    sale: "",
    img: "/assets/images/product-img5.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$26.99",
    discountedPrice: "$12.99",
    rating: "4.5",
    reviews: "(10k)",
    progress: 45,
    sold: "20/45",
  },
  {
    id: 6,
    sale: "",
    img: "/assets/images/product-img6.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$32.49",
    discountedPrice: "$17.49",
    rating: "4.9",
    reviews: "(22k)",
    progress: 70,
    sold: "49/70",
  },
  {
    id: 7,
    sale: "",
    img: "/assets/images/product-img7.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$34.99",
    discountedPrice: "$19.99",
    rating: "4.4",
    reviews: "(8k)",
  },
  {
    id: 8,
    sale: "Sale 50%",
    img: "/assets/images/product-img8.webp",
    title: "Marcel's Modern Pantry Almond Unsweetened",
    store: "By Lucky Supermarket",
    originalPrice: "$29.49",
    discountedPrice: "$14.74",
    rating: "4.7",
    reviews: "(14k)",
  },
  {
    id: 9,
    sale: "Sale 50%",
    img: "/assets/images/product-img9.webp",
    title: "O Organics Milk, Whole, Vitamin D",
    store: "By Lucky Supermarket",
    originalPrice: "$28.49",
    discountedPrice: "$14.24",
    rating: "4.8",
    reviews: "(16k)",
  },
  {
    id: 10,
    sale: "Best Sale",
    img: "/assets/images/product-img10.webp",
    title: "Whole Grains and Seeds Organic Bread",
    store: "By Lucky Supermarket",
    originalPrice: "$27.99",
    discountedPrice: "$13.49",
    rating: "4.6",
    reviews: "(13k)",
  },
  {
    id: 11,
    sale: "",
    img: "/assets/images/product-img11.webp",
    title: "Luceme Yogurt, Lowfat, Strawberry",
    store: "By Lucky Supermarket",
    originalPrice: "$25.99",
    discountedPrice: "$12.49",
    rating: "4.9",
    reviews: "(19k)",
  },
  {
    id: 12,
    sale: "Sale 50%",
    img: "/assets/images/product-img12.webp",
    title: "Nature Valley Whole Grain Oats and Honey Protein",
    store: "By Lucky Supermarket",
    originalPrice: "$30.49",
    discountedPrice: "$15.24",
    rating: "4.5",
    reviews: "(11k)",
  },
  {
    id: 13,
    sale: "",
    img: "/assets/images/product-img13.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$33.99",
    discountedPrice: "$18.99",
    rating: "4.7",
    reviews: "(17k)",
  },
  {
    id: 14,
    sale: "Sale 50%",
    img: "/assets/images/product-img14.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$31.49",
    discountedPrice: "$15.74",
    rating: "4.8",
    reviews: "(15k)",
  },
  {
    id: 15,
    sale: "New",
    img: "/assets/images/product-img15.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$35.99",
    discountedPrice: "$20.99",
    rating: "4.6",
    reviews: "(9k)",
  },
  {
    id: 16,
    sale: "Sale 50%",
    img: "/assets/images/product-img16.webp",
    title: "Good & Gather Farmed Atlantic Salmon",
    store: "By Lucky Supermarket",
    originalPrice: "$36.99",
    discountedPrice: "$18.49",
    rating: "4.9",
    reviews: "(21k)",
  },
  {
    id: 17,
    sale: "Sale 50%",
    img: "/assets/images/product-img17.webp",
    title: "Market Pantry 41-50 Raw Large Shrimp",
    store: "By Lucky Supermarket",
    originalPrice: "$34.49",
    discountedPrice: "$17.24",
    rating: "4.7",
    reviews: "(12k)",
  },
  {
    id: 18,
    sale: "New",
    img: "/assets/images/product-img18.webp",
    title: "Tropicana 100% Juice, Orange, No Pulp",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.49",
    rating: "4.8",
    reviews: "(18k)",
  },
  {
    id: 19,
    sale: "",
    img: "/assets/images/best-sell1.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$29.99",
    discountedPrice: "$14.99",
    rating: "4.6",
    reviews: "(16k)",
    progress: 55,
    sold: "30/55",
  },
  {
    id: 20,
    sale: "",
    img: "/assets/images/best-sell2.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$27.99",
    discountedPrice: "$13.49",
    rating: "4.9",
    reviews: "(20k)",
    progress: 65,
    sold: "42/65",
  },
  {
    id: 21,
    sale: "",
    img: "/assets/images/best-sell3.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$30.99",
    discountedPrice: "$15.49",
    rating: "4.7",
    reviews: "(14k)",
    progress: 50,
    sold: "25/50",
  },
  {
    id: 22,
    sale: "",
    img: "/assets/images/best-sell4.webp",
    title: "Taylor Farms Broccoli Florets Vegetables",
    store: "By Lucky Supermarket",
    originalPrice: "$28.49",
    discountedPrice: "$13.99",
    rating: "4.8",
    reviews: "(17k)",
    progress: 60,
    sold: "36/60",
  },
];

const getSaleStyle = (sale) => {
  if (sale === "Sale 50%") return { backgroundColor: "#dc2626" };
  if (sale.toLowerCase() === "new") return { backgroundColor: "#ff9f29" };
  if (sale.toLowerCase() === "") return { display: "none" };
  if (sale === "Best Sale") return { backgroundColor: "#2563eb" };
};

const Product = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((p) => p.id === parseInt(id)); // Find the product by ID

  // State for quantity and main image
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    product ? product.img : "/assets/images/product-details-thumb1.png"
  );

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () =>
    setQuantity(quantity > 1 ? quantity - 1 : quantity);

  // If no product is found, display a fallback message
  if (!product) {
    return (
      <section className="product-section">
        <div className="container">
          <h5>Product not found</h5>
        </div>
      </section>
    );
  }

  // Use the product's img as the thumbnail (since no separate thumbnails array is provided)
  const productThumbnails = [product.img];

  // Calculate progress percentage for the progress bar
  const progressPercentage = product.progress ? `${product.progress}%` : "0%";
  const availableStock = product.sold ? product.sold.split("/")[1] : "N/A";

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
                          <img src={mainImage} alt={product.title} />
                        </div>
                      </div>
                    </div>
                    <div className="product-thumbnails">
                      <div className="thumbnails-container">
                        {productThumbnails.map((image, index) => (
                          <div
                            className="thumbnail-item"
                            key={index}
                            onClick={() => setMainImage(image)}
                          >
                            <img
                              className="thumbnail-image"
                              src={image}
                              alt={`Thumbnail ${product.title}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-content-inner">
                  <div className="product-content">
                    <h5 className="content-title">{product.title}</h5>
                    <div className="rating-section">
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <span className="star-icon" key={i}>
                            <i
                              className={`ph-fill ph-star ${
                                i < Math.floor(parseFloat(product.rating))
                                  ? ""
                                  : parseFloat(product.rating) > i
                                  ? "ph-star-half"
                                  : ""
                              }`}
                            />
                          </span>
                        ))}
                      </div>
                      <span className="rating-text">
                        {product.rating} Star Rating
                      </span>
                      <span className="review-count">{product.reviews}</span>
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
                        <h4 className="current-price">
                          {product.discountedPrice}
                        </h4>
                        <span className="original-price">
                          {product.originalPrice}
                        </span>
                      </div>
                      <Link to="/" className="whatsapp-button">
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
                    {product.progress && (
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
                          aria-valuenow={product.progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-fill"
                            style={{ width: progressPercentage }}
                          />
                        </div>
                        <span className="stock-availability">
                          Available only: {availableStock}
                        </span>
                      </div>
                    )}
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
                        <Link to="/" className="cart-button">
                          <i className="ph ph-shopping-cart" /> Add To Cart
                        </Link>
                      </div>
                      <div className="action-buttons">
                        <Link to="/" className="wishlist-button">
                          <i className="ph ph-heart" />
                        </Link>
                        <Link to="/" className="wishlist-button">
                          <i className="ph ph-shuffle" />
                        </Link>
                        <Link to="/" className="wishlist-button">
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
                      <span className="store-name">{product.store}</span>
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

      <div className="product">
        <div className="container">
          <div className="Recommended-heading">
            <h5 className="">You Might Also Like</h5>
            <ul className="common-tab" id="pills-tab" role="tablist">
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
                  All Products
                </button>
              </li>
            </ul>
          </div>
          <div className="product-inner">
            {products.slice(0, 4).map((product) => (
              <div className="product-inner-item" key={product.id}>
                <div className="product-card">
                  {product.sale && (
                    <Link
                      to="/"
                      className="product-sale"
                      style={getSaleStyle(product.sale)}
                    >
                      {product.sale}
                    </Link>
                  )}
                  <Link
                    to={`/product/${product.id}`}
                    className="product-card-img"
                  >
                    <img src={product.img} alt={product.title} />
                  </Link>
                  <div className="product-card-content">
                    <h6 className="product-card-title">
                      <Link
                        to={`/product/${product.id}`}
                        className="product-card-title-inner"
                      >
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
                    <Link to="/" className="Recommended-add">
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
