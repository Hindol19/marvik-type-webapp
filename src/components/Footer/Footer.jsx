import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";
import { FaHome, FaQuestion, FaNetworkWired } from "react-icons/fa";
import { AiOutlineMail, AiOutlineInfoCircle } from "react-icons/ai";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import Payment from "../../assets/payments.png";
// import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text footer-leftmost-text">
            <div className="footer-leftmost-text-lines">
              <LocationOnIcon />
              Tribeni, Manasatala, Hooghly- 712503, WB, IN
            </div>
            <div className="footer-leftmost-text-lines">
              <MailIcon />
              subhro@pentaneuron.com
            </div>
            <div className="footer-leftmost-text-lines">
              <LocalPhoneIcon />
              +91 74398 45423
            </div>
            <div className="social-icons">
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <LanguageIcon />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item" onClick={() => navigate("/")}>
            <FaHome />
            <div className="text">Home</div>
          </div>
          <div className="c-item" onClick={() => navigate("/about")}>
            <AiOutlineInfoCircle />
            <div className="text">About</div>
          </div>
          <div className="c-item" onClick={() => navigate("/work")}>
            <FaNetworkWired />
            <div className="text">Work</div>
          </div>
          <div className="c-item" onClick={() => navigate("/contact")}>
            <AiOutlineMail />
            <div className="text">Contact</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Services:</span>
          <span className="text">Large Language Models</span>
          <span className="text">Conversational AI</span>
          <span className="text">Natural Language Processing</span>
          <span className="text">Computer Vision</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">Privacy Policy - @2023 Pentaneuron Group</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
