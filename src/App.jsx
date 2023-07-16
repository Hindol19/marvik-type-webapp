import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
// import Navbar2 from "./components/Navbar/Navbar2";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Work from "./Pages/Work/Work";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicesPage from "./Pages/Services/ServicesPage";
import { servicesList } from "./data/servicesList.js";
const App = () => {
  const landingContent = {
    home: {
      title: "Next Gen Enterprise ",
      desc: "Software Developement Company",
    },
    about: {
      title: "About Landing Title",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ea, placeat libero quos suscipit obcaecati reprehenderit fuga saepe architecto accusamus! placeat libero quos suscipit obcaecati reprehenderit fuga saepe architecto accusamus! ",
    },
    work: {
      title: "We use state of the art technology",
      desc: "We work with computer vision, natural language processing and predictive analytics developing end to end solutions",
    },
    services: {
      title: "Services Landing Title",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ea, placeat libero quos suscipit obcaecati reprehenderit fuga saepe architecto accusamus! placeat libero quos suscipit obcaecati reprehenderit fuga saepe architecto accusamus! ",
    },
    contact: {
      title: "Contact Landing Title",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ea, placeat libero quos suscipit obcaecati reprehenderit fuga saepe architecto accusamus! placeat libero quos suscipit obcaecati reprehenderit fuga saepe architecto accusamus! ",
    },
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <Navbar2 /> */}
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
          <Route
            path="/services/llm"
            element={
              <ServicesPage
                landingContent={landingContent.services}
                content={servicesList.llm}
              />
            }
          />
          <Route
            path="/services/cb"
            element={
              <ServicesPage
                landingContent={landingContent.services}
                content={servicesList.conAI}
              />
            }
          />
          <Route
            path="/services/nlp"
            element={
              <ServicesPage
                landingContent={landingContent.services}
                content={servicesList.nlp}
              />
            }
          />
          <Route
            path="/services/cv"
            element={
              <ServicesPage
                landingContent={landingContent.services}
                content={servicesList.cv}
              />
            }
          />
          <Route
            path="/contact"
            element={<Contact landingContent={landingContent.contact} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
