import React from "react";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Promotional from "../components/Promotional";
import FlashSales from "../components/FlashSales";
import ProductList from "../components/ProductList";
import Offer from "../components/Offer";
import Recommended from "../components/Recommended";
import HotDeals from "../components/HotDeals";
import NewArrival from "../components/NewArrival";
import Organic from "../components/Organic";
import BestSells from "../components/BestSells";
import TopVendors from "../components/TopVendors";
import Delivery from "../components/Delivery";
import Brands from "../components/Brands";
import Shipping from "../components/Shipping";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <Banner />

      <Feature />

      <Promotional />

      <FlashSales />

      <ProductList />

      <Offer />

      <Recommended />

      <HotDeals />

      <TopVendors />

      <BestSells />

      <Delivery />

      <Organic />

      <Brands />

      <NewArrival />
      
      <Shipping/>
    </>
  );
};
export default Home;
