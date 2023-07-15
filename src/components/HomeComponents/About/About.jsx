import React from "react";
import "./About.scss";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import VrpanoOutlinedIcon from "@mui/icons-material/VrpanoOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
const About = () => {
  return (
    <section className="two about-container">
      <div className="about-layout">
        <div className="right">
          <h2 className="about-title">How can we help you?</h2>
          <p className="about-desc">
            <ol>
              <li>
                <div className="list-content">
                  <span>01</span>
                  Big Data and Analytics
                </div>
                <div className="li-icon">
                  <AssessmentOutlinedIcon />
                </div>
              </li>
              <li>
                <div className="list-content">
                  <span>02</span>
                  Computer Vision
                </div>
                <div className="li-icon">
                  <RemoveRedEyeOutlinedIcon />
                </div>
              </li>
              <li>
                <div className="list-content">
                  <span>03</span>
                  UI/UX, Testing
                </div>
                <div className="li-icon">
                  <QuizOutlinedIcon />
                </div>
              </li>
              <li>
                <div className="list-content">
                  <span>04</span>
                  Web and App Developement
                </div>
                <div className="li-icon">
                  <LanguageOutlinedIcon />
                </div>
              </li>
              <li>
                <div className="list-content">
                  <span>05</span>
                  Legacy Software Modernization, DevOps
                </div>
                <div className="li-icon">
                  <AllInclusiveOutlinedIcon />
                </div>
              </li>
              <li>
                <div className="list-content">
                  <span>06</span>
                  Innovation Consulting
                </div>
                <div className="li-icon">
                  <TipsAndUpdatesOutlinedIcon />
                </div>
              </li>
              <li>
                <div className="list-content">
                  <span>07</span>
                  Machine Learning Modelling
                </div>
                <div className="li-icon">
                  <PsychologyOutlinedIcon />
                </div>
              </li>
              <li>
                <div className="list-content">
                  <span>08</span>
                  Large Language Models
                </div>
                <div className="li-icon">
                  <Diversity2OutlinedIcon />
                </div>
              </li>
              <li>
                <div className="list-content">
                  <span>09</span>
                  Intelligent Automation
                </div>
                <div className="li-icon">
                  <SettingsSuggestOutlinedIcon />
                </div>
              </li>
              <li>
                <div className="list-content">
                  <span>10</span>
                  AR, VR or MR
                </div>
                <div className="li-icon">
                  <VrpanoOutlinedIcon />
                </div>
              </li>
              <li>
                <div className="list-content">
                  <span>11</span>
                  Custom Chatbots
                </div>
                <div className="li-icon">
                  <LiveHelpOutlinedIcon />
                </div>
              </li>
            </ol>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
