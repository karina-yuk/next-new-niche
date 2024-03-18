// src/pages/Contact/index.jsx
import React from 'react';
import './Newsletter.css'; 

const Newsletter = ({  }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form Submitted');
  };

  return (
    <section id="contact" className="contact">
     <div className={"container " }>
          <div className="position-relative d-flex text-center mb-5">
           
          <h2
            className={
              "text-24   fw-600 w-100 mb-0 " 
            }
          >
            Pour Decision News
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " 
            }
          >
            SUBSCRIBE
            <span className="heading-separator-line  d-block mx-auto" />
          </p>
       
      </div>

      <br></br>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" className="form-control" id="subject" placeholder="Subject" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="5" placeholder="Your Message Here" required></textarea>
        </div>
        <div className="form-submit-group"> {/* Wrapping the button for consistent padding if needed */}
  <button type="submit" className="btn btn-primary">Send Message</button>
</div>
      </form>
      
      </div>
    </section>
  );
};

export default Newsletter;
