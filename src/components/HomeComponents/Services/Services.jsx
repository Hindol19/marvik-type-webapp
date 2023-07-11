import React from "react";
import "./Services.scss";
import ServiceCard from "./ServiceCard/ServiceCard";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-layout">
        <h2 className="services-title">Our Services</h2>
        <div className="services-rack">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default Services;
