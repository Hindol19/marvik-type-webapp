import React from "react";
import "./About.scss";
const About = () => {
  return (
    <section className="two about-container">
      <div className="about-layout">
        <div className="right">
          <h2 className="about-title">How can we help you?</h2>
          <p className="about-desc">
            <ul>
              <li>Big Data and Analytics</li>
              <li>Computer Vision</li>
              <li>UI/UX, Testing </li>
              <li>Web and App Developement</li>
              <li>Legacy Software Modernization, DevOps</li>
              <li>Innovation Consulting</li>
              <li>Machine Learning Modelling</li>
              <li>Large Language Models</li>
              <li>Intelligent Automation</li>
              <li>AR, VR or MR</li>
              <li>Custom Chatbots</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
