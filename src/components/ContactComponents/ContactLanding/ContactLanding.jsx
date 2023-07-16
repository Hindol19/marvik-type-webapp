import React from "react";
import "./ContactLanding.scss";
const ContactLanding = ({ landingContent }) => {
  return (
    <div className="contactLanding-container">
      <div className="contactLanding-layout">
        <h2>{landingContent.title}</h2>
      </div>
    </div>
  );
};

export default ContactLanding;
