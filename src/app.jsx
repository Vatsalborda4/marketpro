// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Vendor from "./pages/Vendor";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer); // Cleanup on route change
  }, [location]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/Product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </>
  );
};

export default App;
