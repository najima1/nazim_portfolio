import React from "react";
import About_me from "../About_me/About_me";
import Contact from "../Contact/Contact";
import Hero_section from "../Hero_section/Hero_section";
import Portfolio from "../PortFolio/Portfolio";
import Skills from "../Skills/Skills";
import Spinner from "../Spinner/Spinner";
import WindoLoader from "../WindoLoader/WindoLoader";

const Home = () => {
  return (
    <div className="">
      {/* hero section */}
      <Hero_section />

      {/* about me section */}
      <About_me />

      {/* my skills section */}
      <Skills />

      {/* portfolio section */}
      <Portfolio />

      {/* contact section */}
      <Contact />
    </div>
  );
};

export default Home;
