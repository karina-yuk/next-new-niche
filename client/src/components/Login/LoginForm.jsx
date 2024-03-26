import React, { useState } from "react";
import "./Login.css";
import eyeIcon from "/Users/samgostanian/Sams-coding-projects/Project 3/next-new-niche/client/src/img/eye-svgrepo-com.svg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // State to track password visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // Handle success or error response
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <div className="password-input-container">
        <input
          type={showPassword ? "text" : "password"} // Conditional rendering based on showPassword state
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        ></input>
        <img
          src={eyeIcon}
          alt={showPassword ? "Hide Password" : "Show Password"}
          className="eye-icon"
          onClick={handleTogglePassword}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
