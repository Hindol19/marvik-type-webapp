import React from "react";
import "./HomeLanding.scss";
import { useNavigate } from "react-router";
const HomeLanding = () => {
  const navigate = useNavigate();
  return (
    <section className="two homeLanding-container">
      <div className="homeLanding-layout">
        <div className="right">
          <h2 className="homeLanding-title">Next Gen Enterprise</h2>
          <p className="homeLanding-desc">Software Developement Company</p>
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
      </div>
    </section>
  );
};

export default HomeLanding;
