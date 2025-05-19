import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card class-base">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <div className="input-group">
            <label className="input-label">Email</label>
            <input className="input-field" type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label className="input-label">Password</label>
            <input className="input-field" type="password" placeholder="Enter your password" />
          </div>
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" />
              Remember me
            </label>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="register-prompt">
          <p className="register-text">Don't have an account ? 
            <Link to="/Register" className="Register-link">Register</Link>
            </p>
            
        </div>
      </div>
    </div>
  );
};

export default Login;
