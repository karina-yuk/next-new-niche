import React from 'react';

import { Element } from "react-scroll";
import AboutUs from "../AboutUs";
import Home from "../Home";
import WhatIDo from "../WhatIDo";
import Resume from "../Resume";
import Portfolio from "../Portfolio";
import Testimonial from "../Testimonials";
import Subscribe from "../Subscribe";
import Footer from "../Footer";
import "./WrapperComponent.css";

const WrapperComponent = ({handleNavClick}) => {
  return (
    // <div className="vh-100 ">
  <div className="wrapper-component">
            <Element name="home"  id="home"><Home handleNavClick={handleNavClick} /></Element>
            <Element name="aboutus" id="aboutus"><AboutUs handleNavClick={handleNavClick} /></Element>
            <Element name="whatido" id="whatido"><WhatIDo handleNavClick={handleNavClick} /></Element>
            <Element name="resume" id="resume"><Resume handleNavClick={handleNavClick} /></Element>
            <Element name="portfolio" id="portfolio"><Portfolio handleNavClick={handleNavClick}/></Element>
            <Element name="testimonials" id="testimonials"><Testimonial handleNavClick={handleNavClick}/></Element>
            <Element name="subscribe" id="subscribe"><Subscribe handleNavClick={handleNavClick}/></Element>
            <Footer />
        </div>
  );
};

export default WrapperComponent;
