import React, { useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Work from "./Pages/Work/Work";
import Footer from "./components/Footer/Footer";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
 

  const landingContent = {
    home: {
      title: "Home Landing Title",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ea, placeat libero quos suscipit obcaecati reprehenderit fuga saepe architecto accusamus! ",
    },
    about: {
      title: "About Landing Title",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ea, placeat libero quos suscipit obcaecati reprehenderit fuga saepe architecto accusamus! placeat libero quos suscipit obcaecati reprehenderit fuga saepe architecto accusamus! ",
    },
    work: {
      title: "Work Landing Title",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ea, placeat libero quos suscipit obcaecati reprehenderit fuga saepe architecto accusamus! placeat libero quos suscipit obcaecati reprehenderit fuga saepe architecto accusamus! ",
    },
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home landingContent={landingContent.home} />}
          />
          <Route
            path="/about"
            element={<About landingContent={landingContent.about} />}
          />
          <Route
            path="/work"
            element={<Work landingContent={landingContent.work} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
