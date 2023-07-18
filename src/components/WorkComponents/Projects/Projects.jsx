import React from "react";
import "./Projects.scss";
import { servicesList } from "../../../data/servicesList.js";
const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-layout">
        <h2 className="work-title">Our Work</h2>
        <div className="projects-card">
          <div className="row row-one row1">
            <div className="card card-full card1">
              <div className="card1-bg cart-bg">
                <div className="work-card-content">
                  <h3>{servicesList.llm.title}</h3>
                  <p>{servicesList.llm.desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-two row2">
            <div className="card card-half card2">
              <div className="card2-bg cart-bg">
                <div className="work-card-content">
                  <h3>{servicesList.nlp.title}</h3>
                  <p>{servicesList.nlp.desc}</p>
                </div>
              </div>
            </div>
            <div className="card card-half card3">
              <div className="card3-bg cart-bg">
                <div className="work-card-content">
                  <h3>{servicesList.cv.title}</h3>
                  <p>{servicesList.cv.desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-one row3">
            <div className="card card-full card4">
              <div className="card4-bg cart-bg">
                <div className="work-card-content">
                  <h3>{servicesList.cbd.title}</h3>
                  <p>{servicesList.cbd.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
