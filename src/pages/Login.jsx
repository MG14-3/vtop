import React, { useState } from "react";
import "../styles/Login.css";
import Header from "../components/Header";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", email, password);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="login-container">
        <div className="vtop-login-card">
          <h2 className="vtop-header">VTOP Login</h2>

          <form className="vtop-form">
            <div className="vtop-input-group">
              <input type="text" placeholder="Username" />
              <span className="input-icon">
                <FaUserAlt />
              </span>
            </div>

            <div className="vtop-input-group">
              <input type="password" placeholder="Password" />
              <span className="input-icon">
                <RiLockPasswordLine />
              </span>
            </div>

            <button type="submit" className="vtop-submit-btn">
              Submit
            </button>
          </form>

          <div className="vtop-links">
            <div className="left-links">
              <a href="#">Forgot Password</a>
              <a href="#">Forgot LoginId</a>
            </div>
            <a href="/" className="home-link">
              Go to Home Page
            </a>
          </div>
        </div>
      </div>
      <div className="footer-container">
        VTOP-Replica | Portfolio Project | Developed by: Mangalam | VIT-AP
        University
      </div>
    </>
  );
};

export default Login;
