import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import InfoSection from "../components/InfoSection/InfoSection";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  //First we need to use useState and set it to false
  const [isOpen, setIsOpen] = useState(false);

  //Then we need to set up a
  //function to set the current state from false to true
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {/*With toggle we can close the menu with clicking anywhere on the screen.*/}
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
