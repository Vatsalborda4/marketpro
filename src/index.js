import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Vendor from "./pages/Vendor";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
       <Route path="/" element={<Home/>} />
      {/* <Route path="about" element={<About />} /> */}
      <Route path="contact" element={<ContactUs />} /> 
      <Route path="vendor" element={<Vendor />} /> 
    </Routes>
    <Footer />
  </BrowserRouter>
);
