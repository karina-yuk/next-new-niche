import React from 'react';

import { Element } from "react-scroll";
import AboutUs from "../AboutUs";
import Home from "../Home";
import Posts  from "../Posts";
import Events  from "../Events";
import FeaturePosts from "../FeaturePosts";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import "./WrapperComponent.css";

const WrapperComponent = ({handleNavClick}) => {
  return (
    // <div className="vh-100 ">
  <div className="wrapper-component">
            <Element name="home"  id="home"><Home handleNavClick={handleNavClick} /></Element>
            <Element name="aboutus" id="aboutus"><AboutUs handleNavClick={handleNavClick} /></Element>
            <Element name="blogpost" id="blogpost"><Posts handleNavClick={handleNavClick} /></Element>
            <Element name="wineevents" id="wineevents"><Events handleNavClick={handleNavClick} /></Element>
            <Element name="featureblogpost" id="featureblogpost"><FeaturePosts handleNavClick={handleNavClick}/></Element>
            <Element name="newslettersubscribe" id="newslettersubscribe"><Newsletter handleNavClick={handleNavClick}/></Element>
            <Footer />
        </div>
  );
};

export default WrapperComponent;
