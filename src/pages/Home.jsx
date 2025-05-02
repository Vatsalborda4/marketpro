import React from "react";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Promotional from "../components/Promotional";
import FlashSales from "../components/FlashSales";
import ProductList from "../components/ProductList";
import Offer from "../components/Offer";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <Banner />

      <Feature />

      <Promotional />

      <FlashSales />

      <ProductList  />

      <Offer/>
    </>
  );
};
export default Home;
