import React, { useState } from "react";



const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Clear form data
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      const data = await response.json();
      // Handle success or error response
    } catch (error) {
      console.error("Sign up failed", error);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
    {/* Username Field */}
    <div className="mb-3">
      <input
        type="username"
        name="username"
        className="form-control"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
    </div>
    
    {/* Email Field */}
    <div className="mb-3">
      <input
        type="email"
        name="email"
        className="form-control"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
    </div>
  
    {/* Password Field */}
    <div className="mb-3">
      <input
        type="password"
        name="password"
        className="form-control"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
    </div>
  
    {/* Confirm Password Field */}
    <div className="mb-3">
      <input
        type="password"
        name="confirmPassword"
        className="form-control"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        required
      />
    </div>
  
    {/* Submit Button */}
    <div className="text-center">
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </div>
  </form>
  );
};

export default SignUpForm;
