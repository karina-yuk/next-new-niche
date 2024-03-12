// src/components/Header.jsx

import React, {useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css";



const Header = ({ handleNavClick }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);

  // This function will toggle the visibility of the navigation modal in mobile view
  const toggleNav = () => setIsNavModalOpen(!isNavModalOpen);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 180) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

 

  return (
    <header className={`header bg-dark text-white vh-100 fix-to-left ${isSticky ? "sticky" : ""}`}>
      <div className="profile-container">
        <img
          src="https://media.licdn.com/dms/image/D5603AQHvhrfO7_qk0Q/profile-displayphoto-shrink_800_800/0/1708111679202?e=1715817600&v=beta&t=ccjlk-99gBuLRePPCx2lMsoBsIiwJdHxPuY3syfpark"
          alt="Profile"
          className="profile-image"
        />
        <h2>Olivia's Five</h2>
      </div>
      <nav className={`nav flex-column ${!isNavModalOpen ? '' : 'open'}`}>
        <Link
        onClick={() => handleNavClick('home')}
        activeClass="active"
          to="home"
          className="nav-link"
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          
        >
          Home
        </Link>
        <Link
        activeClass="active"
          to="aboutus"
          className="nav-link"
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => handleNavClick('aboutus')}
        >
          About Us
        </Link>
        <Link
        activeClass="active"
          to="whatido"
          className="nav-link"
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => handleNavClick('whatido')}
        >
          What I Do
        </Link>
        <Link
        activeClass="active"
          to="resume"
          className="nav-link"
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => handleNavClick('resume')}
        >
          Resume
        </Link>
        <Link
        activeClass="active"
          to="portfolio"
          className="nav-link"
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => handleNavClick('portfolio')}
        >
          Portfolio
        </Link>
        <Link
        activeClass="active"
          to="testimonial"
          className="nav-link"
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => handleNavClick('testimonial')}
        >
          Testimonial
        </Link>
        <Link
        activeClass="active"
          to="subscribe"
          className="nav-link"
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => handleNavClick('subscribe')}
        >
          Subscribe
        </Link>
      </nav>

      <div className="social-links">
        <a
          href="https://linkedin.com/in/stanislavmorozan"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/Stas-Cell-Max"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://facebook.com/stas.moozan"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com/stas_moozan"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
     
    </header>
  );
};

export default Header;
