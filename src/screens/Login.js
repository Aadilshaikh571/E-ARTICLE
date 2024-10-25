import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false); // Loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setError({
            ...error,
            [name]: "",
        });
    };

    // Updated handleSubmit in Login component
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      const response = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              email: formData.email,
              password: formData.password,
          }),
      });

      const json = await response.json();
      
      if (!response.ok) {
          throw new Error(json.error || "Login failed");
      }

      // Store the token and role
      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("userRole", json.role); // Save user role
      setSuccess(true);

  } catch (err) {
      setError({ form: err.message });
      setSuccess(false);
  }
};

    if (success) {
        return <Navigate to="/" />;
    }
// utils.js (or any appropriate file)


    return (
        <div className="login-page">
            <div className="login-card">
                <h2 className="login-title">Login to Your Account</h2>
                {error.form && <p className="error-message">{error.form}</p>}

                <form onSubmit={handleSubmit} className="login-form">
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
                        {error.email && <p className="input-error-message">{error.email}</p>}
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
                        {error.password && <p className="input-error-message">{error.password}</p>}
                    </div>

                    {/* Submit button */}
                    <div className="form-group">
                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </div>
                </form>
                <Link to={"/createuser"} className="m-5">Don't have an account? Sign Up</Link>
            </div>
        </div>
    );
};

export default Login;
