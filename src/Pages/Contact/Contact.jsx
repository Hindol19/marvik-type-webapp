import React from "react";
import Landing from "../../components/HomeComponents/Landing/Landing";
import ContactLanding from "../../components/ContactComponents/ContactLanding/ContactLanding";
import ContactForm from "../../components/ContactComponents/ContactForm";
const Contact = ({ landingContent }) => {
  window.scrollTo(0, 0);
  return (
    <div>
      {/* <Landing landingContent={landingContent} /> */}
      <ContactLanding landingContent={landingContent} />
      <ContactForm />
    </div>
  );
};

export default Contact;
