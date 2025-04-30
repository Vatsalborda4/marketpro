import React from "react";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Promotional from "../components/Promotional";
import FlashSales from "../components/FlashSales";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <Banner />

      <Feature />

      <Promotional />

      <FlashSales />
    </>
  );
};
export default Home;
