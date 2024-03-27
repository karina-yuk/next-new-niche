import React from "react";

import { Element } from "react-scroll";
import AboutUs from "../AboutUs";
import Home from "../Home";
import Posts from "../Posts";
import Events from "../Events";
import FeaturePosts from "../FeaturePosts";
import Testimonial from "../Testimonials";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import "./WrapperComponent.css";

const WrapperComponent = ({ handleNavClick }) => {
  return (
    // <div className="vh-100 ">
    <div className="wrapper-component">
      <Element name="home" id="home">
        <Home handleNavClick={handleNavClick} />
      </Element>
      <Element name="aboutus" style={{ height: "100%" }} id="aboutus">
        <AboutUs handleNavClick={handleNavClick} />
      </Element>
      <Element name="post" style={{ height: "100%" }} id="post">
        <Posts handleNavClick={handleNavClick} />
      </Element>
      <Element name="events" style={{ height: "100%" }} id="events">
        <Events handleNavClick={handleNavClick} />
      </Element>
      <Element name="featurepost" style={{ height: "100%" }} id="featurepost">
        <FeaturePosts handleNavClick={handleNavClick} />
      </Element>
      <Element name="testimonials" style={{ height: "100%" }} id="testimonials">
        <Testimonial handleNavClick={handleNavClick} />
      </Element>
      <Element name="newsletter" style={{ height: "100%" }} id="newsletter">
        <Newsletter handleNavClick={handleNavClick} />
      </Element>
      <Footer />
    </div>
  );
};

export default WrapperComponent;
