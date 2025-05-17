import react from "react";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";
import Shipping from "../components/Shipping";
import Product from "../components/product";

const ProductDetails = () => {
  return (
    <>
      <Breadcrumb title={"Product Details"} />

      <Product />

      <Shipping />

      <Newsletter />
    </>
  );
};
export default ProductDetails;
