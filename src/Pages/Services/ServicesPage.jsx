import React from "react";
import Landing from "../../components/HomeComponents/Landing/Landing";
import ServiceContent from "../../components/ServicesComponents/ServiceContent/ServiceContent";
const ServicesPage = ({ landingContent, content }) => {
  window.scrollTo(0, 0);
  return (
    <div className="servicePage-container">
      <Landing landingContent={content} />
      <ServiceContent content={content} />
    </div>
  );
};

export default ServicesPage;
