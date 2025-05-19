import React, { useEffect, useState } from "react";

const Popup = () => {
  const [visible, setVisible] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const hidePermanently = localStorage.getItem("hidePopup"); // permanent opt-out
    const hideForSession = sessionStorage.getItem("popupShown"); // session-based

    // Show only if not permanently hidden and not yet shown this session
    if (hidePermanently !== "true" && hideForSession !== "true") {
      setVisible(true);
      sessionStorage.setItem("popupShown", "true"); // set this only for current session
    }
  }, []);

  const closePopup = () => {
    if (dontShowAgain) {
      localStorage.setItem("hidePopup", "true"); // user chose to never see it again
    }
    setVisible(false);
  };

  const handleCheckboxChange = (e) => {
    setDontShowAgain(e.target.checked);
  };

  if (!visible) return null;

  return (
    <div className="pop-outer" onClick={closePopup}>
      <div className="pop-inner" onClick={(e) => e.stopPropagation()}>
        <h2>Newsletter</h2>
        <p>
          Subscribe to our newsletter to get exclusive discounts and updates
          right in your inbox.
        </p>
        <input
          type="email"
          className="email"
          placeholder="Your email address"
        />
        <a href="#" className="sub">
          Subscribe
        </a>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            onChange={handleCheckboxChange}
          />
          <span>Don’t show this popup again</span>
        </div>
        <button className="icon" onClick={closePopup}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default Popup;
