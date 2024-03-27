// src/components/Home/Home.jsx
// src/components/Home/Home.jsx

import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';

const Home = ({ handleNavClick }) => {
  
  return (
    <section id="home" className="home-section d-flex min-vh-100 align-items-center justify-content-center">
     <div className="container text-center"
     >
        <p className="text-7 fw-500 text-white mb-2 mb-md-3">Welcome</p>
        <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
          <Typewriter
            options={{
              strings: [
                "We are Olivia's Five.",
                "We are Web Developers",
                "We Drink and Code",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
       <p className="text-5 text-light mb-4">...and we are Canadians.</p>

       <a
            className="btn btn-outline-secondary rounded-pill shadow-none smooth-scroll mt-2"
            onClick={() => handleNavClick('contact')}
          >
            Let's Uncork One
            </a>
        </div>

        
        <button
          className="scroll-down-arrow animated text-white btn btn-link btn-lg"
          onClick={() => handleNavClick('about')}
        >
          <i className="fa fa-chevron-down"></i>
        </button>
     
    </section>
  );
};
export default Home;



