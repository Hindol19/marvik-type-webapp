import React from "react";
import Landing from "../../components/HomeComponents/Landing/Landing";
import Difference from "../../components/AboutComponents/Difference/Difference";
import Tech from "../../components/AboutComponents/Tech/Tech";
import "./About.scss";
const About = ({ landingContent }) => {
  window.scrollTo(0, 0);
  return (
    <div className="aboutPage-container">
      <Landing landingContent={landingContent} />
      <div className="aboutPage-content">
        <Difference />
        <Tech />
      </div>
    </div>
  );
};

export default About;
