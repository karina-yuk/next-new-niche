// src/components/Header.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Modal from 'react-bootstrap/Modal';
import LoginForm from '../Login/LoginForm';
import SignUpForm from '../Login/SignUpForm';
import "./Header.css";

const Header = ({ isLoggedIn, handleNavClick }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedTab, setSelectedTab] = useState("home");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleLoginClose = () => setShowLoginModal(false);
  const handleLoginShow = () => setShowLoginModal(true);

  const handleSignUpClose = () => setShowSignUpModal(false);
  const handleSignUpShow = () => setShowSignUpModal(true);
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);

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
    <header
      className={`header bg-dark text-white vh-100 fix-to-left ${isSticky ? "sticky" : ""
        }`}
    >
      <div className="profile-container">
      <div className="shadow"> 
        <img
          src="https://i.pinimg.com/564x/7f/4b/77/7f4b77922662e577a5202aea3d70592a.jpg"
          alt="Profile"
          className="profile-image"
        />
        <p className="fw-bold fs-4">Whine About Wine</p>

        </div>
      </div>
      <nav className={`nav flex-column ${!isNavModalOpen ? "" : "open"}`}>
        <Link
          onClick={() => {
            setSelectedTab("home");
            handleNavClick("home");
          }}
          className={`nav-link test ${selectedTab === "home" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          className={`nav-link ${selectedTab === "aboutus" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setSelectedTab("aboutus");
            handleNavClick("aboutus");
          }}
        >
          About Us
        </Link>

        <Link
          className={`nav-link ${selectedTab === "post" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setSelectedTab("post");
            handleNavClick("post");
          }}
        >
          Blog Post
        </Link>

        <Link 
          className={`nav-link ${selectedTab === "events" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setSelectedTab("events");
            handleNavClick("events");
          }}
        >
          Events
        </Link>

        <Link 
          className={`nav-link ${selectedTab === "featurepost" ? "active" : ""
            }`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setSelectedTab("featurepost");
            handleNavClick("featurepost");
          }}
        >
          Feature Post
        </Link>

        <Link
          className={`nav-link ${selectedTab === "testimonial" ? "active" : ""
            }`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setSelectedTab("testimonial");
            handleNavClick("testimonial");
          }}
        >
          Testimonial
        </Link>

        <Link
          className={`nav-link ${selectedTab === "newsletter" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setSelectedTab("newsletter");
            handleNavClick("newsletter");
          }}
        >
          Subscribe
        </Link>
        
        {isLoggedIn ? (
          <Link
            className={`nav-link ${selectedTab === "Home" ? "active" : ""}`}
            style={{ cursor: "pointer" }}
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => {
              setSelectedTab("Home");
              handleNavClick("Home");
              handleLogoutClick();
            }}
          >Log Out
          </Link>
        ) : (
          <Link
          to="#login"
          style={{ cursor: "pointer" }}
          className={`nav-link ${selectedTab === "LoginForm" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleLoginShow();
          }}
        >
          Log In
        </Link>
        )}
        {!isLoggedIn && (
        <Link
        to="#signup"
        style={{ cursor: "pointer" }}
        className={`nav-link ${selectedTab === "SignUpForm" ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          handleSignUpShow();
        }}
      >
        Sign Up
      </Link>
        )}

      </nav>
      <div className="social-links">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
       {/* Login Modal */}
       <Modal show={showLoginModal} onHide={handleLoginClose} onSubmit={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={showSignUpModal} onHide={handleSignUpClose} onSubmit={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm />
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;
