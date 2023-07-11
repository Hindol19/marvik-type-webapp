import React from "react";
import "./Projects.scss";
const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-layout">
        <h2 className="work-title">Our Work</h2>
        <div className="projects-card">
          <div className="row row-one row1">
            <div className="card-full"></div>
          </div>
          <div className="row row-two row2">
            <div className="card-half"></div>
            <div className="card-half"></div>
          </div>
          <div className="row row-one row3">
            <div className="card-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
