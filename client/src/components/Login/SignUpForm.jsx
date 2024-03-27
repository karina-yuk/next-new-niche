import React, { useState } from "react";
// import eyeIcon from "/Users/samgostanian/Sams-coding-projects/Project 3/next-new-niche/client/src/img/eye-svgrepo-com.svg";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to track confirm password visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleTogglePassword = (field) => {
  //   if (field === "password") {
  //     setShowPassword(!showPassword); // Toggle password visibility
  //   } else if (field === "confirmPassword") {
  //     setShowConfirmPassword(!showConfirmPassword); // Toggle confirm password visibility
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/users/login", {
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
      });

      const data = await response.json();
      // Handle success or error response
    } catch (error) {
      console.error("Sign up failed", error);
    }
  };

  return (
    <form className="Signup-form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <div className="password-input-container">
        <input
          // type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        {/* <img
          src={eyeIcon}
          alt={showPassword ? "Hide Password" : "Show Password"}
          className="eye-icon"
          onClick={() => handleTogglePassword("password")}
        /> */}
      </div>
      <div className="password-input-container">
        <input
          // type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        {/* <img
          src={eyeIcon}
          alt={showConfirmPassword ? "Hide Password" : "Show Password"}
          className="eye-icon"
          onClick={() => handleTogglePassword("confirmPassword")}
        /> */}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
