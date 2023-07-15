import React from "react";
import "./Services.scss";
import ServiceCard from "./ServiceCard/ServiceCard";
import { servicesList } from "../../../data/servicesList.js";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-layout">
        <h2 className="services-title">Our Services</h2>
        <div className="services-rack">
          <ServiceCard
            color={servicesList.cv.color}
            title={servicesList.cv.title}
            desc={servicesList.cv.desc}
          />
          <ServiceCard
            color={servicesList.nlp.color}
            title={servicesList.nlp.title}
            desc={servicesList.nlp.desc}
          />
          <ServiceCard
            color={servicesList.cbd.color}
            title={servicesList.cbd.title}
            desc={servicesList.cbd.desc}
          />
          <ServiceCard
            color={servicesList.pa.color}
            title={servicesList.pa.title}
            desc={servicesList.pa.desc}
          />
          <ServiceCard
            color={servicesList.llm.color}
            title={servicesList.llm.title}
            desc={servicesList.llm.desc}
          />
          <ServiceCard
            color={servicesList.cb.color}
            title={servicesList.cb.title}
            desc={servicesList.cb.desc}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
