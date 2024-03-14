// src/pages/AboutMe/index.jsx

import React from 'react';
import './AboutUs.css'; 


const AboutMe = ({ handleNavClick, darkTheme }) => {
  return (
    <section id="about" className="about-us">
    <div className="container">
    <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24   fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Know Us More
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            ABOUT US
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
     
      <p className="introduction">
      Dive into VineVirtue—your go-to digital decanter, where five tech-savvy vintners merge code with cabernet, and pixels with pinot. We're navigating the boundless vineyard of the web, creating a unique spot for wine lovers to rally, learn, and toast to the diverse world of wines. Picture this: trekking from the sun-kissed slopes of Tuscany to Napa's untamed terrains, sipping through Bordeaux's noble estates, and uncovering Moldova's secret cellars. Our voyage is all about unearthing and sharing the rich, layered flavors and legendary tales each pour reveals. But here's the twist: VineVirtue isn't just a blog—it's a revolution. A place where wine newbies and aficionados alike can dig deep into the art and science of wine. Ready to pop the cork on wine's greatest mysteries, one bottle at a time? Join us. The adventure begins now.
      </p>
      <div className="personal-details">
        <p><strong>From:</strong> Canada</p>
        <p><strong>Skills:</strong> Cabernet, React, Pinot, MongoDB, Chardonay, JavaScript</p>
        <p><strong>Hobbies:</strong> Driving & Coding, Grape Harvesting, Cellars Exploration</p>
      </div>
     
      
    </div>
  </section>
  );
};

export default AboutMe;
