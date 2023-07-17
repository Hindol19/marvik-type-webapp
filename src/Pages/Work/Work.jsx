import React from "react";
import Landing from "../../components/HomeComponents/Landing/Landing";
import Projects from "../../components/WorkComponents/Projects/Projects";
import MoreWork from "../../components/WorkComponents/MoreWork/MoreWork";

const Work = ({ landingContent }) => {
  // window.scrollTo(0, 0);
  return (
    <div className="work-container">
      <Landing landingContent={landingContent} />
      <Projects />
      <MoreWork />
    </div>
  );
};

export default Work;
