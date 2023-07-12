import React from "react";
import Landing from "../../components/HomeComponents/Landing/Landing";
import ContactForm from "../../components/ContactComponents/ContactForm";
const Contact = ({ landingContent }) => {
  return (
    <div>
      <Landing landingContent={landingContent} />
      <ContactForm />
    </div>
  );
};

export default Contact;
