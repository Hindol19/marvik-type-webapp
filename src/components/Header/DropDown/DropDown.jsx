import React from "react";
import { useNavigate } from "react-router-dom";
import "./DropDown.scss";
function DropDown({ setIsServiceHovered }) {
  const navigate = useNavigate();

  return (
    <div
      className="dropDown-container"
      onMouseEnter={() => setIsServiceHovered(true)}
      onMouseLeave={() => setIsServiceHovered(false)}
    >
      <ul>
        <li onClick={() => navigate("/services/llm")}>Large Language Models</li>
        <li onClick={() => navigate("/services/nlp")}>
          Natural Language Processing
        </li>
        <li onClick={() => navigate("/services/cv")}>Computer Vision</li>
        <li onClick={() => navigate("/services/cb")}>Conversational AI</li>
      </ul>
    </div>
  );
}

export default DropDown;
