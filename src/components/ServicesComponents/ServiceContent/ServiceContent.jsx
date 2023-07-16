import React from "react";
import "./ServiceContent.scss";
import Cat from "../../../assets/cat.jpg";
const ServiceContent = ({ content }) => {
  return (
    <div className="serviceContent-container">
      <div className="serviceContent-layout">
        <h2 className="diff-title">{content.title}</h2>
        <div className="row row1">
          <div className="content">
            <h3>{content.con1.head}</h3>
            <p>{content.con1.desc}</p>
          </div>
          <div className="image">
            <img src={content.con1.img} alt="" srcset="" />
          </div>
        </div>
        <div className="row row2">
          <div className="image">
            <img src={content.con2.img} alt="" srcset="" />
          </div>
          <div className="content">
            <h3>{content.con2.head}</h3>
            <p>{content.con2.desc}</p>
          </div>
        </div>
        <div className="row row3">
          <div className="content">
            <h3>{content.con3.head}</h3>
            <p>{content.con3.desc}</p>
          </div>
          <div className="image">
            <img src={content.con3.img} alt="" srcset="" />
          </div>
        </div>
        <div className="row row4">
          <div className="image">
            <img src={content.con4.img} alt="" srcset="" />
          </div>
          <div className="content">
            <h3>{content.con4.head}</h3>
            <p>{content.con4.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
