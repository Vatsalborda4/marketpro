import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";
import Shipping from "../components/Shipping";
import { Link } from "react-router-dom";

const vendors = [
  {
    id: 1,
    logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo1.png",
    title: "Organic Market",
    delivery: "Delivery by 6:15am",
    promotion: "$5 off Snack & Candy",
    bg: "#f4f6e6",
    images: [
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png",
    ],
  },
  {
    id: 2,
    logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo2.png",
    title: "Safeway",
    delivery: "Delivery by 6:15am",
    promotion: "$5 off Snack & Candy",
    bg: "#e6f6f6",
    images: [
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png",
    ],
  },
  {
    id: 3,
    logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo3.png",
    title: "Food Max",
    delivery: "Delivery by 6:15am",
    promotion: "$5 off Snack & Candy",
    bg: "#f6e6f6",
    images: [
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png",
    ],
  },
  {
    id: 4,
    logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo4.png",
    title: "HRmart",
    delivery: "Delivery by 6:15am",
    bg: "#f8eae4",
    promotion: "$5 off Snack & Candy",
    images: [
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png",
    ],
  },
  {
    id: 5,
    logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo5.png",
    title: "Lucky Supermarket",
    delivery: "Delivery by 6:15am",
    bg: "#f8eae4",
    promotion: "$5 off Snack & Candy",
    images: [
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png",
    ],
  },
  {
    id: 6,
    logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo6.png",
    title: "Arico Farmer",
    delivery: "Delivery by 6:15am",
    promotion: "$5 off Snack & Candy",
    bg: "#dee6f3",
    images: [
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png",
    ],
  },
  {
    id: 7,
    logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo7.png",
    title: "Farmer Market",
    delivery: "Delivery by 6:15am",
    promotion: "$5 off Snack & Candy",
    bg: "#daf2db",

    images: [
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png",
    ],
  },
  {
    id: 8,
    logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo8.png",
    title: "Foodsco",
    delivery: "Delivery by 6:15am",
    promotion: "$5 off Snack & Candy",
    bg: "#f4f6e6",

    images: [
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png",
    ],
  },
  {
    id: 1,
    logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo1.png",
    title: "Organic Market",
    delivery: "Delivery by 6:15am",
    promotion: "$5 off Snack & Candy",
    bg: "#f4f6e6",
    images: [
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png",
    ],
  },
  {
    id: 2,
    logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo2.png",
    title: "Safeway",
    delivery: "Delivery by 6:15am",
    promotion: "$5 off Snack & Candy",
    bg: "#e6f6f6",
    images: [
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png",
    ],
  },
  {
    id: 3,
    logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo3.png",
    title: "Food Max",
    delivery: "Delivery by 6:15am",
    promotion: "$5 off Snack & Candy",
    bg: "#f6e6f6",
    images: [
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png",
    ],
  },
  {
    id: 4,
    logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo4.png",
    title: "HRmart",
    delivery: "Delivery by 6:15am",
    bg: "#f8eae4",
    promotion: "$5 off Snack & Candy",
    images: [
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png",
    ],
  },
  {
    id: 5,
    logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo5.png",
    title: "Lucky Supermarket",
    delivery: "Delivery by 6:15am",
    bg: "#f8eae4",
    promotion: "$5 off Snack & Candy",
    images: [
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png",
    ],
  },
  {
    id: 6,
    logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo6.png",
    title: "Arico Farmer",
    delivery: "Delivery by 6:15am",
    promotion: "$5 off Snack & Candy",
    bg: "#dee6f3",
    images: [
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png",
    ],
  },
  {
    id: 7,
    logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo7.png",
    title: "Farmer Market",
    delivery: "Delivery by 6:15am",
    promotion: "$5 off Snack & Candy",
    bg: "#daf2db",

    images: [
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
      "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png",
    ],
  },

];
const Vendor = () => {
  return (
    <>
      <Breadcrumb title={"vendor"} />
      <section className="topvendors">
        <div className="container">
          <div className="vendor-header">
            <span className="vendor-header-title">
              Showing 1-20 of 85 results
            </span>
            <div className="vendor-header-actions">
              <form
                action="#"
                className="vendor-form-wrapper "
              >
                <input
                  type="text"
                  className="vendor-form-input "
                  placeholder="Search vendors by name or ID..."
                />
                <button
                  type="submit"
                  className="vendor-form-btn"
                >
                  <i className="ph ph-magnifying-glass"></i>
                </button>
              </form>
              <div className="vendor-header-select">
                <span className="vendor-header-select-text">Sort by:</span>
                <select className="vendor-header-select">
                  <option value="1" selected="">
                    Latest
                  </option>
                  <option value="1">Old</option>
                </select>
              </div>
            </div>
          </div>
          <div className="vendor-grid">
            {vendors.map((vendor) => (
              <div key={vendor.id} className="vendor-col">
                <div className="vendor-card" style={{ background: vendor.bg }}>
                  <div>
                    <img
                      src={vendor.logo}
                      alt={vendor.title}
                      className="vendor-logo"
                    />
                    <h6 className="vendor-title">{vendor.title}</h6>
                    <span className="vendor-delivery">{vendor.delivery}</span>
                    <Link to="/shop" className="vendor-promotion-btn1 vendor-promotion-btn">
                      {vendor.promotion}
                    </Link>
                  </div>
                  <div className="vendor-images">
                    {vendor.images.map((img, index) => (
                      <div key={index} className="vendor-image-item">
                        <img src={img} alt={`${vendor.title} ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ul className="pagination ">
          <li className="page-item">
            <Link
              className="page-link "
              to="/vendor"
            >
              <i className="ph-bold ph-arrow-left"></i>
            </Link>
          </li>
          <li className="page-item ">
            <Link
              className="page-link active "
              to="/vendor"
            >
              01
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link "
              to="/vendor"
            >
              02
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link "
              to="/vendor"
            >
              03
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link "
              to="/vendor"
            >
              04
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link "
              to="/vendor"
            >
              05
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link "
              to="/vendor"
            >
              06
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link "
              to="/vendor"
            >
              07
            </Link>
          </li>
          <li className="page-item">
            <Link
              className=""
              to="/vendor"
            >
              <i className="ph-bold ph-arrow-right"></i>
            </Link>
          </li>
        </ul>
      </section>

      <Shipping />

      <Newsletter />
    </>
  );
};
export default Vendor;
