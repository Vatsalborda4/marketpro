import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-wrapper">
      <div className="register-card class-base">
        <h2 className="register-title">Create Account</h2>
        <form className="register-form">
          <div className="input-group">
            <label className="input-label">Full Name</label>
            <input className="input-field" type="text" placeholder="Enter your full name" />
          </div>

          <div className="input-group">
            <label className="input-label">Email</label>
            <input className="input-field" type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input className="input-field" type="password" placeholder="Enter a password" />
          </div>

          <div className="input-group">
            <label className="input-label">Confirm Password</label>
            <input className="input-field" type="password" placeholder="Confirm your password" />
          </div>

          <div className="input-group">
            <label className="input-label">Date of Birth</label>
            <input className="input-field" type="date" />
          </div>

          <button type="submit" className="register-submit-button">Register</button>
        </form>

        <div className="login-prompt">
          <p className="login-text">Already have an account ? <Link to="/login" className="Register-link">Login</Link></p>
        </div>
      </div>
      .popup
    </div>
    
  );
};

export default Register;
