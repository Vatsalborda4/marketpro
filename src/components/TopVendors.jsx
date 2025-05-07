import React from "react";
import { Link } from "react-router-dom";

const vendors = [
    {
        id: 1,
        logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo1.png",
        title: "Organic Market",
        delivery: "Delivery by 6:15am",
        promotion: "$5 off Snack & Candy",
        bg:"#f4f6e6",
        images: [
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png"
        ]
    },
    {
        id: 2,
        logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo2.png",
        title: "Safeway",
        delivery: "Delivery by 6:15am",
        promotion: "$5 off Snack & Candy",
        bg:"#e6f6f6",
        images: [
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png"
        ]
    },
    {
        id: 3,
        logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo3.png",
        title: "Food Max",
        delivery: "Delivery by 6:15am",
        promotion: "$5 off Snack & Candy",
        bg:"#f6e6f6",
        images: [
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png"
        ]
    },
    {
        id: 4,
        logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo4.png",
        title: "HRmart",
        delivery: "Delivery by 6:15am",
        bg:"#f8eae4",
        promotion: "$5 off Snack & Candy",
        images: [
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png"
        ]
    },
    {
        id: 5,
        logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo5.png",
        title: "Lucky Supermarket",
        delivery: "Delivery by 6:15am",
        bg:"#f8eae4",
        promotion: "$5 off Snack & Candy",
        images: [
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png"
        ]
    },
    {
        id: 6,
        logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo6.png",
        title: "Arico Farmer",
        delivery: "Delivery by 6:15am",
        promotion: "$5 off Snack & Candy",
        bg:"#dee6f3",
        images: [
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png"
        ]
    },
    {
        id: 7,
        logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo7.png",
        title: "Farmer Market",
        delivery: "Delivery by 6:15am",
        promotion: "$5 off Snack & Candy",
        bg:"#daf2db",

        images: [
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png"
        ]
    },
    {
        id: 8,
        logo: "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-logo8.png",
        title: "Foodsco",
        delivery: "Delivery by 6:15am",
        promotion: "$5 off Snack & Candy",
        bg:"#f4f6e6",

        images: [
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img1.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img2.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img3.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img4.png",
            "https://react.marketpro.wowtheme7.com/assets/images/thumbs/vendor-img5.png"
        ]
    }
];

const TopVendors = () => {
  return (
    <section className="topvendors">
      <div className="container">
        <div className="topvendors-heading">
          <h5>Weekly Top Vendors</h5>
          <Link to="/shop" className="topvendors-link">
            All Vendors
          </Link>
        </div>
        <div className="vendor-grid">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="vendor-col">
              <div className="vendor-card" style={{background:vendor.bg}}>
                <div>
                  <img
                    src={vendor.logo}
                    alt={vendor.title}
                    className="vendor-logo"
                  />
                  <h6 className="vendor-title">{vendor.title}</h6>
                  <span className="vendor-delivery">{vendor.delivery}</span>
                  <Link to="/shop" className="vendor-promotion-btn">
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
    </section>
  );
};

export default TopVendors;