import React from "react";
import "./Tech.scss";
import Python from "../../../assets/Tech/Python.png";
const Tech = () => {
  return (
    <div className="tech-container">
      <div className="tech-layout">
        <div className="tech-card">
          <h3>The Technology we use:</h3>
          <div className="tech-icons">
            <div>
              <img src={Python} alt="" />
            </div>
            <div>
              <img src={Python} alt="" />
            </div>
            <div>
              <img src={Python} alt="" />
            </div>
            <div>
              <img src={Python} alt="" />
            </div>
            <div>
              <img src={Python} alt="" />
            </div>
            <div>
              <img src={Python} alt="" />
            </div>
            <div>
              <img src={Python} alt="" />
            </div>
            <div>
              <img src={Python} alt="" />
            </div>
            <div>
              <img src={Python} alt="" />
            </div>
            <div>
              <img src={Python} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
