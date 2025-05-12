import react from "react";
import Breadcrumb from "../components/Breadcrumb";
import Shipping from "../components/Shipping";
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
  {
    id: 5,
    sale: "",
    img: "assets/images/product-img11.webp",
    title: "Luceme Yogurt, Lowfat, Strawberry",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 6,
    sale: "Sale 50%",
    img: "assets/images/product-img12.webp",
    title: "Nature Valley Whole Grain Oats and Honey Protein",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 7,
    sale: "",
    img: "assets/images/product-img13.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 8,
    sale: "Sale 50%",
    img: "assets/images/product-img14.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 9,
    sale: "New",
    img: "assets/images/product-img15.webp",
    title: "C-500 Antioxidant Protect Dietary Supplement",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 10,
    sale: "Sale 50%",
    img: "assets/images/product-img16.webp",
    title: "Good & Gather Farmed Atlantic Salmon",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 11,
    sale: "Sale 50%",
    img: "assets/images/product-img17.webp",
    title: "Market Pantry 41-50 Raw Large Shrimp",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
  {
    id: 12,
    sale: "New",
    img: "assets/images/product-img18.webp",
    title: "Tropicana 100% Juice, Orange, No Pulp",
    store: "By Lucky Supermarket",
    originalPrice: "$28.99",
    discountedPrice: "$14.99",
    rating: "4.8",
    reviews: "(17k)",
  },
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
              <ul class="pagination ">
                <li class="page-item">
                  <a
                    class="shop-page-link "
                    href="/shop"
                  >
                    <i class="ph-bold ph-arrow-left"></i>
                  </a>
                </li>
                <li class="page-item ">
                  <a
                    class="shop-page-link active"
                    href="/shop"
                  >
                    01
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="shop-page-link "
                    href="/shop"
                  >
                    02
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="shop-page-link "
                    href="/shop"
                  >
                    03
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="shop-page-link "
                    href="/shop"
                  >
                    04
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="shop-page-link "
                    href="/shop"
                  >
                    05
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="shop-page-link "
                    href="/shop"
                  >
                    06
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="shop-page-link "
                    href="/shop"
                  >
                    07
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="shop-page-link "
                    href="/shop"
                  >
                    <i class="ph-bold ph-arrow-right"></i>
                  </a>
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
