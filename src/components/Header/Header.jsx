import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import "./Header.scss";
import { enableScroll, disableScroll } from "../../scripts/ToggleScrollEnable";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import DropDown from "./DropDown/DropDown";
import Logo from "../../assets/pentaneuron/pentaneuron.png";
const Header = () => {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // const [isDropDownHovered, setIsDropDownHovered] = useState(false);
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  console.log(isServiceHovered);
  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    //The useEffect Hook does a specific task for the first time after loading.
    window.addEventListener("scroll", handleScroll);
    //This will detect when the user scrolls and call the "handelScroll" function
  }, []);
  return (
    <nav
      className="navbar-container"
      style={{
        backgroundColor: !scrolled ? "rgba(0, 0, 0, 0)" : "black",
      }}
    >
      {isDesktop ? (
        <div className="navbar-layout">
          <div className="left" onClick={() => navigate("/")}>
            <img src={Logo} alt="" />
          </div>
          <div className="right">
            <div className="nav-item" onClick={() => navigate("/about")}>
              About Us
            </div>
            <div className="nav-item" onClick={() => navigate("/work")}>
              Our Work
            </div>
            <div
              className="nav-item"
              onMouseEnter={() => setIsServiceHovered(true)}
              onMouseLeave={() => setIsServiceHovered(false)}
            >
              Services
            </div>
            {/* <DropDown /> */}
            {isServiceHovered && (
              <DropDown setIsServiceHovered={setIsServiceHovered} />
            )}
            <div
              className="contact-link nav-item "
              onClick={() => navigate("/contact")}
            >
              Contact
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar-layout">
          <div
            className="sidebar-button"
            style={{
              backgroundColor: !scrolled ? "rgba(0, 0, 0, 0)" : "black",
            }}
            onClick={() => {
              sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true);
              !sidebarOpen ? disableScroll() : enableScroll();
            }}
          >
            <MenuIcon />
          </div>
          {sidebarOpen && (
            <div className="sidebar-content ">
              <div className="sidebar-title">hello there</div>
              <div className="sidebar-list">
                <div
                  className="sidebar-list-item"
                  onClick={() => navigate("/")}
                >
                  Home
                </div>
                <div
                  className="sidebar-list-item"
                  onClick={() => navigate("/about")}
                >
                  About Us
                </div>
                <div
                  className="sidebar-list-item"
                  onClick={() => navigate("/work")}
                >
                  Our Works
                </div>
                <div className="sidebar-list-item">
                  Services
                  <div>
                    <ul>
                      <li onClick={() => navigate("/services/llm")}>
                        Large Language Models
                      </li>
                      <li onClick={() => navigate("/services/nlp")}>
                        Natural Language Processing
                      </li>
                      <li onClick={() => navigate("/services/cv")}>
                        Computer Vision
                      </li>
                      <li onClick={() => navigate("/services/cb")}>
                        Conversational AI
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-list-item">Contact</div>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
