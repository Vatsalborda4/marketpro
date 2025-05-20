import react from "react";
import Breadcrumb from "../components/Breadcrumb";
import Shipping from "../components/Shipping";
import { Link } from "react-router-dom";

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
  return {};
};
const Shop = () => {

  return (
    <>
      <Breadcrumb title={"shop"} />

      <div className="shop">
        <div className="container">
          <div className="shop-inner">
            <div className="shop-left">
              {/* <!-- catagory --> */}
              <div class="catagory">
                <h2 class="catagory-title">Product Category</h2>
                <ul class="category-item">
                  <li>Mobile & Accessories (12) </li>
                  <li>Laptop (12) </li>
                  <li>Electronics (12) </li>
                  <li>Smart Watch (12) </li>
                  <li>Storage (12) </li>
                  <li>Portable Devices (12) </li>
                  <li>Action Camera (12) </li>
                  <li>Smart Gadget (12) </li>
                  <li>Monitor (12) </li>
                  <li>Smart TV (12) </li>
                  <li>Camera (12) </li>
                  <li>Monitor Stand (12) </li>
                  <li>Headphone (12) </li>
                </ul>
              </div>

              {/* <!-- filter --> */}
              <div class="filter-outer">
                <h3 class="filter-title">Filter by Price</h3>

                <div class="input-slider">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="100"
                    class="slider"
                    id="maxRange"
                  />
                  <div class="range-values">
                    <span id="minValue">0</span>
                    <span id="maxValue">100</span>
                  </div>
                  <button class="filter-button">Filter</button>
                </div>
              </div>
              {/* <!-- color --> */}
              <div class="color-outer">
                <h3 class="color-title">Filter by brand</h3>
                <ul class="color-list">
                  <li>
                    <input type="radio" name="brand" class="black" /> Black (12)
                  </li>
                  <li>
                    <input type="radio" name="brand" class="blue" /> Blue (12)
                  </li>
                  <li>
                    <input type="radio" name="brand" class="gray" /> Gray (12)
                  </li>
                  <li>
                    <input type="radio" name="brand" class="green" /> Green (12)
                  </li>
                  <li>
                    <input type="radio" name="brand" class="red" /> Red (12)
                  </li>
                  <li>
                    <input type="radio" name="brand" class="white" /> White (12)
                  </li>
                  <li>
                    <input type="radio" name="brand" class="purple" /> Purple
                    (12)
                  </li>
                </ul>
              </div>
              {/* <!-- brand --> */}
              <div class="brand-outer">
                <h3 class="brand-title">Filter by brand</h3>
                <ul class="brand-list">
                  <li>
                    <input type="radio" name="brand" /> Apple
                  </li>
                  <li>
                    <input type="radio" name="brand" /> Samsung
                  </li>
                  <li>
                    <input type="radio" name="brand" /> Microsoft
                  </li>
                  <li>
                    <input type="radio" name="brand" /> Apple
                  </li>
                  <li>
                    <input type="radio" name="brand" /> HP
                  </li>
                  <li>
                    <input type="radio" name="brand" /> DELL
                  </li>
                  <li>
                    <input type="radio" name="brand" />
                    Redmi
                  </li>
                </ul>
              </div>
              {/* <!-- image --> */}
              <div className="img-outer">
                <div className="img-inner">
                  <img src="assets/images/advertise-img1.webp" alt="IMG.JPG" />
                </div>
              </div>
            </div>
            <div className="shop-right">
              <div class="shop-right-inner">
                <span class="shop-right-text">Showing 1-20 of 85 result</span>
                <div class="shop-right-inner-right">
                  <div class="shop-right-inner-btn">
                    <button type="button" class="shop-btn1">
                      <i class="ph-bold ph-list-dashes"></i>
                    </button>
                    <button type="button" class="shop-btn2">
                      <i class="ph ph-squares-four"></i>
                    </button>
                  </div>
                  <div class="shop-right-inner-select">
                    <label for="sorting" class="shop-right-inner-select-text">
                      Sort by:{" "}
                    </label>
                    <select class="selectpicker" id="sorting">
                      <option value="1" selected="">
                        Popular
                      </option>
                      <option value="1">Latest</option>
                      <option value="1">Trending</option>
                      <option value="1">Matches</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="product">
 <div className="product-inner">
          {products.map((product) => (
            <Link  to={`/product/${product.id}`} className="product-inner-item" key={product.id}>
              <div className="product-card">
                {product.sale && (
                  <Link
                    to={`/product/${product.id}`}
                    className="product-sale"
                    style={getSaleStyle(product.sale)}
                  >
                    {product.sale}
                  </Link>
                )}
                <Link to={`/product/${product.id}`} className="product-card-img">
                  <img src={product.img} alt={product.title} />
                </Link>
                <div className="product-card-content">
                  <h6 className="product-card-title">
                    <Link to="/" className="product-card-title-inner">
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
                  <Link to={`/product/${product.id}`} className="Recommended-add">
                    Add To Cart <i className="ph ph-shopping-cart" />
                  </Link>
                </div>
              </div>
            </Link>

          ))}
          </div>
        </div>
              <ul class="pagination ">
                <li class="page-item">
                  <Link
                    class="shop-page-link "
                    to="/shop"
                  >
                    <i class="ph-bold ph-arrow-left"></i>
                  </Link>
                </li>
                <li class="page-item ">
                  <Link
                    class="shop-page-link active"
                    to="/shop"
                  >
                    01
                  </Link>
                </li>
                <li class="page-item">
                  <Link
                    class="shop-page-link "
                    to="/shop"
                  >
                    02
                  </Link>
                </li>
                <li class="page-item">
                  <Link
                    class="shop-page-link "
                    to="/shop"
                  >
                    03
                  </Link>
                </li>
                <li class="page-item">
                  <Link
                    class="shop-page-link "
                    to="/shop"
                  >
                    04
                  </Link>
                </li>
                <li class="page-item">
                  <Link
                    class="shop-page-link "
                    to="/shop"
                  >
                    05
                  </Link>
                </li>
                <li class="page-item">
                  <Link
                    class="shop-page-link "
                    to="/shop"
                  >
                    06
                  </Link>
                </li>
                <li class="page-item">
                  <Link
                    class="shop-page-link "
                    to="/shop"
                  >
                    07
                  </Link>
                </li>
                <li class="page-item">
                  <Link
                    class="shop-page-link "
                    to="/shop"
                  >
                    <i class="ph-bold ph-arrow-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Shipping />
    </>
  );
};
export default Shop;
