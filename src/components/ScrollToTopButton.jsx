import React, { useEffect, useState } from "react";

import { FaChevronUp } from "react-icons/fa"; // using react-icons instead of raw fontawesome

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button id="top" className="scroll-top-button" onClick={scrollToTop}>
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    )
  );
};

export default ScrollToTopButton;
