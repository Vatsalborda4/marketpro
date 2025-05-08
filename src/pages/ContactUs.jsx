import react from "react";
import Shipping from "../components/Shipping";
import Breadcrumb from "../components/Breadcrumb";
import Contact from "../components/Contact";

const ContactUs = () => {
  return (
    <>
      <Breadcrumb title={"Contact"} />
      
      <Contact />

      <Shipping />
    </>
  );
};
export default ContactUs;
