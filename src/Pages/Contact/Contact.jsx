import React from "react";
import Landing from "../../components/HomeComponents/Landing/Landing";
import ContactForm from "../../components/ContactComponents/ContactForm";
const Contact = ({ landingContent }) => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Landing landingContent={landingContent} />
      <ContactForm />
    </div>
  );
};

export default Contact;
