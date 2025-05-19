import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

import ScrollToTopButton from "./components/ScrollToTopButton";

import App from "./app";
import ScrollToTop from "./components/ScrollToTop";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Header />
    <App/>
    <Footer />
    <ScrollToTopButton />
  </BrowserRouter>
);
