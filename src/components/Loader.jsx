import { useEffect, useState } from "react";

const Loader = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);

  return (
    <>
      {active ? (
        <div className="preloader">
          <img src="assets/images/preloader.gif" alt="" />
        </div>

      ) : (<></>)}
    </>
  );
};

export default Loader;
