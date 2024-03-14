// src/pages/Contact/index.jsx
import React from 'react';
import './Newsletter.css'; 

const Newsletter = ({ handleNavClick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <div className="container my-5">
      <div className="col-lg-12 text-center"></div>
      <h2 className="section-heading">Get in Touch</h2>
            <hr className="my-4" />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Newsletter;
