import React from "react";
import "./ServiceCard.scss";
const ServiceCard = ({ color, title, desc }) => {
  return (
    <div
      className="serviceCard-container"
      style={{
        backgroundColor: color,
      }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
      <button>Read More</button>
    </div>
  );
};

export default ServiceCard;
