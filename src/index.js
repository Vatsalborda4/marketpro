import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Vendor from "./pages/Vendor";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
       <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<ContactUs />} /> 
      <Route path="/vendor" element={<Vendor />} /> 
      <Route path="/Product" element={<ProductDetails />} /> 
    </Routes>
    <Footer />
  </BrowserRouter>
);
