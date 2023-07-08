import React, { useEffect, useState } from "react";
import "./Header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { enableScroll, disableScroll } from "../../scripts/ToggleScrollEnable";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
        backgroundColor: !scrolled && "rgba(0, 0, 0, 0)",
      }}
    >
      <div className="navbar-layout">
        <div className="left">Home</div>
        <div className="right">
          <div>About Us</div>
          <div>Our Work</div>
          <div>Services</div>
          <div>Contact</div>
        </div>
      </div>
      {/* {scrolled && (
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
                <div className="sidebar-list-item">Home</div>
                <div className="sidebar-list-item">About Me</div>
                <div className="sidebar-list-item">My Works</div>
                <div className="sidebar-list-item">Contact</div>
              </div>
            </div>
          )}
        </div>
      )} */}
    </nav>
  );
};

export default Header;
