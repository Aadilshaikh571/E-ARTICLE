import React, { useState } from "react";
import "./Signup.css";
import { Link, Navigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    role: "user",
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState(null);

  // Validation checks
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    // Validate email
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Validate password (minimum 8 characters, one letter, one number, one special character)
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters, include a number, letter, and special character";
    }

    return newErrors;
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError({
      ...error,
      [name]: "", // Clear error when the user types
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      const json = await response.json();
      console.log("Response status:", response.status);
      console.log("Response body:", json);

      if (!response.ok) {
        throw new Error(json.message || "Failed to create user");
      }

      setSuccess("User created successfully");
    } catch (err) {
      setError({ form: err.message });
      setSuccess(null);
      console.error("Error creating user:", err);
    }
    
  };
  if (success) {
    return <Navigate to="/" replace />; 
  }
  return (
    <div className="Outer">
      {" "}
      <div className="signup-page">
        <div className="signup-card">
          <h2 className="signup-title">Create Your Account</h2>

          {error.form && <p className="error-message">{error.form}</p>}
          {success && <p className="success-message">{success}</p>}

          <form onSubmit={handleSubmit} className="signup-form">
            {/* Email */}
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                className={`form-input ${error.email ? "input-error" : ""}`}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {error.email && (
                <p className="input-error-message">{error.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                className={`form-input ${error.password ? "input-error" : ""}`}
                value={formData.password}
                onChange={handleChange}
                required
              />
              {error.password && (
                <p className="input-error-message">{error.password}</p>
              )}
            </div>

            {/* Name (optional) */}
            <div className="form-group">
              <label>Name (optional):</label>
              <input
                type="text"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Role */}
            <div className="form-group">
              <label>Role:</label>
              <select
                name="role"
                className="form-input"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Submit button */}
            <div className="form-group">
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
            </div>
          </form>
          <Link to={"/login"} className="m-5">
            Already a User
          </Link>
        </div>
      </div>{" "}
    </div>
  );
};

export default Signup;
