import React from "react";
import "./Footer.scss";
import { FaHome, FaQuestion, FaNetworkWired } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

// import Payment from "../../assets/payments.png";
// import { useNavigate } from "react-router-dom";
const Footer = () => {
  //   const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            mollitia deleniti molestias quia tenetur odio reprehenderit vel
            fugiat alias! Modi ipsam voluptate sapiente, debitis aliquid facilis
            cumque eaque assumenda voluptatem iu
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaHome />
            <div className="text">Home</div>
          </div>
          <div className="c-item">
            <FaQuestion />
            <div className="text">About</div>
          </div>
          <div className="c-item">
            <FaNetworkWired />
            <div className="text">Work</div>
          </div>
          <div className="c-item">
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
    </footer>
  );
};

export default Footer;
