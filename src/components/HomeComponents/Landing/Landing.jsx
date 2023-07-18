import React from "react";
import "./Landing.scss";
import Land from "../../../assets/aboutPic.jpg";
import { useNavigate } from "react-router-dom";
const Landing = ({ landingContent, isHome = false }) => {
  const navigate = useNavigate();
  // isHome = false;
  // console.log(isHome);
  return (
    <section className={`one landing-container ${isHome && "padding-none"}`}>
      <div className="landing-layout">
        <div className={`left ${isHome && "fixed-height"}`}>
          <h2 className="landing-title">{landingContent.title}</h2>
          <p className="landing-desc">{landingContent.desc}</p>
          <button
            className="learn-more-button"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
          <div className="companies">
            <ul>
              <li>Emerge Wave</li>
              <li>InfinitiSync</li>
              <li>Novus Tech</li>
              <li>Luminox.com</li>
            </ul>
          </div>
        </div>
        {!isHome && (
          <div className="right">
            <img src={Land} alt="" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Landing;
