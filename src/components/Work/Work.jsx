import React from "react";
import SingleWork from "./SingleWork/SingleWork";
import "./Work.scss";
const Work = () => {
  return (
    <section className="three work-container">
      <div className="work-layout">
        <h2 className="work-title">Our Works</h2>

        <div className="work-drawer">
          <SingleWork />
          <SingleWork />
          <SingleWork />
          <SingleWork />
        </div>
      </div>
    </section>
  );
};

export default Work;
