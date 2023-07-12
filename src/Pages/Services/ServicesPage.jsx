import React from "react";
import Landing from "../../components/HomeComponents/Landing/Landing";
import ServiceContent from "../../components/ServicesComponents/ServiceContent/ServiceContent";
const ServicesPage = ({ landingContent, content }) => {
  return (
    <div className="servicePage-container">
      <Landing landingContent={landingContent} />
      <ServiceContent content={content} />
    </div>
  );
};

export default ServicesPage;
