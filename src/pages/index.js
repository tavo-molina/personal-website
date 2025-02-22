import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar/index";
import Sidebar from "../components/Sidebar/index";
import Services from "../components/Services/index";
import ProfessionalExperience from "../components/ProfessionalExperience/index";
import Footer from "../components/Footer";
import InfoSlider from "../components/InfoSlider/index";
import "../components/ImageSlider0/styles.css";
import InfoSlider0 from "../components/InfoSlider0/index";
import { sliderObj1 } from "../components/InfoSlider/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSlider0 {...homeObjOne} />
      <ProfessionalExperience />
      <Services />
      <InfoSlider {...sliderObj1} />
      <InfoSection {...homeObjTwo} />

      <Footer />
    </Router>
  );
};

export default Home;
