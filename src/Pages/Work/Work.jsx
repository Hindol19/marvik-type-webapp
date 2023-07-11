import React from "react";
import Landing from "../../components/HomeComponents/Landing/Landing";
import Projects from "../../components/WorkComponents/Projects/Projects";
import MoreWork from "../../components/WorkComponents/MoreWork/MoreWork";
// import Carousel from "../../components/WorkComponents/Carousel/CarouselItem";
import CarouselItem from "../../components/WorkComponents/Carousel/CarouselItem";
const Work = ({ landingContent }) => {
  return (
    <div className="work-container">
      <Landing landingContent={landingContent} />
      <Projects />
      <MoreWork />
      <CarouselItem />
    </div>
  );
};

export default Work;
