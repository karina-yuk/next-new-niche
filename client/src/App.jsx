// src/App.jsx

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import WrapperComponent from "./components/WrapperComponent";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {

      // Define the function to handle navigation click
      const handleNavClick = (elementId) => {
        // This will scroll to the Element with the corresponding 'name' prop
        document.getElementById(elementId).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      };
  return (
  
    <Router>
      <Header handleNavClick={handleNavClick}/>
      <WrapperComponent handleNavClick={handleNavClick}/>
    </Router>
  );
}

export default App;
